'use client'

import { motion } from 'framer-motion'
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

export function DemoTreeNode({ node, index, prefersReducedMotion }: DemoTreeNodeProps) {
  const delay = 0.2 + index * 0.06
  const color = node.stage ? STAGE_COLORS[node.stage] ?? '#94a3b8' : '#fbbf24'

  const variants = prefersReducedMotion
    ? { hidden: { scale: 1, opacity: 1 }, visible: { scale: 1, opacity: 1 } }
    : { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }

  if (node.type === 'root') {
    return (
      <motion.g
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={{ type: 'spring', delay: 0.1 }}
      >
        {/* Outer glow */}
        <circle cx={node.x} cy={node.y} r={32} fill="url(#rootGradient)" opacity={0.15} />
        {/* Main circle */}
        <circle cx={node.x} cy={node.y} r={24} fill="url(#rootGradient)" />
        {/* Inner highlight */}
        <circle cx={node.x} cy={node.y - 6} r={10} fill="rgba(255,255,255,0.15)" />
        {/* Icon — star shape */}
        <text x={node.x} y={node.y + 5} textAnchor="middle" fill="white" fontSize={16}>
          ★
        </text>
        <text x={node.x} y={node.y + 52} textAnchor="middle" fill="var(--hawk-text-primary)" fontSize={24} fontWeight={700} letterSpacing={0.5}>
          {node.label}
        </text>
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
      >
        {/* Soft glow behind stage */}
        <circle cx={node.x} cy={node.y} r={24} fill={color} opacity={0.12} />
        {/* Main circle */}
        <circle cx={node.x} cy={node.y} r={18} fill={color} opacity={0.9} />
        {/* Inner highlight */}
        <circle cx={node.x} cy={node.y - 4} r={8} fill="rgba(255,255,255,0.12)" />
        <text x={node.x} y={node.y + 40} textAnchor="middle" fill="var(--hawk-text-primary)" fontSize={22} fontWeight={600}>
          {node.label}
        </text>
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
      >
        {/* Glow behind diamond */}
        <circle cx={node.x} cy={node.y} r={16} fill={expColor} opacity={0.1} />
        <polygon points={points} fill={expColor} opacity={0.85} />
        {node.experimentStatus === 'running' && (
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={14}
            fill="none"
            stroke={expColor}
            strokeWidth={1.5}
            opacity={0.5}
            animate={prefersReducedMotion ? {} : { r: [14, 22], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
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
      >
        <circle cx={node.x} cy={node.y} r={13} fill="none" stroke={color} strokeWidth={2} opacity={0.8} />
        <circle cx={node.x} cy={node.y} r={5} fill={color} opacity={0.3} />
        <text x={node.x} y={node.y + 32} textAnchor="middle" fill="var(--hawk-text-primary)" fontSize={20} fontWeight={500}>
          {node.label}
        </text>
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
    >
      <circle cx={node.x} cy={node.y} r={7} fill={color} opacity={0.65} />
      <text x={node.x} y={node.y + 26} textAnchor="middle" fill="var(--hawk-text-primary)" fontSize={18} fontWeight={500}>
        {node.label}
      </text>
    </motion.g>
  )
}
