import { Metadata } from 'next'
import CompareContent from './CompareContent'
import { siteConfig } from '@/lib/seo'

// SEO metadata for compare page - 优化：Prompt-Free AI Coworker 定位
export const metadata: Metadata = {
  title: 'Hawkeye vs Claude Cowork vs Cursor - Prompt-Free AI Coworker Comparison 2026',
  description: 'Compare Hawkeye (the only prompt-free option) with Claude Cowork, Cursor, Screenpipe & more. Open source, local-first AI coworker that understands without prompts. Free Claude Cowork alternative.',
  keywords: [
    // 核心定位关键词
    'prompt-free AI',
    'prompt-free AI coworker',
    'AI without prompts',
    'no-prompt AI assistant',
    'proactive AI',
    // 竞品对比关键词（高价值）
    'Claude Cowork alternative',
    'Cursor alternative',
    'Cursor alternative for non-coders',
    'Hawkeye vs Claude Cowork',
    'Hawkeye vs Cursor',
    'Hawkeye vs Screenpipe',
    'Screenpipe alternative',
    'free Claude Cowork alternative',
    // AI Coworker 相关
    'AI coworker',
    'AI coworker comparison',
    'AI teammate',
    'open source AI coworker',
    // 功能对比关键词
    'best AI desktop assistant 2026',
    'multimodal AI agent comparison',
    'screen-aware AI comparison',
    'local AI assistant comparison',
    'privacy-focused AI comparison',
    // 中文关键词
    'AI 协作伙伴对比',
    'Claude Cowork 替代品',
    'Cursor 替代品',
    '无提示词 AI',
    '开源 AI 助手对比',
    '本地 AI 对比 2026',
    '免费 AI 工具对比',
    // 长尾关键词
    'open source prompt-free AI',
    'free AI productivity tool 2026',
    'best local-first AI coworker',
  ],
  openGraph: {
    title: 'Hawkeye vs Claude Cowork vs Cursor - Prompt-Free AI Comparison 2026',
    description: 'Compare prompt-free AI coworkers: Hawkeye (free, open source) vs Claude Cowork vs Cursor vs Screenpipe. The only AI that works without prompts.',
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
    title: 'Hawkeye vs Claude Cowork vs Cursor - Prompt-Free AI Comparison',
    description: 'The only prompt-free AI coworker. Free, open source, local-first. Compare with Claude Cowork, Cursor, Screenpipe.',
  },
  alternates: {
    canonical: `${siteConfig.url}/compare`,
  },
}

export default function ComparePage() {
  return <CompareContent />
}
