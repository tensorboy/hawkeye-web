import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

// English SEO metadata - optimized for international audience
export const metadata: Metadata = {
  title: 'Hawkeye - Open Source AI Desktop Assistant | Free Screenpipe & Rewind Alternative',
  description: 'Hawkeye is a free, open-source, local-first AI desktop assistant. Alternative to Screenpipe & Rewind with 24/7 screen perception, OCR, clipboard automation, file monitoring. Supports Ollama local LLM for 100% offline privacy. Desktop, VS Code & Chrome integration.',
  keywords: [
    // Core product keywords
    'AI assistant',
    'AI desktop assistant',
    'local-first AI assistant',
    'open source AI assistant',
    'privacy AI assistant',
    // Competitor alternatives (HIGH VALUE)
    'Screenpipe alternative',
    'Rewind alternative',
    'free Rewind alternative',
    'Raycast alternative',
    'Rewind AI free',
    'open source Screenpipe',
    'open source Rewind',
    // Feature keywords
    'screen perception AI',
    'OCR screen capture',
    'clipboard AI assistant',
    'file monitoring tool',
    '24/7 AI monitoring',
    'AI memory tool',
    'screen recording AI',
    'speech to text AI',
    // Technical keywords
    'local AI',
    'offline AI assistant',
    'Ollama integration',
    'local LLM',
    'privacy-focused AI',
    'on-device AI',
    // Platform keywords
    'macOS AI assistant',
    'Windows AI assistant',
    'Linux AI assistant',
    'VS Code AI extension',
    'Chrome AI extension',
    'cross-platform AI',
    // Use case keywords
    'developer productivity tool',
    'AI workflow automation',
    '10x productivity',
    'task automation AI',
    'personal AI assistant',
    'AI computer use agent',
    // Long-tail keywords
    'free AI desktop assistant',
    'best local AI assistant 2026',
    'AI productivity tool open source',
  ],
  openGraph: {
    title: 'Hawkeye - Open Source AI Desktop Assistant | 10x Your Productivity',
    description: 'Free, open-source AI assistant with 24/7 screen perception, clipboard automation, and local LLM support. Alternative to Screenpipe & Rewind.',
    url: `${siteConfig.url}/en`,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hawkeye - Open Source AI Desktop Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye - Open Source AI Desktop Assistant',
    description: 'Free, local-first AI assistant with screen perception, OCR, and Ollama support. Alternative to Screenpipe & Rewind.',
    images: [siteConfig.twitterImage],
    creator: '@tensorboy',
  },
  alternates: {
    canonical: `${siteConfig.url}/en`,
    languages: {
      'en-US': `${siteConfig.url}/en`,
      'zh-CN': siteConfig.url,
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

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
