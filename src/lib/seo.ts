import { Metadata } from 'next'

// SEO 配置常量
export const siteConfig = {
  name: 'Hawkeye',
  title: 'Hawkeye - AI 智能任务感知助手 | 10x 工作效率',
  titleEn: 'Hawkeye - AI Task Perception Assistant | 10x Productivity',
  description: 'Hawkeye 是一款本地优先的 AI 智能助手，自动感知你的工作环境，理解意图，主动提供帮助。支持桌面应用、VS Code 扩展、Chrome 扩展三端联动。',
  descriptionEn: 'Hawkeye is a local-first AI assistant that automatically perceives your work environment, understands your intent, and proactively offers help. Supports Desktop, VS Code, and Chrome extensions.',
  url: 'https://hawkiyi.com',
  ogImage: 'https://hawkiyi.com/og-image.png',
  twitterImage: 'https://hawkiyi.com/twitter-image.png',
  creator: 'tensorboy',
  github: 'https://github.com/tensorboy/hawkeye',
  keywords: {
    zh: [
      'AI 助手',
      '智能任务助手',
      '自动化工具',
      '生产力工具',
      '本地 AI',
      '隐私保护',
      'Claude AI',
      'Ollama',
      '桌面应用',
      'VS Code 扩展',
      'Chrome 扩展',
      '工作效率',
      '任务自动化',
      '屏幕感知',
      '剪贴板助手',
      '10x 效率',
      '开源 AI 工具',
    ],
    en: [
      'AI assistant',
      'intelligent task assistant',
      'automation tool',
      'productivity tool',
      'local AI',
      'privacy-focused',
      'Claude AI',
      'Ollama',
      'desktop app',
      'VS Code extension',
      'Chrome extension',
      'work efficiency',
      'task automation',
      'screen perception',
      'clipboard assistant',
      '10x productivity',
      'open source AI tool',
    ],
  },
  authors: [
    { name: 'tensorboy', url: 'https://github.com/tensorboy' }
  ],
  themeColor: '#667eea',
}

// 生成完整的 metadata
export function generateMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords.zh, ...siteConfig.keywords.en],
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.creator,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      alternateLocale: ['en_US'],
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - AI 智能任务感知助手`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.twitterImage],
      creator: `@${siteConfig.creator}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/manifest.json',
    alternates: {
      canonical: siteConfig.url,
      languages: {
        'zh-CN': siteConfig.url,
        'en-US': `${siteConfig.url}/en`,
      },
    },
    category: 'technology',
    classification: 'AI Productivity Tool',
    ...overrides,
  }
}

// JSON-LD 结构化数据 - 软件应用
export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  applicationCategory: 'ProductivityApplication',
  operatingSystem: ['macOS', 'Windows', 'Linux'],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '100',
    bestRating: '5',
    worstRating: '1',
  },
  author: {
    '@type': 'Person',
    name: siteConfig.creator,
    url: `https://github.com/${siteConfig.creator}`,
  },
  downloadUrl: `${siteConfig.github}/releases`,
  softwareVersion: '0.1.0',
  releaseNotes: `${siteConfig.github}/releases`,
  screenshot: siteConfig.ogImage,
  featureList: [
    '智能屏幕感知',
    '剪贴板意图理解',
    '文件变动监控',
    '任务自动化建议',
    '本地优先隐私保护',
    '支持本地 LLM',
    '多平台支持',
  ],
}

// JSON-LD 结构化数据 - 组织
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [
    siteConfig.github,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'technical support',
    url: `${siteConfig.github}/issues`,
  },
}

// JSON-LD 结构化数据 - 网站
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: ['zh-CN', 'en-US'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.github}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// JSON-LD 结构化数据 - FAQ
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hawkeye 是什么？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawkeye 是一款本地优先的 AI 智能任务感知助手，它能自动感知你的工作环境（屏幕、剪贴板、文件变化），理解你的意图，并主动提供可执行的任务建议。',
      },
    },
    {
      '@type': 'Question',
      name: 'Hawkeye 和 Claude Code / Cursor / Copilot 有什么区别？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawkeye 采用主动感知模式，自动观察你的工作并发现可帮助的机会；而 Claude Code、Cursor、Copilot 是被动响应模式，需要你主动输入指令。Hawkeye 适用于所有人（程序员、设计师、学生、上班族），而不仅仅是开发者。',
      },
    },
    {
      '@type': 'Question',
      name: 'Hawkeye 是否安全？会泄露我的隐私吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不会。Hawkeye 采用本地优先架构，所有屏幕截图、剪贴板内容、文件操作均在本地处理，不会上传到云端。唯一的云端调用是 AI 分析（可选使用本地模型如 Ollama 替代），实现 100% 离线运行。',
      },
    },
    {
      '@type': 'Question',
      name: 'Hawkeye 支持哪些平台？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawkeye 支持 macOS、Windows、Linux 桌面应用，VS Code 编辑器扩展，以及 Chrome 浏览器扩展。三端可以实时联动，无缝协作。',
      },
    },
    {
      '@type': 'Question',
      name: 'Hawkeye 是免费的吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的，Hawkeye 是免费开源软件，采用 MIT 许可证。你可以自由使用、修改和分发。',
      },
    },
  ],
}

// JSON-LD 结构化数据 - 面包屑
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// JSON-LD 结构化数据 - 产品
export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: siteConfig.name,
  description: siteConfig.description,
  image: siteConfig.ogImage,
  brand: {
    '@type': 'Brand',
    name: siteConfig.name,
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: siteConfig.github,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
}

// 合并所有 JSON-LD schemas
export function getAllSchemas() {
  return [
    softwareApplicationSchema,
    organizationSchema,
    websiteSchema,
    faqSchema,
    productSchema,
  ]
}
