import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Hawkeye vs Screenpipe - AI Coworker Comparison 2026',
  description: 'Compare Hawkeye with Screenpipe. Both are open source and local-first, but Hawkeye is prompt-free with real-time AI assistance. No manual queries needed - AI that just knows what you need.',
  keywords: [
    // 主打关键词
    'Screenpipe alternative',
    'Screenpipe vs Hawkeye',
    'screen recording AI',
    'AI memory assistant',
    // Prompt-Free 相关
    'prompt-free AI',
    'proactive AI assistant',
    'AI without prompts',
    'real-time AI help',
    // 竞品关键词
    'open source screen AI',
    'local AI memory',
    'screen capture AI',
    'AI productivity tool',
    // 中文关键词
    'Screenpipe 对比',
    'AI 屏幕录制',
    '本地 AI 记忆',
    'AI 生产力工具',
    // 长尾关键词
    'Screenpipe vs Hawkeye comparison 2026',
    'best screen AI tool',
    'proactive vs reactive AI',
  ],
  openGraph: {
    title: 'Hawkeye vs Screenpipe - Proactive vs Reactive AI',
    description: 'Compare Hawkeye with Screenpipe. Both open source, but Hawkeye is proactive and prompt-free.',
    url: `${siteConfig.url}/compare/screenpipe`,
    type: 'article',
    images: [
      {
        url: `${siteConfig.url}/og-compare-screenpipe.png`,
        width: 1200,
        height: 630,
        alt: 'Hawkeye vs Screenpipe Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye vs Screenpipe - Proactive AI Wins',
    description: 'Both open source, but only Hawkeye is prompt-free. AI that helps before you ask.',
  },
  alternates: {
    canonical: `${siteConfig.url}/compare/screenpipe`,
  },
}

export default function ScreenpipeCompareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
