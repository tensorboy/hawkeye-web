'use client'

import { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { demoTree, STAGE_COLORS, type DemoNode, getLocalizedDemoTree, getLegendLabels, getHawkeyeAction } from './demo-data'
import { computeDemoLayout, type LayoutNode, type LayoutEdge } from './tree-layout'
import { useTheme } from '@/components/ThemeProvider'

interface AnimatedLifeTreeProps {
  prefersReducedMotion: boolean
  locale?: string
}

// Helper to round floating-point values for consistent SSR/client hydration
const round = (value: number, decimals: number = 2): number =>
  Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)

// Precompute petal positions to avoid hydration mismatch from floating-point differences
const ROOT_PETAL_POSITIONS = [0, 60, 120, 180, 240, 300].map(angle => ({
  angle,
  cos: round(Math.cos((angle * Math.PI) / 180)),
  sin: round(Math.sin((angle * Math.PI) / 180)),
}))

const STAGE_PETAL_POSITIONS = [0, 72, 144, 216, 288].map(angle => ({
  angle,
  cos: round(Math.cos((angle * Math.PI) / 180)),
  sin: round(Math.sin((angle * Math.PI) / 180)),
}))

// Organic branch path generator - creates curved branch-like paths
function createOrganicBranchPath(edge: LayoutEdge): string {
  const { fromX, fromY, toX, toY } = edge

  // Validate inputs
  if (!isFinite(fromX) || !isFinite(fromY) || !isFinite(toX) || !isFinite(toY)) {
    return 'M 0 0 L 1 0' // fallback path
  }

  // Create organic curve with control points
  const midY = round((fromY + toY) / 2)
  const curve = round(Math.abs(toX - fromX) * 0.3)

  return `M ${round(fromX)} ${round(fromY + 12)}
          C ${round(fromX)} ${round(midY - curve)},
            ${round(toX)} ${round(midY + curve)},
            ${round(toX)} ${round(toY - 12)}`
}

// Create organic trunk path with natural curves
function createTrunkPath(rootY: number, bottomY: number): string {
  // Validate inputs
  if (!isFinite(rootY) || !isFinite(bottomY)) {
    return 'M 0 0 L 0 1' // fallback path
  }

  const trunkHeight = round(bottomY - rootY + 84)
  const ry = round(rootY)
  return `M 0 ${round(ry + 24)}
          C -3 ${round(ry + trunkHeight * 0.3)},
            3 ${round(ry + trunkHeight * 0.6)},
            0 ${round(bottomY + 60)}`
}

// Create root tendrils spreading from base - Celtic knot style intertwining
function createRootPaths(baseY: number): string[] {
  // Validate input
  if (!isFinite(baseY)) {
    return ['M 0 0 L 0 1'] // fallback
  }

  const by = round(baseY)
  return [
    // Main left root - curves outward then loops
    `M 0 ${round(by + 60)} Q -25 ${round(by + 70)}, -45 ${round(by + 65)} Q -60 ${round(by + 72)}, -70 ${round(by + 60)}`,
    // Main right root - mirrors left
    `M 0 ${round(by + 60)} Q 25 ${round(by + 70)}, 45 ${round(by + 65)} Q 60 ${round(by + 72)}, 70 ${round(by + 60)}`,
    // Secondary left - goes deeper
    `M 0 ${round(by + 60)} Q -15 ${round(by + 80)}, -35 ${round(by + 85)} Q -45 ${round(by + 95)}, -55 ${round(by + 88)}`,
    // Secondary right
    `M 0 ${round(by + 60)} Q 15 ${round(by + 80)}, 35 ${round(by + 85)} Q 45 ${round(by + 95)}, 55 ${round(by + 88)}`,
    // Inner left intertwine
    `M 0 ${round(by + 60)} Q -10 ${round(by + 72)}, -20 ${round(by + 78)} Q -28 ${round(by + 85)}, -18 ${round(by + 92)}`,
    // Inner right intertwine
    `M 0 ${round(by + 60)} Q 10 ${round(by + 72)}, 20 ${round(by + 78)} Q 28 ${round(by + 85)}, 18 ${round(by + 92)}`,
    // Center deep root
    `M 0 ${round(by + 60)} Q 0 ${round(by + 80)}, 0 ${round(by + 98)}`,
  ]
}

// Create tree crown/canopy arc effect
function createCanopyArc(centerX: number, centerY: number, radius: number): string {
  if (!isFinite(centerX) || !isFinite(centerY) || !isFinite(radius) || radius <= 0) {
    return 'M 0 0 L 1 0' // fallback
  }
  const cx = round(centerX)
  const cy = round(centerY)
  const r = round(radius)
  return `M ${cx - r} ${cy}
          Q ${round(cx - r * 0.7)} ${round(cy - r * 0.6)},
            ${cx} ${round(cy - r * 0.7)}
          Q ${round(cx + r * 0.7)} ${round(cy - r * 0.6)},
            ${cx + r} ${cy}`
}

// Create life energy spiral path around the tree
function createLifeSpiralPath(centerY: number, height: number): string {
  if (!isFinite(centerY) || !isFinite(height) || height <= 0) {
    return 'M 0 0 L 0 1' // fallback path
  }

  const points: string[] = []
  const startY = round(centerY + height / 2)
  const endY = round(centerY - height / 2)
  const amplitude = 70
  const turns = 2

  for (let i = 0; i <= 30; i++) {
    const t = i / 30
    const y = round(startY + (endY - startY) * t)
    const angle = t * turns * Math.PI * 2
    const x = round(Math.sin(angle) * amplitude * (1 - t * 0.5))
    points.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`)
  }

  return points.join(' ')
}

// Flower of Life sacred geometry pattern - overlapping circles
function FlowerOfLife({
  centerX,
  centerY,
  radius,
  prefersReducedMotion
}: {
  centerX: number
  centerY: number
  radius: number
  prefersReducedMotion: boolean
}) {
  if (!isFinite(centerX) || !isFinite(centerY) || !isFinite(radius) || radius <= 0) return null

  // Generate overlapping circle positions for Flower of Life pattern
  const circleRadius = round(radius * 0.18)
  const circles: { x: number; y: number }[] = [
    { x: round(centerX), y: round(centerY) }, // Center
  ]

  // First ring - 6 circles around center
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60 * Math.PI) / 180
    circles.push({
      x: round(centerX + circleRadius * Math.cos(angle)),
      y: round(centerY + circleRadius * Math.sin(angle))
    })
  }

  // Second ring - 12 circles
  for (let i = 0; i < 12; i++) {
    const angle = (i * 30 * Math.PI) / 180
    circles.push({
      x: round(centerX + circleRadius * 1.73 * Math.cos(angle)),
      y: round(centerY + circleRadius * 1.73 * Math.sin(angle))
    })
  }

  return (
    <motion.g>
      {circles.map((circle, i) => (
        <motion.circle
          key={`flower-${i}`}
          cx={circle.x}
          cy={circle.y}
          r={circleRadius}
          fill="none"
          stroke="url(#flowerGradient)"
          strokeWidth={0.5}
          initial={prefersReducedMotion ? { scale: 1, opacity: 0.08 } : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.08 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.02, duration: 0.8 }}
        />
      ))}
    </motion.g>
  )
}

// Circular Halo - sacred geometry frame around the tree
function TreeHalo({
  centerX,
  centerY,
  radius,
  prefersReducedMotion
}: {
  centerX: number
  centerY: number
  radius: number
  prefersReducedMotion: boolean
}) {
  return (
    <motion.g>
      {/* Outer decorative ring with bioluminescent glow */}
      <motion.circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="none"
        stroke="url(#haloGradient)"
        strokeWidth={2}
        opacity={0.3}
        strokeDasharray="8 4 2 4"
        filter="url(#bioGlow)"
        initial={prefersReducedMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
        animate={prefersReducedMotion ? {} : {
          rotate: [0, 360]
        }}
        style={{ transformOrigin: `${centerX}px ${centerY}px` }}
      />
      {/* Inner glow ring */}
      <motion.circle
        cx={centerX}
        cy={centerY}
        r={radius * 0.95}
        fill="none"
        stroke="url(#haloGradient)"
        strokeWidth={1}
        opacity={0.15}
        initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.15 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
      {/* Four cardinal point decorations - precomputed */}
      {[
        { angle: 0, cos: 1, sin: 0 },
        { angle: 90, cos: 0, sin: 1 },
        { angle: 180, cos: -1, sin: 0 },
        { angle: 270, cos: 0, sin: -1 },
      ].map((pos, i) => (
        <motion.circle
          key={pos.angle}
          cx={round(centerX + pos.cos * radius)}
          cy={round(centerY + pos.sin * radius)}
          r={4}
          fill="url(#haloGradient)"
          opacity={0.4}
          filter="url(#bioGlow)"
          initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 + i * 0.1, type: 'spring', stiffness: 200 }}
        />
      ))}
    </motion.g>
  )
}

// Energy veins connecting major nodes - life force pathways
function EnergyVeins({
  nodes,
  prefersReducedMotion,
  isMounted
}: {
  nodes: LayoutNode[]
  prefersReducedMotion: boolean
  isMounted: boolean
}) {
  if (prefersReducedMotion) return null

  const stageNodes = nodes.filter(n => n.type === 'stage')
  const rootNode = nodes.find(n => n.type === 'root')

  if (!rootNode || !isFinite(rootNode.x) || !isFinite(rootNode.y)) return null

  return (
    <motion.g>
      {stageNodes.map((node, i) => {
        // Validate node coordinates
        if (!isFinite(node.x) || !isFinite(node.y)) return null

        const color = node.stage ? STAGE_COLORS[node.stage] ?? '#d4a855' : '#d4a855'
        // Create curved energy vein from root to each stage
        const midX = round((rootNode.x + node.x) / 2)
        const midY = round((rootNode.y + node.y) / 2)
        const curve = 30 + i * 10
        const qx = round(midX + (i % 2 === 0 ? curve : -curve))
        const qy = round(midY - curve * 0.5)
        const path = `M ${round(rootNode.x)} ${round(rootNode.y)} Q ${qx} ${qy}, ${round(node.x)} ${round(node.y)}`

        return (
          <motion.g key={`vein-${node.id}`}>
            {/* Vein glow base */}
            <motion.path
              d={path}
              fill="none"
              stroke={color}
              strokeWidth={8}
              opacity={0.03}
              strokeLinecap="round"
              filter="url(#bioGlow)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 + i * 0.15 }}
            />
            {/* Main vein */}
            <motion.path
              d={path}
              fill="none"
              stroke={color}
              strokeWidth={1.5}
              opacity={0.15}
              strokeLinecap="round"
              strokeDasharray="4 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.6 + i * 0.15 }}
            />
            {/* Flowing energy particle - only render after hydration */}
            {isMounted && (
              <motion.circle
                r={3}
                fill={color}
                opacity={0.6}
                filter="url(#bioGlow)"
                initial={{ offsetDistance: '0%' }}
                animate={{ offsetDistance: '100%' }}
                transition={{
                  duration: 4,
                  delay: 1.5 + i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'easeInOut'
                }}
                style={{ offsetPath: `path('${path}')` }}
              />
            )}
          </motion.g>
        )
      })}
    </motion.g>
  )
}

// Life energy spiral flowing through the tree
function LifeSpiral({
  path,
  prefersReducedMotion
}: {
  path: string
  prefersReducedMotion: boolean
}) {
  if (prefersReducedMotion || !path || path.includes('NaN')) return null

  return (
    <motion.g>
      {/* Spiral path - subtle glow */}
      <motion.path
        d={path}
        fill="none"
        stroke="url(#lifeSpiralGradient)"
        strokeWidth={2}
        opacity={0.08}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3, delay: 1 }}
      />
    </motion.g>
  )
}

// Tree canopy crown effect
function TreeCanopy({
  centerX,
  centerY,
  radius,
  prefersReducedMotion
}: {
  centerX: number
  centerY: number
  radius: number
  prefersReducedMotion: boolean
}) {
  const arcPath = createCanopyArc(centerX, centerY, radius)

  return (
    <motion.g>
      {/* Main canopy arc - soft green glow */}
      <motion.path
        d={arcPath}
        fill="none"
        stroke="#d4a855"
        strokeWidth={40}
        opacity={0.06}
        strokeLinecap="round"
        initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />
      {/* Secondary layer */}
      <motion.path
        d={arcPath}
        fill="none"
        stroke="#10b981"
        strokeWidth={25}
        opacity={0.05}
        strokeLinecap="round"
        initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.7 }}
      />
    </motion.g>
  )
}

// Firefly-like glowing particle - magical ambient effect
function Firefly({
  startX,
  startY,
  delay,
  color,
  prefersReducedMotion,
  isMounted
}: {
  startX: number
  startY: number
  delay: number
  color: string
  prefersReducedMotion: boolean
  isMounted: boolean
}) {
  // Defer rendering until after hydration to prevent SSR/client animate mismatches
  if (prefersReducedMotion || !isMounted || !isFinite(startX) || !isFinite(startY)) return null

  // Fixed wandering path (not random to avoid hydration mismatch)
  const path = {
    x: [0, 20, -15, 25, -10, 15, 0],
    y: [0, -20, -10, -30, -40, -25, -15],
  }

  const cx = round(startX)
  const cy = round(startY)

  return (
    <motion.g>
      {/* Glow */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={6}
        fill={color}
        initial={{ opacity: 0 }}
        filter="url(#bioGlow)"
        animate={{
          x: path.x,
          y: path.y,
          opacity: [0, 0.5, 0.3, 0.6, 0.2, 0.4, 0],
        }}
        transition={{
          duration: 8,
          delay,
          repeat: Infinity,
          repeatDelay: 2,
          ease: 'easeInOut'
        }}
      />
      {/* Core */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={2}
        fill={color}
        initial={{ opacity: 0 }}
        animate={{
          x: path.x,
          y: path.y,
          opacity: [0, 0.9, 0.6, 1, 0.4, 0.8, 0],
        }}
        transition={{
          duration: 8,
          delay,
          repeat: Infinity,
          repeatDelay: 2,
          ease: 'easeInOut'
        }}
      />
    </motion.g>
  )
}

// Aura glow around nodes - bioluminescent ring
function NodeAura({
  x,
  y,
  color,
  size,
  delay,
  prefersReducedMotion,
  isMounted
}: {
  x: number
  y: number
  color: string
  size: number
  delay: number
  prefersReducedMotion: boolean
  isMounted: boolean
}) {
  // Defer until after hydration to prevent animate prop mismatches
  if (prefersReducedMotion || !isMounted || !isFinite(x) || !isFinite(y) || !isFinite(size) || size <= 0) return null

  const cx = round(x)
  const cy = round(y)
  const r1 = round(size * 2.5)
  // Calculate scale factor: r2/r1 = 3.5/2.5 = 1.4
  const scaleFactor = 1.4

  return (
    <motion.g>
      {/* Use scale transform instead of animating r to avoid SVG attribute errors */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={r1}
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        initial={{ opacity: 0, scale: 1 }}
        filter="url(#bioGlow)"
        animate={{
          scale: [1, scaleFactor, 1],
          opacity: [0.2, 0.05, 0.2],
        }}
        transition={{
          duration: 4,
          delay,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
    </motion.g>
  )
}

// Pre-computed floating leaf colors for consistent SSR/client rendering
const FLOATING_LEAF_COLORS = ['#4a90c2', '#9b6cc2', '#4da676', '#d68090', '#4ab3c2']

// Floating leaf particle for ambient effect - more organic leaf shape
function FloatingLeaf({
  startX,
  startY,
  delay,
  prefersReducedMotion,
  isMounted
}: {
  startX: number
  startY: number
  delay: number
  prefersReducedMotion: boolean
  isMounted: boolean
}) {
  // Defer until after hydration to prevent animate prop mismatches
  if (prefersReducedMotion || !isMounted) return null

  // Validate inputs to prevent NaN errors
  if (!isFinite(startX) || !isFinite(startY)) {
    return null
  }

  const sx = round(startX)
  const sy = round(startY)

  // Use pre-computed color index based on delay (deterministic)
  const colorIndex = Math.floor(delay * 10) % FLOATING_LEAF_COLORS.length
  const color = FLOATING_LEAF_COLORS[colorIndex]

  // Organic leaf shape path
  const leafPath = `M 0 0 Q 3 -4, 0 -8 Q -3 -4, 0 0`

  return (
    <motion.g
      initial={{ opacity: 0, y: 0, x: 0, rotate: 0 }}
      animate={{
        opacity: [0, 0.7, 0.5, 0],
        y: [0, 40, 80, 130],
        x: [0, 20, -15, 25],
        rotate: [0, 60, 120, 200]
      }}
      transition={{
        duration: 7,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: 'easeInOut'
      }}
      style={{ transformOrigin: `${sx}px ${sy}px` }}
    >
      <motion.path
        d={leafPath}
        fill={color}
        transform={`translate(${sx}, ${sy})`}
        opacity={0.6}
      />
    </motion.g>
  )
}

// Growth bud showing continuous sprouting effect
// Pre-computed colors to ensure consistent SSR/client rendering
const GROWTH_BUD_COLORS = ['#10b981', '#4ade80', '#22c55e', '#86efac', '#6ee7b7']

function GrowthBud({
  x,
  y,
  delay,
  prefersReducedMotion,
  isMounted
}: {
  x: number
  y: number
  delay: number
  prefersReducedMotion: boolean
  isMounted: boolean
}) {
  // Defer rendering until after hydration to prevent animate prop mismatches
  if (prefersReducedMotion || !isMounted) return null

  if (!isFinite(x) || !isFinite(y)) {
    return null
  }

  const bx = round(x)
  const by = round(y)

  // Use pre-computed color index based on delay (deterministic)
  const colorIndex = Math.floor(delay * 10) % GROWTH_BUD_COLORS.length
  const color = GROWTH_BUD_COLORS[colorIndex]

  // Small bud/sprout path
  const budPath = `M 0 0 Q 2 -3, 0 -5 Q -2 -3, 0 0`

  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 0.8, 1.2, 1, 0.9, 0],
        opacity: [0, 0.8, 1, 0.9, 0.6, 0],
        y: [0, -2, -5, -8, -10, -12],
      }}
      transition={{
        duration: 5,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 3,
        ease: 'easeOut',
        times: [0, 0.1, 0.3, 0.5, 0.7, 1],
      }}
      style={{ transformOrigin: `${bx}px ${by}px` }}
    >
      {/* Bud glow */}
      <motion.circle
        cx={bx}
        cy={by - 3}
        r={4}
        fill={color}
        opacity={0.3}
        filter="url(#bioGlow)"
      />
      {/* Bud shape */}
      <motion.path
        d={budPath}
        fill={color}
        transform={`translate(${bx}, ${by})`}
      />
      {/* Tiny sparkle */}
      <motion.circle
        cx={bx}
        cy={by - 5}
        r={1}
        fill="#fff"
        opacity={0.8}
        animate={{ opacity: [0.8, 0.3, 0.8] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.g>
  )
}

// Glowing energy particle that flows through the tree
function GlowingParticle({
  path,
  delay,
  color,
  size = 3,
  duration = 4,
  prefersReducedMotion,
  isMounted
}: {
  path: string
  delay: number
  color: string
  size?: number
  duration?: number
  prefersReducedMotion: boolean
  isMounted: boolean
}) {
  // Only render after hydration to avoid offsetDistance mismatch
  if (prefersReducedMotion || !path || !isMounted) return null

  return (
    <motion.g>
      {/* Glow effect */}
      <motion.circle
        r={size * 2}
        fill={color}
        opacity={0.3}
        filter="url(#glow)"
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: '100%' }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ offsetPath: `path('${path}')` }}
      />
      {/* Core particle */}
      <motion.circle
        r={size}
        fill={color}
        opacity={0.9}
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: '100%' }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ offsetPath: `path('${path}')` }}
      />
    </motion.g>
  )
}

// Heartbeat pulse effect - the life force at the center of the tree
function LifeHeartbeat({
  x,
  y,
  prefersReducedMotion,
  isMounted
}: {
  x: number
  y: number
  prefersReducedMotion: boolean
  isMounted: boolean
}) {
  // Defer animations until after hydration to prevent SSR/client mismatches
  if (prefersReducedMotion || !isMounted || !isFinite(x) || !isFinite(y)) return null

  const cx = round(x)
  const cy = round(y)

  return (
    <motion.g>
      {/* Outer pulse wave 1 - use scale transform instead of animating r to avoid SVG attribute errors */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={30}
        fill="none"
        stroke="url(#lifePulse)"
        strokeWidth={2}
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          scale: [1, 2.67, 4],
          opacity: [0.5, 0.2, 0],
          strokeWidth: [2, 1, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeOut'
        }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      {/* Outer pulse wave 2 - staggered */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={30}
        fill="none"
        stroke="url(#lifePulse)"
        strokeWidth={2}
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          scale: [1, 2.67, 4],
          opacity: [0.4, 0.15, 0],
          strokeWidth: [2, 1, 0.5]
        }}
        transition={{
          duration: 3,
          delay: 1.5,
          repeat: Infinity,
          ease: 'easeOut'
        }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      {/* Inner heartbeat glow - use scale transform instead of animating r */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={35}
        fill="url(#lifePulse)"
        initial={{ opacity: 0.1, scale: 1 }}
        filter="url(#bioGlow)"
        animate={{
          scale: [1, 1.14, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
    </motion.g>
  )
}

// Organic bark texture lines on trunk
function BarkTexture({
  trunkPath,
  prefersReducedMotion
}: {
  trunkPath: string
  prefersReducedMotion: boolean
}) {
  // Pre-computed bark line offsets with deterministic opacity values to avoid hydration mismatch
  // (Previously used Math.random() which caused SSR/client differences)
  const barkLines = [
    { offset: -6, opacity: 0.09, delay: 0 },
    { offset: -3, opacity: 0.11, delay: 0.1 },
    { offset: 0, opacity: 0.10, delay: 0.2 },
    { offset: 3, opacity: 0.08, delay: 0.3 },
    { offset: 6, opacity: 0.12, delay: 0.4 },
  ]

  return (
    <motion.g>
      {barkLines.map((line, i) => (
        <motion.path
          key={`bark-${i}`}
          d={trunkPath}
          fill="none"
          stroke="#5c4a3d"
          strokeWidth={1}
          opacity={line.opacity}
          strokeDasharray="3 8"
          transform={`translate(${line.offset}, 0)`}
          initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 + line.delay }}
        />
      ))}
    </motion.g>
  )
}

// Spiral/Fibonacci pattern for organic growth feeling
function GrowthSpiral({
  x,
  y,
  size,
  color,
  delay,
  prefersReducedMotion
}: {
  x: number
  y: number
  size: number
  color: string
  delay: number
  prefersReducedMotion: boolean
}) {
  if (prefersReducedMotion) return null

  // Validate inputs to prevent NaN errors
  if (!isFinite(x) || !isFinite(y) || !isFinite(size) || size <= 0) {
    return null
  }

  const cx = round(x)
  const cy = round(y)
  const s = round(size)

  // Simple spiral path
  const spiralPath = `M ${cx} ${cy}
    Q ${round(cx + 8 * s)} ${round(cy - 5 * s)}, ${round(cx + 5 * s)} ${round(cy - 12 * s)}
    Q ${round(cx - 2 * s)} ${round(cy - 15 * s)}, ${round(cx - 8 * s)} ${round(cy - 10 * s)}
    Q ${round(cx - 10 * s)} ${round(cy - 2 * s)}, ${round(cx - 5 * s)} ${round(cy + 5 * s)}`

  return (
    <motion.path
      d={spiralPath}
      fill="none"
      stroke={color}
      strokeWidth={1}
      opacity={0.15}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.15 }}
      viewport={{ once: true }}
      transition={{ duration: 2, delay }}
    />
  )
}

// Canopy foliage cluster - more organic with breathing animation
function FoliageCluster({
  x,
  y,
  scale,
  color,
  delay,
  prefersReducedMotion
}: {
  x: number
  y: number
  scale: number
  color: string
  delay: number
  prefersReducedMotion: boolean
}) {
  // Validate inputs to prevent NaN errors
  if (!isFinite(x) || !isFinite(y) || !isFinite(scale) || scale <= 0) {
    return null
  }

  // Round all calculated values to prevent hydration and NaN issues
  const cx = round(x)
  const cy = round(y)
  const s = round(scale)

  // Organic leaf-like shapes instead of simple ellipses
  const leafClusterPath = `
    M ${cx} ${round(cy - 15 * s)}
    Q ${round(cx + 20 * s)} ${round(cy - 20 * s)}, ${round(cx + 25 * s)} ${round(cy - 5 * s)}
    Q ${round(cx + 15 * s)} ${round(cy + 10 * s)}, ${cx} ${round(cy + 15 * s)}
    Q ${round(cx - 15 * s)} ${round(cy + 10 * s)}, ${round(cx - 25 * s)} ${round(cy - 5 * s)}
    Q ${round(cx - 20 * s)} ${round(cy - 20 * s)}, ${cx} ${round(cy - 15 * s)}
  `

  // Pre-calculate values for animations
  const outerRx = round(32 * s)
  const outerRy = round(24 * s)
  const outerRxAnim = [outerRx, round(35 * s), outerRx]
  const outerRyAnim = [outerRy, round(27 * s), outerRy]

  const secondaryCx = round(cx + 10 * s)
  const secondaryCy = round(cy - 8 * s)
  const secondaryRx = round(18 * s)
  const secondaryRy = round(12 * s)
  const secondaryCyAnim = [secondaryCy, round(cy - 10 * s), secondaryCy]

  const tertiaryCx = round(cx - 12 * s)
  const tertiaryCy = round(cy + 5 * s)
  const tertiaryRx = round(15 * s)
  const tertiaryRy = round(10 * s)

  // Pre-calculate detail leaf positions
  const detailLeaves = [0, 1, 2].map((i) => ({
    cx: round(cx + (i - 1) * 15 * s),
    cy: round(cy - 18 * s - i * 3),
    rx: round(5 * s),
    ry: round(3 * s),
  }))

  return (
    <motion.g
      initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: delay + 0.8, type: 'spring', stiffness: 100 }}
    >
      {/* Outer glow - soft watercolor bleed */}
      <motion.ellipse
        cx={cx}
        cy={cy}
        rx={outerRx}
        ry={outerRy}
        fill={color}
        opacity={0.06}
        filter="url(#softWatercolor)"
        animate={prefersReducedMotion ? {} : {
          rx: outerRxAnim,
          ry: outerRyAnim,
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main organic foliage shape - watercolor edges */}
      <motion.path
        d={leafClusterPath}
        fill={color}
        opacity={0.18}
        filter="url(#organicNode)"
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />

      {/* Secondary layer - offset with organic edges */}
      <motion.ellipse
        cx={secondaryCx}
        cy={secondaryCy}
        rx={secondaryRx}
        ry={secondaryRy}
        fill={color}
        opacity={0.14}
        filter="url(#organicNode)"
        animate={prefersReducedMotion ? {} : {
          cy: secondaryCyAnim,
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Tertiary layer - organic */}
      <motion.ellipse
        cx={tertiaryCx}
        cy={tertiaryCy}
        rx={tertiaryRx}
        ry={tertiaryRy}
        fill={color}
        opacity={0.12}
        filter="url(#organicNode)"
      />

      {/* Small detail leaves */}
      {detailLeaves.map((leaf, i) => (
        <motion.ellipse
          key={i}
          cx={leaf.cx}
          cy={leaf.cy}
          rx={leaf.rx}
          ry={leaf.ry}
          fill={color}
          opacity={0.25}
          animate={prefersReducedMotion ? {} : {
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut'
          }}
          style={{ transformOrigin: `${leaf.cx}px ${leaf.cy}px` }}
        />
      ))}
    </motion.g>
  )
}

// Leaf decoration component
function Leaf({ x, y, color, delay, scale = 1 }: { x: number; y: number; color: string; delay: number; scale?: number }) {
  // Validate inputs to prevent NaN errors
  if (!isFinite(x) || !isFinite(y) || !isFinite(scale) || scale <= 0) {
    return null
  }

  const cx = round(x)
  const cy = round(y)
  const rx = round(8 * scale)
  const ry = round(5 * scale)

  return (
    <motion.g
      initial={{ scale: 0, rotate: -30, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        delay: delay + 0.5,
        duration: 0.6,
        stiffness: 200
      }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      <motion.ellipse
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        fill={color}
        opacity={0.6}
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay,
        }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
    </motion.g>
  )
}

// Fruit/Berry decoration component
function Fruit({ x, y, color, delay }: { x: number; y: number; color: string; delay: number }) {
  // Validate inputs to prevent NaN errors
  if (!isFinite(x) || !isFinite(y)) {
    return null
  }

  const cx = round(x)
  const cy = round(y)

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={4}
      fill={color}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.8 }}
      transition={{
        type: 'spring',
        delay: delay + 0.8,
        stiffness: 300
      }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    />
  )
}

// Animated branch with organic growth
function AnimatedBranch({
  edge,
  index,
  prefersReducedMotion,
  stageColor,
  isMounted
}: {
  edge: LayoutEdge
  index: number
  prefersReducedMotion: boolean
  stageColor: string
  isMounted: boolean
}) {
  // Validate edge coordinates
  if (!isFinite(edge.fromX) || !isFinite(edge.fromY) || !isFinite(edge.toX) || !isFinite(edge.toY)) {
    return null
  }

  const d = createOrganicBranchPath(edge)
  // Sequential growth animation: branches animate based on their target depth
  // Root → stages (depth 1) → goals (depth 2) → tasks (depth 3)
  const baseDelay = 0.3  // Initial delay before any branch animation
  const depthDelay = edge.targetDepth * 0.5  // 0.5s between each depth level
  const indexOffset = index * 0.02  // Small offset within same depth
  const delay = baseDelay + depthDelay + indexOffset

  // Calculate leaf positions along the branch
  const midX = round((edge.fromX + edge.toX) / 2)
  const midY = round((edge.fromY + edge.toY) / 2)

  return (
    <g>
      {/* Hawkeye protection shield - outer glow layer */}
      <motion.path
        d={d}
        fill="none"
        stroke="url(#hawkeyeGradient)"
        strokeWidth={12}
        opacity={0.12}
        strokeLinecap="round"
        filter="url(#bioGlow)"
        initial={prefersReducedMotion ? { pathLength: 1, opacity: 0.12 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.12 }}
        viewport={{ once: true }}
        transition={{
          pathLength: { duration: 1, delay: delay + 0.2 },
          opacity: { duration: 0.5, delay: delay + 0.2 },
        }}
      />

      {/* Hawkeye protection inner glow - pulsing */}
      <motion.path
        d={d}
        fill="none"
        stroke="#6366f1"
        strokeWidth={6}
        opacity={0.08}
        strokeLinecap="round"
        initial={prefersReducedMotion ? { pathLength: 1, opacity: 0.08 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.08 }}
        animate={prefersReducedMotion ? {} : {
          opacity: [0.08, 0.15, 0.08],
        }}
        viewport={{ once: true }}
        transition={{
          pathLength: { duration: 0.8, delay },
          opacity: { duration: 2.5, repeat: Infinity, delay: delay + 1 },
        }}
      />

      {/* Branch shadow/glow - soft watercolor bleed */}
      <motion.path
        d={d}
        fill="none"
        stroke={stageColor}
        strokeWidth={5}
        opacity={0.08}
        filter="url(#watercolor)"
        initial={prefersReducedMotion ? { pathLength: 1, opacity: 0.08 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.08 }}
        viewport={{ once: true }}
        transition={{
          pathLength: { duration: 0.8, delay },
          opacity: { duration: 0.3, delay },
        }}
      />

      {/* Main branch - hand-drawn organic style */}
      <motion.path
        d={d}
        fill="none"
        stroke="url(#branchGradient)"
        strokeWidth={2.5}
        strokeLinecap="round"
        filter="url(#handDrawn)"
        initial={prefersReducedMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          pathLength: { duration: 0.8, delay },
          opacity: { duration: 0.3, delay },
        }}
      />

      {/* Small decorative leaves along branch */}
      {!prefersReducedMotion && (
        <>
          <Leaf x={midX - 10} y={midY - 5} color={stageColor} delay={delay} scale={0.6} />
          <Leaf x={midX + 8} y={midY + 3} color={stageColor} delay={delay + 0.1} scale={0.5} />
        </>
      )}

      {/* Hawkeye enhancement energy flowing through branch */}
      <EnhancementFlow edge={edge} delay={delay} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
    </g>
  )
}

// Blooming node component with organic growth animation
function BloomingNode({
  node,
  index,
  prefersReducedMotion,
  locale = 'en'
}: {
  node: LayoutNode
  index: number
  prefersReducedMotion: boolean
  locale?: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  // Validate node coordinates to prevent NaN errors
  if (!isFinite(node.x) || !isFinite(node.y)) {
    return null
  }

  // Round coordinates for consistent rendering
  const x = round(node.x)
  const y = round(node.y)

  // Sequential growth animation: nodes animate based on their depth in the tree
  // Root (depth 0) → stages (depth 1) → goals (depth 2) → tasks (depth 3)
  const baseDelay = 0.4  // Initial delay before any node animation
  const depthDelay = node.depth * 0.5  // 0.5s between each depth level
  const indexOffset = index * 0.02  // Small offset within same depth
  const delay = baseDelay + depthDelay + indexOffset
  const color = node.stage ? STAGE_COLORS[node.stage] ?? '#94a3b8' : '#fbbf24'

  const bloomVariants = prefersReducedMotion
    ? { hidden: { scale: 1, opacity: 1 }, visible: { scale: 1, opacity: 1 } }
    : {
        hidden: { scale: 0, opacity: 0, rotate: -180 },
        visible: { scale: 1, opacity: 1, rotate: 0 }
      }

  // Wind sway animation for hover
  const swayAnimation = isHovered && !prefersReducedMotion
    ? { rotate: [0, 3, -3, 2, -2, 0], x: [0, 2, -2, 1, -1, 0] }
    : {}

  const nodeDescriptions: Record<string, string> = {
    root: 'Life Goal - Your central purpose',
    stage: 'Life Stage - Major life areas',
    goal: 'Goal - Concrete objectives',
    task: 'Task - Daily actions',
    experiment: 'Experiment - Test new approaches',
  }

  if (node.type === 'root') {
    return (
      <motion.g
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bloomVariants}
        transition={{ type: 'spring', delay: 0.2, stiffness: 100 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'pointer', pointerEvents: 'all' }}
        animate={swayAnimation}
      >
        {/* Pulsing energy ring - use scale instead of animating r to avoid SVG errors */}
        <motion.circle
          cx={x}
          cy={y}
          r={42}
          fill="none"
          stroke="url(#rootGradient)"
          strokeWidth={2}
          opacity={0.3}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.19, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />

        {/* Outer bloom petals - organic watercolor edges */}
        {ROOT_PETAL_POSITIONS.map((petal, i) => (
          <motion.ellipse
            key={petal.angle}
            cx={round(x + petal.cos * 20)}
            cy={round(y + petal.sin * 20)}
            rx={11}
            ry={6}
            fill="url(#rootGradient)"
            opacity={0.25}
            filter="url(#organicNode)"
            initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
            animate={{
              scale: 1,
              rotate: petal.angle + (isHovered ? 10 : 0)
            }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          />
        ))}

        {/* Core glow - soft watercolor effect */}
        <motion.circle
          cx={x}
          cy={y}
          r={35}
          fill="url(#rootGradient)"
          opacity={0.15}
          filter="url(#softWatercolor)"
          animate={{ scale: isHovered ? 1.2 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />

        {/* Main flower center - organic imperfect edges */}
        <motion.circle
          cx={x}
          cy={y}
          r={24}
          fill="url(#rootGradient)"
          filter="url(#organicNode)"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />

        {/* Inner sparkle - subtle */}
        <motion.circle
          cx={x}
          cy={round(y - 5)}
          r={9}
          fill="rgba(255,255,255,0.15)"
          filter="url(#organicNode)"
        />

        {/* Star icon */}
        <motion.text
          x={x}
          y={round(y + 5)}
          textAnchor="middle"
          fill="white"
          fontSize={16}
        >
          ★
        </motion.text>

        {/* Label */}
        <text
          x={x}
          y={round(y + 52)}
          textAnchor="middle"
          fill="var(--hawk-text-primary)"
          fontSize={24}
          fontWeight={700}
        >
          {node.label}
        </text>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <rect
                x={round(x - 100)}
                y={round(y - 70)}
                width={200}
                height={28}
                rx={6}
                fill="var(--hawk-surface)"
                stroke="var(--hawk-border)"
                strokeWidth={1}
              />
              <text
                x={x}
                y={round(y - 51)}
                textAnchor="middle"
                fill="var(--hawk-text-secondary)"
                fontSize={11}
              >
                {nodeDescriptions[node.type]}
              </text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Hawkeye enhancement indicator */}
        <HawkeyeEnhancement
          x={round(x + 28)}
          y={round(y - 28)}
          size={1.2}
          delay={0.2}
          prefersReducedMotion={prefersReducedMotion}
          type="enhance"
          nodeType="root"
          locale={locale}
        />
      </motion.g>
    )
  }

  if (node.type === 'stage') {
    return (
      <motion.g
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bloomVariants}
        transition={{ type: 'spring', delay, stiffness: 120 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'pointer', pointerEvents: 'all' }}
        animate={swayAnimation}
      >
        {/* Bloom effect - petals with organic edges */}
        {STAGE_PETAL_POSITIONS.map((petal, i) => (
          <motion.ellipse
            key={petal.angle}
            cx={round(x + petal.cos * 14)}
            cy={round(y + petal.sin * 14)}
            rx={9}
            ry={5}
            fill={color}
            opacity={0.35}
            filter="url(#organicNode)"
            initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
            animate={{
              scale: 1,
              rotate: petal.angle + (isHovered ? 15 : 0)
            }}
            transition={{ delay: delay + 0.1 + i * 0.03, duration: 0.3 }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          />
        ))}

        {/* Glow - soft watercolor effect */}
        <motion.circle
          cx={x}
          cy={y}
          r={24}
          fill={color}
          opacity={0.12}
          filter="url(#softWatercolor)"
          animate={{ scale: isHovered ? 1.3 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />

        {/* Main circle - organic imperfect edges */}
        <motion.circle
          cx={x}
          cy={y}
          r={16}
          fill={color}
          opacity={0.85}
          filter="url(#organicNode)"
          animate={{ scale: isHovered ? 1.15 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />

        {/* Highlight - subtle */}
        <motion.circle
          cx={x}
          cy={round(y - 3)}
          r={6}
          fill="rgba(255,255,255,0.12)"
          filter="url(#organicNode)"
        />

        {/* Label */}
        <text
          x={x}
          y={round(y + 38)}
          textAnchor="middle"
          fill="var(--hawk-text-primary)"
          fontSize={22}
          fontWeight={600}
        >
          {node.label}
        </text>

        {/* Decorative leaves around stage */}
        {!prefersReducedMotion && (
          <>
            <Leaf x={round(x - 25)} y={round(y - 10)} color={color} delay={delay} scale={0.7} />
            <Leaf x={round(x + 25)} y={round(y - 8)} color={color} delay={delay + 0.1} scale={0.6} />
          </>
        )}

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <rect
                x={round(x - 90)}
                y={round(y - 52)}
                width={180}
                height={26}
                rx={6}
                fill="var(--hawk-surface)"
                stroke="var(--hawk-border)"
                strokeWidth={1}
              />
              <text
                x={x}
                y={round(y - 34)}
                textAnchor="middle"
                fill="var(--hawk-text-secondary)"
                fontSize={10}
              >
                {nodeDescriptions[node.type]}
              </text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Hawkeye enhancement indicator */}
        <HawkeyeEnhancement
          x={round(x + 20)}
          y={round(y - 20)}
          size={0.9}
          delay={delay}
          prefersReducedMotion={prefersReducedMotion}
          type="enhance"
          stage={node.stage}
          locale={locale}
        />
      </motion.g>
    )
  }

  if (node.type === 'goal') {
    return (
      <motion.g
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bloomVariants}
        transition={{ type: 'spring', delay, stiffness: 150 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'pointer', pointerEvents: 'all' }}
        animate={swayAnimation}
      >
        {/* Outer ring with rotation */}
        <motion.circle
          cx={x}
          cy={y}
          r={15}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeDasharray="4 4"
          opacity={0.6}
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
            scale: { type: 'spring', stiffness: 300 }
          }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />

        {/* Inner filled circle */}
        <motion.circle
          cx={x}
          cy={y}
          r={8}
          fill={color}
          opacity={0.5}
          animate={{ scale: isHovered ? 1.3 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />

        {/* Center dot */}
        <motion.circle
          cx={x}
          cy={y}
          r={3}
          fill={color}
        />

        {/* Label */}
        <text
          x={x}
          y={round(y + 32)}
          textAnchor="middle"
          fill="var(--hawk-text-primary)"
          fontSize={20}
          fontWeight={500}
        >
          {node.label}
        </text>

        {/* Small fruit decoration */}
        {!prefersReducedMotion && (
          <Fruit x={round(x + 18)} y={round(y - 12)} color={color} delay={delay} />
        )}

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <rect
                x={round(x - 80)}
                y={round(y - 45)}
                width={160}
                height={24}
                rx={6}
                fill="var(--hawk-surface)"
                stroke="var(--hawk-border)"
                strokeWidth={1}
              />
              <text
                x={x}
                y={round(y - 28)}
                textAnchor="middle"
                fill="var(--hawk-text-secondary)"
                fontSize={10}
              >
                {nodeDescriptions[node.type]}
              </text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Hawkeye research indicator */}
        <HawkeyeEnhancement
          x={round(x + 16)}
          y={round(y - 16)}
          size={0.8}
          delay={delay}
          prefersReducedMotion={prefersReducedMotion}
          type="research"
          nodeType="goal"
          stage={node.stage}
          locale={locale}
        />
      </motion.g>
    )
  }

  if (node.type === 'experiment') {
    const expColor = node.experimentStatus === 'running' ? '#f59e0b'
      : node.experimentStatus === 'succeeded' ? '#10b981'
      : node.experimentStatus === 'failed' ? '#ef4444'
      : '#94a3b8'

    return (
      <motion.g
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bloomVariants}
        transition={{ type: 'spring', delay, stiffness: 150 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'pointer', pointerEvents: 'all' }}
        animate={swayAnimation}
      >
        {/* Pulsing ring for running experiments - use scale instead of animating r to avoid SVG errors */}
        {node.experimentStatus === 'running' && !prefersReducedMotion && (
          <motion.circle
            cx={x}
            cy={y}
            r={18}
            fill="none"
            stroke={expColor}
            strokeWidth={2}
            opacity={0.5}
            animate={{
              scale: [1, 1.44, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          />
        )}

        {/* Diamond shape */}
        <motion.polygon
          points={`${x},${round(y - 12)} ${round(x + 12)},${y} ${x},${round(y + 12)} ${round(x - 12)},${y}`}
          fill={expColor}
          opacity={0.85}
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 45 : 0
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />

        {/* Status icon */}
        {node.experimentStatus === 'succeeded' && (
          <text x={x} y={round(y + 4)} textAnchor="middle" fill="white" fontSize={10} fontWeight={700}>
            ✓
          </text>
        )}
        {node.experimentStatus === 'failed' && (
          <text x={x} y={round(y + 4)} textAnchor="middle" fill="white" fontSize={10} fontWeight={700}>
            ✗
          </text>
        )}

        {/* Label */}
        <text
          x={x}
          y={round(y + 28)}
          textAnchor="middle"
          fill="var(--hawk-text-primary)"
          fontSize={18}
          fontWeight={500}
        >
          {node.label}
        </text>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <rect
                x={round(x - 95)}
                y={round(y - 48)}
                width={190}
                height={24}
                rx={6}
                fill="var(--hawk-surface)"
                stroke="var(--hawk-border)"
                strokeWidth={1}
              />
              <text
                x={x}
                y={round(y - 31)}
                textAnchor="middle"
                fill="var(--hawk-text-secondary)"
                fontSize={10}
              >
                {nodeDescriptions[node.type]}
              </text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Hawkeye protection indicator for experiments */}
        <HawkeyeEnhancement
          x={round(x + 14)}
          y={round(y - 14)}
          size={0.7}
          delay={delay}
          prefersReducedMotion={prefersReducedMotion}
          type="protect"
          nodeType="experiment"
          stage={node.stage}
          locale={locale}
        />
      </motion.g>
    )
  }

  // Task node (default)
  return (
    <motion.g
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={bloomVariants}
      transition={{ type: 'spring', delay, stiffness: 150 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer', pointerEvents: 'all' }}
      animate={swayAnimation}
    >
      {/* Glow */}
      <motion.circle
        cx={x}
        cy={y}
        r={12}
        fill={color}
        opacity={0.2}
        animate={{ scale: isHovered ? 1.5 : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />

      {/* Main dot */}
      <motion.circle
        cx={x}
        cy={y}
        r={7}
        fill={color}
        opacity={0.7}
        animate={{ scale: isHovered ? 1.3 : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />

      {/* Label */}
      <text
        x={x}
        y={round(y + 24)}
        textAnchor="middle"
        fill="var(--hawk-text-primary)"
        fontSize={18}
        fontWeight={500}
      >
        {node.label}
      </text>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <rect
              x={round(x - 75)}
              y={round(y - 40)}
              width={150}
              height={24}
              rx={6}
              fill="var(--hawk-surface)"
              stroke="var(--hawk-border)"
              strokeWidth={1}
            />
            <text
              x={x}
              y={round(y - 23)}
              textAnchor="middle"
              fill="var(--hawk-text-secondary)"
              fontSize={10}
            >
              {nodeDescriptions[node.type]}
            </text>
          </motion.g>
        )}
      </AnimatePresence>

      {/* Hawkeye enhancement indicator */}
      <HawkeyeEnhancement
        x={round(x + 10)}
        y={round(y - 10)}
        size={0.7}
        delay={delay}
        prefersReducedMotion={prefersReducedMotion}
        type="enhance"
        nodeType="task"
        stage={node.stage}
        locale={locale}
      />
    </motion.g>
  )
}

// Hawkeye action labels are now in demo-data.ts with full localization

// Hawkeye enhancement indicator - small eye icon showing AI boost on each node
function HawkeyeEnhancement({
  x,
  y,
  size = 1,
  delay,
  prefersReducedMotion,
  type = 'enhance', // 'enhance' | 'protect' | 'research'
  nodeType,
  stage,
  locale = 'en'
}: {
  x: number
  y: number
  size?: number
  delay: number
  prefersReducedMotion: boolean
  type?: 'enhance' | 'protect' | 'research'
  nodeType?: string
  stage?: string
  locale?: string
}) {
  // Validate inputs to prevent NaN errors
  if (!isFinite(x) || !isFinite(y) || !isFinite(size) || size <= 0) {
    return null
  }

  const cx = round(x)
  const cy = round(y)
  const s = round(size)

  const colors = {
    enhance: { primary: '#6366f1', secondary: '#8b5cf6' },
    protect: { primary: '#10b981', secondary: '#14b8a6' },
    research: { primary: '#3b82f6', secondary: '#60a5fa' }
  }
  const color = colors[type]

  // Get action label based on stage or node type (now localized)
  const actionKey = stage || nodeType || 'task'
  const actionInfo = getHawkeyeAction(actionKey, locale)

  // Pre-calculate values for animations
  const glowR = round(8 * s)
  const glowRAnimValues = [glowR, round(10 * s), glowR]
  const eyeRx = round(5 * s)
  const eyeRy = round(3 * s)
  const irisR = round(2 * s)
  const pupilR = round(1 * s)
  const shineR = round(0.5 * s)
  const shineCx = round(cx - 0.8 * s)
  const shineCy = round(cy - 0.5 * s)

  return (
    <motion.g
      initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 1.2, type: 'spring', stiffness: 200 }}
    >
      {/* Subtle glow ring */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={glowR}
        fill="none"
        stroke={color.primary}
        strokeWidth={0.5}
        opacity={0.3}
        animate={prefersReducedMotion ? {} : {
          r: glowRAnimValues,
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: delay * 0.5 }}
      />

      {/* Mini eye shape */}
      <motion.ellipse
        cx={cx}
        cy={cy}
        rx={eyeRx}
        ry={eyeRy}
        fill={color.primary}
        opacity={0.85}
      />

      {/* Iris */}
      <circle cx={cx} cy={cy} r={irisR} fill="#1e293b" />

      {/* Pupil */}
      <circle cx={cx} cy={cy} r={pupilR} fill="#0f172a" />

      {/* Eye shine */}
      <circle cx={shineCx} cy={shineCy} r={shineR} fill="white" opacity={0.8} />

      {/* Action label - what Hawkeye is doing - larger and more visible */}
      <motion.g
        initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 1.5, type: 'spring', stiffness: 200 }}
      >
        {/* Background pill with gradient */}
        <rect
          x={round(cx - 30)}
          y={round(cy + 12)}
          width={60}
          height={16}
          rx={8}
          fill={color.primary}
          opacity={0.95}
        />
        {/* Action text - larger */}
        <text
          x={cx}
          y={round(cy + 23)}
          textAnchor="middle"
          fill="white"
          fontSize={9}
          fontWeight={600}
        >
          {actionInfo.action}
        </text>
      </motion.g>

      {/* Benefit badge - stage-colored circle with percentage - larger */}
      <motion.g
        initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 1.8, type: 'spring', stiffness: 300 }}
      >
        {/* Glow effect */}
        <circle
          cx={round(cx + 18)}
          cy={round(cy - 12)}
          r={14}
          fill={stage ? STAGE_COLORS[stage] ?? color.primary : color.primary}
          opacity={0.3}
        />
        {/* Main badge */}
        <circle
          cx={round(cx + 18)}
          cy={round(cy - 12)}
          r={11}
          fill={stage ? STAGE_COLORS[stage] ?? color.primary : color.primary}
          opacity={0.98}
        />
        <text
          x={round(cx + 18)}
          y={round(cy - 8)}
          textAnchor="middle"
          fill="white"
          fontSize={8}
          fontWeight={700}
        >
          {actionInfo.benefit}
        </text>
      </motion.g>
    </motion.g>
  )
}

// Flowing energy particles through branches showing Hawkeye's enhancement
function EnhancementFlow({
  edge,
  delay,
  prefersReducedMotion,
  isMounted
}: {
  edge: LayoutEdge
  delay: number
  prefersReducedMotion: boolean
  isMounted: boolean
}) {
  // Only render after hydration to avoid offsetDistance mismatch
  if (prefersReducedMotion || !isMounted) return null

  const { fromX, fromY, toX, toY } = edge

  // Validate edge coordinates
  if (!isFinite(fromX) || !isFinite(fromY) || !isFinite(toX) || !isFinite(toY)) {
    return null
  }

  const midY = round((fromY + toY) / 2)
  const curve = round(Math.abs(toX - fromX) * 0.3)
  const d = `M ${round(fromX)} ${round(fromY + 12)}
    C ${round(fromX)} ${round(midY - curve)},
      ${round(toX)} ${round(midY + curve)},
      ${round(toX)} ${round(toY - 12)}`

  return (
    <motion.g>
      {/* Energy particle 1 */}
      <motion.circle
        r={2.5}
        fill="url(#hawkeyeGradient)"
        opacity={0.7}
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: '100%' }}
        transition={{
          duration: 3,
          delay: delay + 1.5,
          repeat: Infinity,
          repeatDelay: 2,
          ease: 'easeInOut'
        }}
        style={{ offsetPath: `path('${d}')` }}
      />

      {/* Energy particle 2 (staggered) */}
      <motion.circle
        r={2}
        fill="#d4a855"
        opacity={0.6}
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: '100%' }}
        transition={{
          duration: 3,
          delay: delay + 2.5,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: 'easeInOut'
        }}
        style={{ offsetPath: `path('${d}')` }}
      />
    </motion.g>
  )
}

export function AnimatedLifeTree({ prefersReducedMotion, locale = 'en' }: AnimatedLifeTreeProps) {
  const localizedTree = useMemo(() => getLocalizedDemoTree(locale), [locale])
  const layout = useMemo(() => computeDemoLayout(localizedTree), [localizedTree])
  const legendLabels = useMemo(() => getLegendLabels(locale), [locale])

  // Detect theme for reducing decorative effects in light mode
  const { resolvedTheme } = useTheme()
  const isLightTheme = resolvedTheme === 'light'

  // Track mounted state to defer animations that use offsetDistance (CSS Motion Path)
  // This prevents hydration mismatch since offsetDistance doesn't serialize consistently
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Compute viewBox from node positions - expanded for halo
  const xs = layout.nodes.map(n => n.x)
  const ys = layout.nodes.map(n => n.y)
  const minX = Math.min(...xs) - 150  // Extra space for halo
  const maxX = Math.max(...xs) + 150
  const minY = Math.min(...ys) - 100  // Extra space for halo
  const maxY = Math.max(...ys) + 120
  const width = maxX - minX
  const height = maxY - minY

  // Find root node for trunk
  const rootNode = layout.nodes.find(n => n.type === 'root')
  const rootY = rootNode?.y ?? 0

  // Calculate tree center and radius for halo
  const treeCenterX = 0
  const treeCenterY = (minY + maxY) / 2
  const haloRadius = Math.max(width, height) * 0.45

  // Life spiral path
  const lifeSpiralPath = createLifeSpiralPath(treeCenterY, height * 0.7)

  // Get stage colors for branches
  const getEdgeColor = (edge: LayoutEdge): string => {
    const targetNode = layout.nodes.find(n => n.x === edge.toX && Math.abs(n.y - edge.toY) < 20)
    return targetNode?.stage ? STAGE_COLORS[targetNode.stage] ?? '#94a3b8' : '#94a3b8'
  }

  return (
    <div className="space-y-4">
      <svg
        viewBox={`${minX} ${minY} ${width} ${height}`}
        className="w-full h-auto"
        style={{ maxHeight: 600 }}
        role="img"
        aria-label="Animated Life Tree showing goals across career, learning, health, creativity, and finance with Hawkeye guardian"
      >
        <defs>
          {/* Root gradient - natural muted ochre/amber tones */}
          <radialGradient id="rootGradient">
            <stop offset="0%" stopColor="#f5e6c8" />
            <stop offset="40%" stopColor="#e8c477" />
            <stop offset="70%" stopColor="#d4a855" />
            <stop offset="100%" stopColor="#b8923e" />
          </radialGradient>

          {/* Branch gradient - natural wood with variation */}
          <linearGradient id="branchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9a8573" />
            <stop offset="30%" stopColor="#7d6b5a" />
            <stop offset="60%" stopColor="#6b5a4a" />
            <stop offset="100%" stopColor="#5a4a3a" />
          </linearGradient>

          {/* Hawkeye gradient */}
          <linearGradient id="hawkeyeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          {/* Shield/protection gradient */}
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          {/* Halo gradient for circular frame */}
          <linearGradient id="haloGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="25%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#d4a855" />
            <stop offset="75%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          {/* Life spiral gradient */}
          <linearGradient id="lifeSpiralGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#6b5545" />
            <stop offset="30%" stopColor="#d4a855" />
            <stop offset="60%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft glow filter for halo */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Bioluminescent pulsing glow filter */}
          <filter id="bioGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur1">
              <animate
                attributeName="stdDeviation"
                values="3;6;3"
                dur="4s"
                repeatCount="indefinite"
              />
            </feGaussianBlur>
            <feColorMatrix
              in="blur1"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 1.5 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Organic turbulence filter for living texture */}
          <filter id="organicTexture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="3"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.015;0.018;0.015"
                dur="10s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Hand-drawn wavy line effect - makes strokes look natural */}
          <filter id="handDrawn" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.04"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1.5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Watercolor soft edge effect - blurs edges organically */}
          <filter id="watercolor" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feGaussianBlur in="displaced" stdDeviation="0.8" result="blurred" />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="displaced" />
            </feMerge>
          </filter>

          {/* Paper grain texture overlay */}
          <filter id="paperGrain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              result="grain"
            />
            <feColorMatrix
              in="grain"
              type="saturate"
              values="0"
              result="monoGrain"
            />
            <feBlend
              in="SourceGraphic"
              in2="monoGrain"
              mode="multiply"
              result="grained"
            />
            <feComposite
              in="grained"
              in2="SourceGraphic"
              operator="in"
            />
          </filter>

          {/* Organic node texture - imperfect edges with soft glow */}
          <filter id="organicNode" x="-15%" y="-15%" width="130%" height="130%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feGaussianBlur in="displaced" stdDeviation="0.5" result="softEdge" />
            <feMerge>
              <feMergeNode in="softEdge" />
              <feMergeNode in="displaced" />
            </feMerge>
          </filter>

          {/* Natural bark texture for trunk */}
          <filter id="barkTexture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.05 0.2"
              numOctaves="3"
              result="barkNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="barkNoise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Soft watercolor glow for nodes */}
          <filter id="softWatercolor" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur1" />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="blur1"
              in2="noise"
              scale="4"
              result="displaced"
            />
            <feMerge>
              <feMergeNode in="displaced" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Flower of Life gradient */}
          <linearGradient id="flowerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#d4a855" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
          </linearGradient>

          {/* Life pulse gradient for nodes */}
          <radialGradient id="lifePulse">
            <stop offset="0%" stopColor="#d4a855">
              <animate
                attributeName="stop-color"
                values="#d4a855;#fbbf24;#d4a855"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Subtle paper/canvas texture background for hand-drawn feel */}
        <rect
          x={minX}
          y={minY}
          width={width}
          height={height}
          fill="transparent"
          filter="url(#paperGrain)"
          opacity={0.03}
        />

        {/* Sacred geometry: Flower of Life pattern background (dark mode only) */}
        {isMounted && !isLightTheme && (
          <FlowerOfLife
            centerX={treeCenterX}
            centerY={treeCenterY}
            radius={haloRadius * 0.8}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}

        {/* Sacred geometry: Circular Halo frame (dark mode only) */}
        {isMounted && !isLightTheme && (
          <TreeHalo
            centerX={treeCenterX}
            centerY={treeCenterY}
            radius={haloRadius}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}

        {/* Energy veins connecting nodes - life force pathways (dark mode only) */}
        {isMounted && !isLightTheme && (
          <EnergyVeins
            nodes={layout.nodes}
            prefersReducedMotion={prefersReducedMotion}
            isMounted={isMounted}
          />
        )}

        {/* Life energy spiral flowing through tree (dark mode only) */}
        {isMounted && !isLightTheme && (
          <LifeSpiral
            path={lifeSpiralPath}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}

        {/* Tree canopy crown effect (dark mode only - too noisy in light) */}
        {isMounted && !isLightTheme && (
          <TreeCanopy
            centerX={treeCenterX}
            centerY={minY + 60}
            radius={width * 0.45}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}

        {/* Continuous growth animation wrapper for the tree */}
        <motion.g
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.015, 1.008, 1.02, 1],
            y: [0, -3, -1, -4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
          style={{ transformOrigin: `${treeCenterX}px ${maxY}px` }}
        >
          {/* Life Heartbeat pulse at root - the heart of the tree (dark mode only) */}
          {rootNode && isMounted && !isLightTheme && (
            <LifeHeartbeat
              x={rootNode.x}
              y={rootNode.y}
              prefersReducedMotion={prefersReducedMotion}
              isMounted={isMounted}
            />
          )}

          {/* Tree trunk - grows from root downward - organic with bark texture */}
          <motion.path
            d={createTrunkPath(rootY, maxY - 60)}
            fill="none"
            stroke="url(#branchGradient)"
            strokeWidth={9}
            strokeLinecap="round"
            filter="url(#barkTexture)"
            initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          />

          {/* Trunk shadow - soft watercolor effect */}
          <motion.path
            d={createTrunkPath(rootY, maxY - 60)}
            fill="none"
            stroke="#5c4a3d"
            strokeWidth={14}
            strokeLinecap="round"
            opacity={0.15}
            filter="url(#watercolor)"
            initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          />

          {/* Organic bark texture on trunk */}
          <BarkTexture
            trunkPath={createTrunkPath(rootY, maxY - 60)}
            prefersReducedMotion={prefersReducedMotion}
          />

        {/* Animated branches */}
        {layout.edges.map((edge, i) => (
          <AnimatedBranch
            key={`branch-${i}`}
            edge={edge}
            index={i}
            prefersReducedMotion={prefersReducedMotion}
            stageColor={getEdgeColor(edge)}
            isMounted={isMounted}
          />
        ))}

        {/* Celtic knot-style root tendrils spreading at the base */}
        {createRootPaths(maxY - 60).map((d, i) => (
          <motion.g key={`root-group-${i}`}>
            {/* Root shadow for depth */}
            <motion.path
              d={d}
              fill="none"
              stroke="#5c4a3d"
              strokeWidth={4 - i * 0.3}
              strokeLinecap="round"
              opacity={0.2}
              initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
            />
            {/* Main root */}
            <motion.path
              d={d}
              fill="none"
              stroke="url(#branchGradient)"
              strokeWidth={3 - i * 0.25}
              strokeLinecap="round"
              opacity={0.7}
              initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 + i * 0.08 }}
            />
            {/* Life energy flowing through roots (dark mode only) */}
            {!prefersReducedMotion && !isLightTheme && i % 2 === 0 && isMounted && (
              <motion.circle
                r={2}
                fill="url(#lifeSpiralGradient)"
                opacity={0.5}
                initial={{ offsetDistance: '100%' }}
                animate={{ offsetDistance: '0%' }}
                transition={{
                  duration: 4,
                  delay: 2 + i * 0.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut'
                }}
                style={{ offsetPath: `path('${d}')` }}
              />
            )}
          </motion.g>
        ))}

        {/* Growth spirals around the tree - organic life energy (dark mode only) */}
        {isMounted && !prefersReducedMotion && !isLightTheme && layout.nodes.filter(n => n.type === 'stage').map((node, i) => (
          <GrowthSpiral
            key={`spiral-${node.id}`}
            x={round(node.x + (i % 2 === 0 ? -30 : 30))}
            y={round(node.y)}
            size={0.8}
            color={node.stage ? STAGE_COLORS[node.stage] ?? '#d4a855' : '#d4a855'}
            delay={1 + i * 0.2}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}

        {/* Foliage clusters around the tree canopy (dark mode only) */}
        {isMounted && !isLightTheme && layout.nodes.filter(n => n.type === 'stage').map((node, i) => (
          <FoliageCluster
            key={`foliage-${node.id}`}
            x={round(node.x)}
            y={round(node.y - 25)}
            scale={0.9}
            color={node.stage ? STAGE_COLORS[node.stage] ?? '#d4a855' : '#d4a855'}
            delay={0.5 + i * 0.1}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}

        {/* Blooming nodes */}
        {layout.nodes.map((node, i) => (
          <BloomingNode
            key={node.id}
            node={node}
            index={i}
            prefersReducedMotion={prefersReducedMotion}
            locale={locale}
          />
        ))}

        </motion.g>
        {/* End breathing animation wrapper */}

        {/* Bioluminescent auras around stage nodes (dark mode only) */}
        {isMounted && !prefersReducedMotion && !isLightTheme && layout.nodes.filter(n => n.type === 'stage').map((node, i) => (
          <NodeAura
            key={`aura-${node.id}`}
            x={round(node.x)}
            y={round(node.y)}
            color={node.stage ? STAGE_COLORS[node.stage] ?? '#d4a855' : '#d4a855'}
            size={16}
            delay={1 + i * 0.3}
            prefersReducedMotion={prefersReducedMotion}
            isMounted={isMounted}
          />
        ))}

        {/* Floating leaf particles for ambient life (dark mode only - too noisy in light) */}
        {isMounted && !prefersReducedMotion && !isLightTheme && (
          <>
            <FloatingLeaf startX={-80} startY={minY + 50} delay={0} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <FloatingLeaf startX={60} startY={minY + 80} delay={1.5} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <FloatingLeaf startX={-40} startY={minY + 120} delay={3} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <FloatingLeaf startX={100} startY={minY + 100} delay={4.5} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <FloatingLeaf startX={-100} startY={minY + 140} delay={2} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <FloatingLeaf startX={120} startY={minY + 60} delay={3.5} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <FloatingLeaf startX={-120} startY={minY + 90} delay={5} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <FloatingLeaf startX={80} startY={minY + 130} delay={2.5} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <FloatingLeaf startX={-60} startY={minY + 160} delay={4} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <FloatingLeaf startX={40} startY={minY + 40} delay={1} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
          </>
        )}

        {/* Firefly-like glowing particles - magical ambient effect (dark mode only) */}
        {isMounted && !prefersReducedMotion && !isLightTheme && (
          <>
            <Firefly startX={-100} startY={treeCenterY - 30} delay={0} color="#fbbf24" prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <Firefly startX={90} startY={treeCenterY + 20} delay={2} color="#d4a855" prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <Firefly startX={-50} startY={treeCenterY + 60} delay={4} color="#3b82f6" prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <Firefly startX={120} startY={treeCenterY - 50} delay={1} color="#fbbf24" prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <Firefly startX={-130} startY={treeCenterY + 40} delay={3} color="#10b981" prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <Firefly startX={60} startY={treeCenterY - 70} delay={5} color="#8b5cf6" prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <Firefly startX={-70} startY={treeCenterY - 20} delay={2.5} color="#ec4899" prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <Firefly startX={140} startY={treeCenterY} delay={3.5} color="#06b6d4" prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
          </>
        )}

        {/* Growth buds showing continuous sprouting - tree keeps growing (dark mode only) */}
        {isMounted && !prefersReducedMotion && !isLightTheme && (
          <>
            <GrowthBud x={-50} y={minY + 40} delay={0} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <GrowthBud x={70} y={minY + 55} delay={1.2} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <GrowthBud x={-90} y={minY + 75} delay={2.4} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <GrowthBud x={40} y={minY + 30} delay={0.8} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <GrowthBud x={-30} y={minY + 65} delay={1.8} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <GrowthBud x={100} y={minY + 50} delay={3} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <GrowthBud x={-110} y={minY + 60} delay={2} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
            <GrowthBud x={20} y={minY + 85} delay={0.5} prefersReducedMotion={prefersReducedMotion} isMounted={isMounted} />
          </>
        )}

        {/* Golden life energy particles rising from roots (dark mode only) */}
        {!prefersReducedMotion && !isLightTheme && isMounted && (
          <>
            <motion.circle
              r={2}
              fill="#fbbf24"
              initial={{ opacity: 0 }}
              animate={{
                y: [maxY + 30, minY + 20],
                x: [0, 15, -10, 5, 0],
                opacity: [0, 0.6, 0.4, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeOut'
              }}
            />
            <motion.circle
              r={1.5}
              fill="#f59e0b"
              initial={{ opacity: 0 }}
              animate={{
                y: [maxY + 25, minY + 30],
                x: [-20, -5, -25, -15, -20],
                opacity: [0, 0.5, 0.3, 0]
              }}
              transition={{
                duration: 9,
                delay: 2,
                repeat: Infinity,
                ease: 'easeOut'
              }}
            />
            <motion.circle
              r={2}
              fill="#d4a855"
              initial={{ opacity: 0 }}
              animate={{
                y: [maxY + 20, minY + 40],
                x: [25, 10, 30, 20, 25],
                opacity: [0, 0.5, 0.3, 0]
              }}
              transition={{
                duration: 10,
                delay: 4,
                repeat: Infinity,
                ease: 'easeOut'
              }}
            />
          </>
        )}

        {/* Ground/soil decoration - layered organic earth */}
        <motion.g>
          {/* Outer earth glow */}
          <motion.ellipse
            cx={0}
            cy={maxY + 30}
            rx={width * 0.5}
            ry={25}
            fill="url(#branchGradient)"
            opacity={0.08}
            initial={prefersReducedMotion ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.08 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
          />
          {/* Main earth layer */}
          <motion.ellipse
            cx={0}
            cy={maxY + 25}
            rx={width * 0.42}
            ry={18}
            fill="url(#branchGradient)"
            opacity={0.18}
            initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          {/* Inner earth highlight */}
          <motion.ellipse
            cx={0}
            cy={maxY + 20}
            rx={width * 0.25}
            ry={10}
            fill="#6b5545"
            opacity={0.12}
            initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          {/* Small decorative stones */}
          {[-60, -30, 25, 55].map((xOffset, i) => (
            <motion.ellipse
              key={`stone-${i}`}
              cx={xOffset}
              cy={maxY + 32 + (i % 2) * 5}
              rx={4 + i}
              ry={2 + i * 0.5}
              fill="#8b7355"
              opacity={0.25}
              initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 200 }}
            />
          ))}
        </motion.g>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[var(--hawk-text-secondary)]">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full bg-amber-400" />
          {legendLabels.root}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: STAGE_COLORS.career }} />
          {legendLabels.stage}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full border-2" style={{ borderColor: 'var(--hawk-text-tertiary)' }} />
          {legendLabels.goal}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--hawk-text-tertiary)' }} />
          {legendLabels.task}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rotate-45 bg-amber-400" />
          {legendLabels.experiment}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          {legendLabels.hawkeye}
        </span>
      </div>
    </div>
  )
}
