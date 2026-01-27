import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

// Chinese SEO metadata
export const metadata: Metadata = {
  title: 'Hawkeye - 开源 AI 桌面助手 | 无需提示词的智能工作伙伴',
  description: 'Hawkeye 是一款免费、开源、本地优先的 AI 桌面助手。24/7 屏幕感知、OCR、剪贴板自动化、文件监控。支持 Ollama 本地大模型，100% 离线隐私保护。',
  keywords: [
    'AI 助手',
    'AI 桌面助手',
    '本地 AI 助手',
    '开源 AI 助手',
    '隐私 AI 助手',
    '屏幕感知 AI',
    'OCR 屏幕捕获',
    '剪贴板 AI 助手',
    '文件监控工具',
    '本地大模型',
    'Ollama',
    '离线 AI',
    'macOS AI 助手',
    'Windows AI 助手',
  ],
  openGraph: {
    title: 'Hawkeye - 开源 AI 桌面助手 | 10倍效率提升',
    description: '免费开源 AI 助手，24/7 屏幕感知、剪贴板自动化，支持本地大模型，100% 隐私保护。',
    url: `${siteConfig.url}/zh`,
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hawkeye - 开源 AI 桌面助手',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye - 开源 AI 桌面助手',
    description: '免费、本地优先的 AI 助手，屏幕感知、OCR、Ollama 支持。',
    images: [siteConfig.twitterImage],
    creator: '@tensorboy',
  },
  alternates: {
    canonical: `${siteConfig.url}/zh`,
    languages: {
      'zh-CN': `${siteConfig.url}/zh`,
      'en-US': siteConfig.url,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function ChineseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
