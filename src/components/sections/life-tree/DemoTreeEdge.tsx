'use client'

import { motion } from 'framer-motion'
import type { LayoutEdge } from './tree-layout'

interface DemoTreeEdgeProps {
  edge: LayoutEdge
  index: number
  prefersReducedMotion: boolean
}

export function DemoTreeEdge({ edge, index, prefersReducedMotion }: DemoTreeEdgeProps) {
  const midY = (edge.fromY + edge.toY) / 2
  const d = `M ${edge.fromX} ${edge.fromY + 12} C ${edge.fromX} ${midY}, ${edge.toX} ${midY}, ${edge.toX} ${edge.toY - 12}`

  // Edge animates just before target node appears (based on target depth)
  // This creates a "growing" effect from parent to child
  const depthDelay = edge.targetDepth * 0.4  // Match node timing
  const indexOffset = index * 0.02  // Small offset within same depth
  const delay = depthDelay - 0.1 + indexOffset  // Start slightly before node

  // When reduced motion is preferred, show static path without animation
  if (prefersReducedMotion) {
    return (
      <path
        d={d}
        fill="none"
        stroke="var(--hawk-text-tertiary)"
        opacity={0.4}
        strokeWidth={1.5}
      />
    )
  }

  return (
    <motion.path
      d={d}
      fill="none"
      stroke="var(--hawk-text-tertiary)"
      strokeWidth={1.5}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.4 }}
      viewport={{ once: true }}
      transition={{
        pathLength: { duration: 0.5, delay: Math.max(0, delay) },
        opacity: { duration: 0.2, delay: Math.max(0, delay) },
      }}
    />
  )
}
