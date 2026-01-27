'use client'

import { useMemo } from 'react'
import { demoTree, STAGE_COLORS } from './demo-data'
import { computeDemoLayout } from './tree-layout'
import { DemoTreeNode } from './DemoTreeNode'
import { DemoTreeEdge } from './DemoTreeEdge'

interface DemoTreeProps {
  prefersReducedMotion: boolean
}

export function DemoTree({ prefersReducedMotion }: DemoTreeProps) {
  const layout = useMemo(() => computeDemoLayout(demoTree), [])

  // Compute viewBox from node positions
  const xs = layout.nodes.map(n => n.x)
  const ys = layout.nodes.map(n => n.y)
  const minX = Math.min(...xs) - 100
  const maxX = Math.max(...xs) + 100
  const minY = Math.min(...ys) - 60
  const maxY = Math.max(...ys) + 80
  const width = maxX - minX
  const height = maxY - minY

  return (
    <div className="space-y-4">
      <svg
        viewBox={`${minX} ${minY} ${width} ${height}`}
        className="w-full h-auto"
        style={{ maxHeight: 560 }}
        role="img"
        aria-label="Life Tree demo showing a tree structure mapping life goals across career, learning, health, creativity, and finance"
      >
        <defs>
          <radialGradient id="rootGradient">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {layout.edges.map((edge, i) => (
          <DemoTreeEdge key={`e-${i}`} edge={edge} index={i} prefersReducedMotion={prefersReducedMotion} />
        ))}

        {layout.nodes.map((node, i) => (
          <DemoTreeNode key={node.id} node={node} index={i} prefersReducedMotion={prefersReducedMotion} />
        ))}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[var(--hawk-text-secondary)]">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full bg-amber-400" />
          Root
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: STAGE_COLORS.career }} />
          Stage
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full border-2" style={{ borderColor: 'var(--hawk-text-tertiary)' }} />
          Goal
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--hawk-text-tertiary)' }} />
          Task
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rotate-45 bg-amber-400" />
          Experiment
        </span>
      </div>
    </div>
  )
}
