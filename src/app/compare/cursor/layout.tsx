import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Hawkeye vs Cursor - Free Prompt-Free AI Coding Alternative 2026',
  description: 'Compare Hawkeye with Cursor IDE. Hawkeye is free, open source, and prompt-free. No $20/month subscription, works beyond code - understands your entire workflow. The AI that just knows.',
  keywords: [
    // 主打关键词
    'Cursor alternative',
    'Cursor free alternative',
    'Cursor open source alternative',
    'Hawkeye vs Cursor',
    // Prompt-Free 相关
    'prompt-free AI',
    'prompt-free AI coding',
    'AI without prompts',
    'no-prompt AI assistant',
    // 竞品关键词
    'free AI coding assistant',
    'open source AI IDE',
    'local AI coding',
    'AI coding for privacy',
    'AI IDE alternative',
    // 中文关键词
    'Cursor 替代品',
    'Cursor 免费替代',
    '无提示词 AI 编程',
    'AI 编程助手',
    // 长尾关键词
    'best Cursor alternative 2026',
    'Cursor vs Hawkeye comparison',
    'free alternative to Cursor',
    'Cursor alternative privacy',
    'Cursor alternative open source',
  ],
  openGraph: {
    title: 'Hawkeye vs Cursor - The Free, Prompt-Free Alternative',
    description: 'Compare Hawkeye with Cursor IDE. Free, open source, prompt-free AI that works beyond code. No subscription, 100% local.',
    url: `${siteConfig.url}/compare/cursor`,
    type: 'article',
    images: [
      {
        url: `${siteConfig.url}/og-compare-cursor.png`,
        width: 1200,
        height: 630,
        alt: 'Hawkeye vs Cursor Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye vs Cursor - Free Prompt-Free Alternative',
    description: 'The only prompt-free AI that works beyond code. Free, open source, local-first. Best Cursor alternative.',
  },
  alternates: {
    canonical: `${siteConfig.url}/compare/cursor`,
  },
}

export default function CursorCompareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
