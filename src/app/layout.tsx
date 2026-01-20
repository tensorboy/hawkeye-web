import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_SC } from 'next/font/google'
import './globals.css'
import { JsonLd } from '@/components/JsonLd'
import {
  generateMetadata as genMeta,
  siteConfig,
  getAllSchemas,
} from '@/lib/seo'

// 优化字体加载
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans-sc',
})

// 使用 SEO 配置生成 metadata
export const metadata: Metadata = genMeta()

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: siteConfig.themeColor },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${notoSansSC.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* 预连接优化 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://github.com" />

        {/* DNS 预解析 */}
        <link rel="dns-prefetch" href="https://api.github.com" />

        {/* 规范链接 */}
        <link rel="canonical" href={siteConfig.url} />

        {/* 多语言 hreflang 标签 */}
        <link rel="alternate" hrefLang="zh-CN" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-US" href={`${siteConfig.url}/en`} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />

        {/* RSS/Atom Feed (如果有的话) */}
        {/* <link rel="alternate" type="application/rss+xml" title="Hawkeye Blog RSS" href="/feed.xml" /> */}

        {/* JSON-LD 结构化数据 */}
        <JsonLd data={getAllSchemas()} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* 跳过导航链接 - 无障碍优化 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
        >
          跳到主要内容
        </a>
        {children}
      </body>
    </html>
  )
}
