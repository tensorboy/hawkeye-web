'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { LayoutNode } from './tree-layout'
import { STAGE_COLORS } from './demo-data'

interface DemoTreeNodeProps {
  node: LayoutNode
  index: number
  prefersReducedMotion: boolean
}

const STATUS_COLORS: Record<string, string> = {
  running: '#f59e0b',
  succeeded: '#10b981',
  failed: '#ef4444',
}

// Node type descriptions for tooltips
const NODE_DESCRIPTIONS: Record<string, string> = {
  root: 'Your Life Goal - the central purpose that guides all your pursuits',
  stage: 'Life Stage - major areas of focus in your life',
  goal: 'Specific Goal - concrete objectives within each stage',
  task: 'Daily Task - actionable items that move you toward goals',
  experiment: 'Experiment - test new approaches to optimize your progress',
}

// Stage icon SVG paths - reliable vector icons for each life stage
const STAGE_ICON_PATHS: Record<string, { d: string; scale?: number }> = {
  // Career - briefcase shape
  career: {
    d: 'M-5,-3 L5,-3 L5,4 L-5,4 Z M-3,-3 L-3,-5 L3,-5 L3,-3',
    scale: 1.2
  },
  // Learning - book shape
  learning: {
    d: 'M-5,4 L-5,-4 Q0,-6 5,-4 L5,4 Q0,2 -5,4 M0,-5 L0,3',
    scale: 1.1
  },
  // Health - heart shape
  health: {
    d: 'M0,4 C-8,-2 -5,-6 0,-3 C5,-6 8,-2 0,4',
    scale: 1.3
  },
  // Creativity - star/sparkle shape
  creativity: {
    d: 'M0,-5 L1,-1 L5,0 L1,1 L0,5 L-1,1 L-5,0 L-1,-1 Z',
    scale: 1.0
  },
  // Finance - diamond/gem shape
  finance: {
    d: 'M0,-5 L4,0 L0,5 L-4,0 Z M-3,-2 L3,-2',
    scale: 1.1
  },
}

export function DemoTreeNode({ node, index, prefersReducedMotion }: DemoTreeNodeProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  // Use depth-based delay for sequential growth animation from root
  // Root (depth 0) appears first, then stages (depth 1), then goals (depth 2), etc.
  const depthDelay = node.depth * 0.4  // 0.4s between each depth level
  const indexOffset = index * 0.03  // Small offset within same depth
  const delay = 0.1 + depthDelay + indexOffset
  const color = node.stage ? STAGE_COLORS[node.stage] ?? '#94a3b8' : '#fbbf24'

  const variants = prefersReducedMotion
    ? { hidden: { scale: 1, opacity: 1 }, visible: { scale: 1, opacity: 1 } }
    : { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }

  const handleMouseEnter = () => {
    setIsHovered(true)
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setShowTooltip(false)
  }

  const hoverScale = prefersReducedMotion ? 1 : 1.15

  // Common style for interactive SVG groups
  const interactiveStyle = { cursor: 'pointer', pointerEvents: 'all' as const }

  if (node.type === 'root') {
    return (
      <motion.g
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={{ type: 'spring', delay: 0.1 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={interactiveStyle}
      >
        {/* Hover glow effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={40}
              fill="url(#rootGradient)"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.25, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
        {/* Outer glow */}
        <motion.circle
          cx={node.x}
          cy={node.y}
          r={32}
          fill="url(#rootGradient)"
          opacity={0.15}
          animate={{ scale: isHovered ? hoverScale : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        {/* Main circle */}
        <motion.circle
          cx={node.x}
          cy={node.y}
          r={24}
          fill="url(#rootGradient)"
          animate={{ scale: isHovered ? hoverScale : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        {/* Inner highlight */}
        <motion.circle
          cx={node.x}
          cy={node.y - 6}
          r={10}
          fill="rgba(255,255,255,0.15)"
          animate={{ scale: isHovered ? hoverScale : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        {/* Icon — star shape */}
        <motion.text
          x={node.x}
          y={node.y + 5}
          textAnchor="middle"
          fill="white"
          fontSize={16}
          animate={{ scale: isHovered ? hoverScale : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          ★
        </motion.text>
        <text x={node.x} y={node.y + 52} textAnchor="middle" fill="var(--hawk-text-primary)" fontSize={24} fontWeight={700} letterSpacing={0.5}>
          {node.label}
        </text>
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15 }}
            >
              <rect
                x={node.x - 120}
                y={node.y - 75}
                width={240}
                height={32}
                rx={6}
                fill="var(--hawk-surface)"
                stroke="var(--hawk-border)"
                strokeWidth={1}
              />
              <text x={node.x} y={node.y - 54} textAnchor="middle" fill="var(--hawk-text-secondary)" fontSize={11}>
                {NODE_DESCRIPTIONS[node.type]}
              </text>
            </motion.g>
          )}
        </AnimatePresence>
      </motion.g>
    )
  }

  if (node.type === 'stage') {
    return (
      <motion.g
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={{ type: 'spring', delay }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      >
        {/* Hover glow effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={30}
              fill={color}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.2, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
        {/* Soft glow behind stage */}
        <motion.circle
          cx={node.x}
          cy={node.y}
          r={24}
          fill={color}
          opacity={0.12}
          animate={{ scale: isHovered ? hoverScale : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        {/* Main circle */}
        <motion.circle
          cx={node.x}
          cy={node.y}
          r={18}
          fill={color}
          opacity={0.9}
          animate={{ scale: isHovered ? hoverScale : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        {/* Inner highlight */}
        <motion.circle
          cx={node.x}
          cy={node.y - 4}
          r={8}
          fill="rgba(255,255,255,0.12)"
          animate={{ scale: isHovered ? hoverScale : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        {/* Stage icon - SVG path */}
        {node.stage && STAGE_ICON_PATHS[node.stage] && (
          <motion.g
            animate={{ scale: isHovered ? hoverScale : 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{ pointerEvents: 'none' }}
          >
            <motion.path
              d={STAGE_ICON_PATHS[node.stage].d}
              fill="white"
              opacity={0.9}
              transform={`translate(${node.x}, ${node.y}) scale(${STAGE_ICON_PATHS[node.stage].scale ?? 1})`}
            />
          </motion.g>
        )}
        <text x={node.x} y={node.y + 40} textAnchor="middle" fill="var(--hawk-text-primary)" fontSize={22} fontWeight={600}>
          {node.label}
        </text>
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15 }}
            >
              <rect
                x={node.x - 100}
                y={node.y - 55}
                width={200}
                height={28}
                rx={6}
                fill="var(--hawk-surface)"
                stroke="var(--hawk-border)"
                strokeWidth={1}
              />
              <text x={node.x} y={node.y - 36} textAnchor="middle" fill="var(--hawk-text-secondary)" fontSize={10}>
                {NODE_DESCRIPTIONS[node.type]}
              </text>
            </motion.g>
          )}
        </AnimatePresence>
      </motion.g>
    )
  }

  if (node.type === 'experiment') {
    const expColor = node.experimentStatus ? STATUS_COLORS[node.experimentStatus] : '#94a3b8'
    const size = 10
    const points = `${node.x},${node.y - size} ${node.x + size},${node.y} ${node.x},${node.y + size} ${node.x - size},${node.y}`
    return (
      <motion.g
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={{ type: 'spring', delay }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      >
        {/* Hover glow effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={22}
              fill={expColor}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.2, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
        {/* Glow behind diamond */}
        <motion.circle
          cx={node.x}
          cy={node.y}
          r={16}
          fill={expColor}
          opacity={0.1}
          animate={{ scale: isHovered ? hoverScale : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <motion.polygon
          points={points}
          fill={expColor}
          opacity={0.85}
          animate={{ scale: isHovered ? hoverScale : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ transformOrigin: `${node.x}px ${node.y}px` }}
        />
        {node.experimentStatus === 'running' && (
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={14}
            fill="none"
            stroke={expColor}
            strokeWidth={1.5}
            opacity={0.5}
            animate={prefersReducedMotion ? {} : { scale: [1, 1.57], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          />
        )}
        {node.experimentStatus === 'succeeded' && (
          <text x={node.x} y={node.y + 4} textAnchor="middle" fill="white" fontSize={8} fontWeight={700}>
            ✓
          </text>
        )}
        {node.experimentStatus === 'failed' && (
          <text x={node.x} y={node.y + 4} textAnchor="middle" fill="white" fontSize={8} fontWeight={700}>
            ✗
          </text>
        )}
        <text x={node.x} y={node.y + 28} textAnchor="middle" fill="var(--hawk-text-primary)" fontSize={18} fontWeight={500}>
          {node.label}
        </text>
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15 }}
            >
              <rect
                x={node.x - 100}
                y={node.y - 48}
                width={200}
                height={26}
                rx={6}
                fill="var(--hawk-surface)"
                stroke="var(--hawk-border)"
                strokeWidth={1}
              />
              <text x={node.x} y={node.y - 30} textAnchor="middle" fill="var(--hawk-text-secondary)" fontSize={10}>
                {NODE_DESCRIPTIONS[node.type]}
              </text>
            </motion.g>
          )}
        </AnimatePresence>
      </motion.g>
    )
  }

  if (node.type === 'goal') {
    return (
      <motion.g
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={{ type: 'spring', delay }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      >
        {/* Hover glow effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={20}
              fill={color}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
        <motion.circle
          cx={node.x}
          cy={node.y}
          r={13}
          fill="none"
          stroke={color}
          strokeWidth={2}
          opacity={0.8}
          animate={{ scale: isHovered ? hoverScale : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <motion.circle
          cx={node.x}
          cy={node.y}
          r={5}
          fill={color}
          opacity={0.3}
          animate={{ scale: isHovered ? hoverScale : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <text x={node.x} y={node.y + 32} textAnchor="middle" fill="var(--hawk-text-primary)" fontSize={20} fontWeight={500}>
          {node.label}
        </text>
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15 }}
            >
              <rect
                x={node.x - 90}
                y={node.y - 45}
                width={180}
                height={26}
                rx={6}
                fill="var(--hawk-surface)"
                stroke="var(--hawk-border)"
                strokeWidth={1}
              />
              <text x={node.x} y={node.y - 27} textAnchor="middle" fill="var(--hawk-text-secondary)" fontSize={10}>
                {NODE_DESCRIPTIONS[node.type]}
              </text>
            </motion.g>
          )}
        </AnimatePresence>
      </motion.g>
    )
  }

  // task
  return (
    <motion.g
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      transition={{ type: 'spring', delay }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'pointer' }}
    >
      {/* Hover glow effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={14}
            fill={color}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
      <motion.circle
        cx={node.x}
        cy={node.y}
        r={7}
        fill={color}
        opacity={0.65}
        animate={{ scale: isHovered ? hoverScale : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
      <text x={node.x} y={node.y + 26} textAnchor="middle" fill="var(--hawk-text-primary)" fontSize={18} fontWeight={500}>
        {node.label}
      </text>
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
          >
            <rect
              x={node.x - 85}
              y={node.y - 40}
              width={170}
              height={24}
              rx={6}
              fill="var(--hawk-surface)"
              stroke="var(--hawk-border)"
              strokeWidth={1}
            />
            <text x={node.x} y={node.y - 23} textAnchor="middle" fill="var(--hawk-text-secondary)" fontSize={10}>
              {NODE_DESCRIPTIONS[node.type]}
            </text>
          </motion.g>
        )}
      </AnimatePresence>
    </motion.g>
  )
}
