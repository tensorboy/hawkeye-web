import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Hawkeye vs Claude Cowork - Free Prompt-Free AI Coworker Alternative 2026',
  description: 'Looking for a Claude Cowork alternative? Hawkeye is the free, open source, prompt-free AI coworker. No $20/month subscription, 100% local, works on Windows/Linux. The only AI that works without typing prompts.',
  keywords: [
    // 主打关键词
    'Claude Cowork alternative',
    'Claude Cowork free alternative',
    'Claude Cowork open source alternative',
    'Hawkeye vs Claude Cowork',
    // Prompt-Free 相关
    'prompt-free AI',
    'prompt-free AI coworker',
    'AI without prompts',
    'no-prompt AI assistant',
    // 竞品关键词
    'free AI coworker',
    'open source AI coworker',
    'local AI coworker',
    'AI coworker for Windows',
    'AI coworker for Linux',
    // 中文关键词
    'Claude Cowork 替代品',
    'Claude Cowork 免费替代',
    '无提示词 AI',
    'AI 协作伙伴',
    // 长尾关键词
    'best Claude Cowork alternative 2026',
    'Claude Cowork vs Hawkeye comparison',
    'free alternative to Claude Cowork',
  ],
  openGraph: {
    title: 'Hawkeye vs Claude Cowork - The Free, Prompt-Free Alternative',
    description: 'Compare Hawkeye with Claude Cowork. Free, open source, prompt-free AI coworker. No subscription, 100% local, cross-platform.',
    url: `${siteConfig.url}/compare/cowork`,
    type: 'article',
    images: [
      {
        url: `${siteConfig.url}/og-compare-cowork.png`,
        width: 1200,
        height: 630,
        alt: 'Hawkeye vs Claude Cowork Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye vs Claude Cowork - Free Prompt-Free Alternative',
    description: 'The only prompt-free AI coworker. Free, open source, local-first. Best Claude Cowork alternative.',
  },
  alternates: {
    canonical: `${siteConfig.url}/compare/cowork`,
  },
}

export default function CoworkCompareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
