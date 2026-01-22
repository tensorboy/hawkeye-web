import { Metadata } from 'next'
import CompareContent from './CompareContent'
import { siteConfig } from '@/lib/seo'

// SEO metadata for compare page - 优化：加入 Screenpipe, Rewind, Raycast 对比
export const metadata: Metadata = {
  title: 'Hawkeye vs Screenpipe vs Rewind vs Raycast - Best AI Desktop Assistant 2026 | Free Alternative',
  description: 'Compare Hawkeye with Screenpipe, Rewind, Raycast, Cursor & Copilot. Free open-source AI desktop assistant with screen perception, OCR, clipboard automation. Local-first, privacy-focused alternative.',
  keywords: [
    // 竞品对比关键词（高价值）
    'Hawkeye vs Screenpipe',
    'Hawkeye vs Rewind',
    'Hawkeye vs Raycast',
    'Hawkeye vs Cursor',
    'Hawkeye vs Copilot',
    'Screenpipe alternative',
    'Rewind alternative',
    'Rewind AI free alternative',
    'Raycast alternative',
    'free Screenpipe alternative',
    // 功能对比关键词
    'best AI desktop assistant 2026',
    'AI screen recording comparison',
    'AI memory tool comparison',
    'local AI assistant comparison',
    'privacy-focused AI comparison',
    // 中文关键词
    'AI 桌面助手对比',
    'Screenpipe 替代品',
    'Rewind 替代品',
    '开源 AI 助手对比',
    '本地 AI 对比 2026',
    '免费 AI 工具对比',
    // 长尾关键词
    'open source screen perception AI',
    'free AI productivity tool 2026',
    'best local-first AI assistant',
  ],
  openGraph: {
    title: 'Hawkeye vs Screenpipe vs Rewind vs Raycast - 2026 Comparison',
    description: 'Complete comparison of AI desktop assistants: Hawkeye, Screenpipe, Rewind, Raycast. Features, pricing, privacy. Find the best tool for you.',
    url: `${siteConfig.url}/compare`,
    type: 'article',
    images: [
      {
        url: `${siteConfig.url}/og-compare.png`,
        width: 1200,
        height: 630,
        alt: 'Hawkeye vs Screenpipe vs Rewind vs Raycast Comparison 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye vs Screenpipe vs Rewind vs Raycast 2026',
    description: 'Complete AI Desktop Assistant Comparison Guide - Free & Open Source',
  },
  alternates: {
    canonical: `${siteConfig.url}/compare`,
  },
}

export default function ComparePage() {
  return <CompareContent />
}
