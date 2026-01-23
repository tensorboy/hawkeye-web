import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: '服务条款 - Terms of Service | Hawkeye AI 助手',
  description: 'Hawkeye AI 助手服务条款。免费开源软件，基于 MIT 许可证。',
  keywords: [
    'Hawkeye 服务条款',
    'Hawkeye terms of service',
    'AI助手使用条款',
    'MIT许可证',
    '开源软件条款',
  ],
  openGraph: {
    title: '服务条款 - Terms of Service | Hawkeye AI 助手',
    description: 'Hawkeye AI 助手服务条款',
    url: `${siteConfig.url}/terms`,
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hawkeye Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '服务条款 - Terms of Service | Hawkeye AI 助手',
    description: 'Hawkeye AI 助手服务条款',
    images: [siteConfig.twitterImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
