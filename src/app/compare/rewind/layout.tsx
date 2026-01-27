import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Hawkeye vs Rewind AI - Free Open Source Alternative 2026',
  description: 'Looking for a Rewind AI alternative? Hawkeye is the free, open source, prompt-free AI that helps in real-time. No $20/month subscription, 100% local, cross-platform. AI memory that works proactively.',
  keywords: [
    // 主打关键词
    'Rewind AI alternative',
    'Rewind free alternative',
    'Rewind open source alternative',
    'Hawkeye vs Rewind',
    // Prompt-Free 相关
    'prompt-free AI',
    'proactive AI memory',
    'AI without prompts',
    'real-time AI assistant',
    // 竞品关键词
    'free AI memory',
    'open source AI memory',
    'local AI memory',
    'AI memory for Windows',
    'AI memory for Linux',
    // 中文关键词
    'Rewind AI 替代品',
    'Rewind AI 免费替代',
    'AI 记忆助手',
    '本地 AI 记忆',
    // 长尾关键词
    'best Rewind AI alternative 2026',
    'Rewind vs Hawkeye comparison',
    'free alternative to Rewind AI',
    'Rewind AI alternative open source',
  ],
  openGraph: {
    title: 'Hawkeye vs Rewind AI - The Free, Proactive Alternative',
    description: 'Compare Hawkeye with Rewind AI. Free, open source, prompt-free AI memory. No subscription, 100% local, cross-platform.',
    url: `${siteConfig.url}/compare/rewind`,
    type: 'article',
    images: [
      {
        url: `${siteConfig.url}/og-compare-rewind.png`,
        width: 1200,
        height: 630,
        alt: 'Hawkeye vs Rewind AI Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye vs Rewind AI - Free Proactive Alternative',
    description: 'The only prompt-free AI memory. Free, open source, local-first. Best Rewind AI alternative.',
  },
  alternates: {
    canonical: `${siteConfig.url}/compare/rewind`,
  },
}

export default function RewindCompareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
