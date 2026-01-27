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

  return (
    <motion.path
      d={d}
      fill="none"
      stroke="var(--hawk-text-tertiary)"
      opacity={0.4}
      strokeWidth={1.5}
      initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        pathLength: { duration: 0.6, delay: 0.3 + index * 0.05 },
        opacity: { duration: 0.2, delay: 0.3 + index * 0.05 },
      }}
    />
  )
}
