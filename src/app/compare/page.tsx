import { Metadata } from 'next'
import CompareContent from './CompareContent'
import { siteConfig } from '@/lib/seo'

// SEO metadata for compare page
export const metadata: Metadata = {
  title: 'Hawkeye vs Cursor vs Copilot vs Cline - AI 编程助手对比 2025',
  description: '详细对比 Hawkeye、GitHub Copilot、Cursor、Cline 四款主流 AI 编程助手。了解功能差异、定价、隐私保护，选择最适合你的工具。',
  keywords: [
    'Hawkeye vs Cursor',
    'Hawkeye vs Copilot',
    'Hawkeye vs Cline',
    'AI 编程助手对比',
    'AI coding assistant comparison',
    'best AI coding tool 2025',
    'Cursor alternative',
    'Copilot alternative',
    'free AI coding assistant',
    'local AI assistant',
    'privacy-focused AI tool',
  ],
  openGraph: {
    title: 'Hawkeye vs Cursor vs Copilot vs Cline - 完整对比',
    description: '四款主流 AI 编程助手全面对比：功能、定价、隐私保护。找到最适合你的AI工具。',
    url: `${siteConfig.url}/compare`,
    type: 'article',
    images: [
      {
        url: `${siteConfig.url}/og-compare.png`,
        width: 1200,
        height: 630,
        alt: 'Hawkeye vs Cursor vs Copilot vs Cline 对比',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye vs Cursor vs Copilot vs Cline',
    description: 'AI 编程助手完整对比指南',
  },
  alternates: {
    canonical: `${siteConfig.url}/compare`,
  },
}

export default function ComparePage() {
  return <CompareContent />
}
