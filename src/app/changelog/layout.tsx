import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Changelog - 更新日志 | Hawkeye AI 助手',
  description: '查看 Hawkeye AI 助手的版本更新日志，了解新功能、改进和修复内容。',
  keywords: [
    'Hawkeye changelog',
    'Hawkeye 更新日志',
    'Hawkeye 版本历史',
    'Hawkeye 新功能',
    'AI助手更新',
  ],
  openGraph: {
    title: 'Changelog - 更新日志 | Hawkeye AI 助手',
    description: '查看 Hawkeye AI 助手的版本更新日志',
    url: `${siteConfig.url}/changelog`,
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hawkeye Changelog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog - 更新日志 | Hawkeye AI 助手',
    description: '查看 Hawkeye AI 助手的版本更新日志',
    images: [siteConfig.twitterImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/changelog`,
  },
}

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
