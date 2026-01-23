import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: '隐私政策 - Privacy Policy | Hawkeye AI 助手',
  description: 'Hawkeye AI 助手隐私政策。了解我们如何保护您的隐私：本地优先架构，数据不上传，开源透明。',
  keywords: [
    'Hawkeye 隐私政策',
    'Hawkeye privacy policy',
    'AI助手隐私保护',
    '本地AI隐私',
    '数据安全',
  ],
  openGraph: {
    title: '隐私政策 - Privacy Policy | Hawkeye AI 助手',
    description: 'Hawkeye AI 助手隐私政策，了解我们如何保护您的隐私',
    url: `${siteConfig.url}/privacy`,
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hawkeye Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '隐私政策 - Privacy Policy | Hawkeye AI 助手',
    description: 'Hawkeye AI 助手隐私政策',
    images: [siteConfig.twitterImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
