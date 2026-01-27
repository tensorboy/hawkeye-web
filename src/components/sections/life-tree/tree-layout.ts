/**
 * Tree Layout Algorithm
 *
 * Pure function that computes x/y positions for a top-down tree.
 * No dependencies — works with the DemoNode type.
 */

import type { DemoNode } from './demo-data'

export interface LayoutNode {
  id: string
  label: string
  type: DemoNode['type']
  stage?: string
  confidence: number
  experimentStatus?: string
  x: number
  y: number
}

export interface LayoutEdge {
  fromX: number
  fromY: number
  toX: number
  toY: number
}

const NODE_H_GAP = 140
const NODE_V_GAP = 110

interface SizedNode {
  node: DemoNode
  width: number
  children: SizedNode[]
}

function computeWidths(node: DemoNode): SizedNode {
  if (node.children.length === 0) {
    return { node, width: NODE_H_GAP, children: [] }
  }

  const children = node.children.map(computeWidths)
  const totalWidth = children.reduce((sum, c) => sum + c.width, 0)
  return { node, width: Math.max(NODE_H_GAP, totalWidth), children }
}

function assignPositions(
  sized: SizedNode,
  cx: number,
  cy: number,
  nodes: LayoutNode[],
  edges: LayoutEdge[],
): void {
  nodes.push({
    id: sized.node.id,
    label: sized.node.label,
    type: sized.node.type,
    stage: sized.node.stage,
    confidence: sized.node.confidence,
    experimentStatus: sized.node.experimentStatus,
    x: cx,
    y: cy,
  })

  if (sized.children.length === 0) return

  const totalWidth = sized.children.reduce((sum, c) => sum + c.width, 0)
  let startX = cx - totalWidth / 2

  for (const child of sized.children) {
    const childCx = startX + child.width / 2
    const childCy = cy + NODE_V_GAP

    edges.push({ fromX: cx, fromY: cy, toX: childCx, toY: childCy })
    assignPositions(child, childCx, childCy, nodes, edges)
    startX += child.width
  }
}

export function computeDemoLayout(root: DemoNode): { nodes: LayoutNode[]; edges: LayoutEdge[] } {
  const sized = computeWidths(root)
  const nodes: LayoutNode[] = []
  const edges: LayoutEdge[] = []

  // Center the tree at (0, 0) — we'll translate via SVG viewBox
  assignPositions(sized, 0, 0, nodes, edges)

  return { nodes, edges }
}
