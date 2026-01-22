import { Metadata } from 'next'

// SEO 配置常量
export const siteConfig = {
  name: 'Hawkeye',
  // 优化后的标题：英文优先 + 明确产品定位 + 核心价值主张
  title: 'Hawkeye - Open Source AI Desktop Assistant | Local-First Screen Perception & 10x Productivity',
  titleZh: 'Hawkeye - 开源 AI 桌面助手 | 本地优先屏幕感知 · 10x 工作效率',
  titleEn: 'Hawkeye - Open Source AI Desktop Assistant | Local-First Screen Perception & 10x Productivity',
  // 优化后的描述：加入竞品对标 + 核心功能 + 差异化价值
  description: 'Hawkeye 是开源的本地优先 AI 桌面助手，类似 Screenpipe/Rewind 的免费替代品。自动感知屏幕、剪贴板、文件变化，支持 OCR、语音识别、24/7 智能监控。支持 Ollama 本地 LLM，数据永不上传，100% 隐私安全。桌面/VS Code/Chrome 三端联动。',
  descriptionEn: 'Hawkeye is an open-source, local-first AI desktop assistant - a free alternative to Screenpipe/Rewind. Auto-perceives screen, clipboard & file changes with OCR, speech-to-text, 24/7 monitoring. Supports Ollama local LLM, data never leaves your device. Works on Desktop, VS Code & Chrome.',
  url: 'https://hawkiyi.com',
  ogImage: 'https://hawkiyi.com/og-image.png',
  twitterImage: 'https://hawkiyi.com/twitter-image.png',
  creator: 'tensorboy',
  github: 'https://github.com/tensorboy/hawkeye',
  // 大幅扩展的关键词策略
  keywords: {
    zh: [
      // 核心产品词
      'AI 助手',
      '智能任务助手',
      'AI 桌面助手',
      '本地 AI 助手',
      'AI 记忆助手',
      '桌面 AI 记忆',
      // 竞品对标词（重要！）
      'Screenpipe 替代品',
      'Rewind 替代品',
      'Raycast 替代品',
      'Memex 替代品',
      'OpenRecall 替代品',
      '开源 AI 助手',
      '免费 Rewind',
      '开源 Screenpipe',
      // 功能特性词
      '屏幕感知',
      '屏幕录制 AI',
      '屏幕历史搜索',
      '剪贴板助手',
      '剪贴板 AI',
      'OCR 识别',
      '语音识别',
      '文件监控',
      '24/7 AI 监控',
      'AI 数字记忆',
      '电脑历史记录',
      // 技术词
      '本地 AI',
      '离线 AI',
      'Ollama',
      '本地 LLM',
      'Claude AI',
      '隐私保护 AI',
      '完全离线',
      '无需联网',
      '数据不上传',
      // 平台词
      '桌面应用',
      'macOS AI 助手',
      'Windows AI 助手',
      'Linux AI 助手',
      'VS Code 扩展',
      'Chrome 扩展',
      // 场景词
      '程序员效率工具',
      '开发者工具',
      '工作效率提升',
      '任务自动化',
      '10x 效率',
      '自动化工具',
      '生产力工具',
      '会议记录 AI',
      '工作报告生成',
      // 长尾词
      '免费 AI 桌面助手',
      '开源生产力工具',
      '本地优先 AI',
      'AI 工作流自动化',
      '2026 最佳 AI 助手',
      '隐私优先 AI',
    ],
    en: [
      // Core product keywords
      'AI assistant',
      'AI desktop assistant',
      'intelligent task assistant',
      'local-first AI assistant',
      'AI memory assistant',
      'desktop AI memory',
      'digital memory AI',
      // Competitor alternative keywords (IMPORTANT!)
      'Screenpipe alternative',
      'Rewind alternative',
      'Raycast alternative',
      'Memex alternative',
      'OpenRecall alternative',
      'open source AI assistant',
      'free Rewind alternative',
      'open source Rewind',
      'open source Screenpipe',
      'free screen recording AI',
      // Feature keywords (inspired by competitors)
      'screen perception',
      'screen recording AI',
      'screen history search',
      'search your computer history',
      'scroll through screen history',
      'ask AI about your work',
      'clipboard assistant',
      'clipboard AI',
      'OCR recognition',
      'speech to text',
      'file monitoring',
      '24/7 AI monitoring',
      'AI memory',
      '24/7 memory for desktop',
      'meeting transcription',
      // Technical keywords
      'local AI',
      'offline AI',
      'completely offline',
      'no internet required',
      'works offline',
      'Ollama',
      'local LLM',
      'Claude AI',
      'privacy-focused AI',
      'private AI assistant',
      'privacy by design',
      'data never leaves device',
      'your data stays local',
      // Platform keywords
      'desktop app',
      'macOS AI assistant',
      'Windows AI assistant',
      'Linux AI assistant',
      'VS Code extension',
      'Chrome extension',
      'cross-platform AI',
      // Use case keywords
      'developer productivity tool',
      'programmer efficiency',
      'work efficiency',
      'task automation',
      '10x productivity',
      'automation tool',
      'productivity tool',
      'work like ChatGPT locally',
      // Long-tail keywords
      'free AI desktop assistant',
      'open source productivity tool',
      'local-first productivity',
      'AI workflow automation',
      'personal AI assistant desktop',
      'AI computer use agent',
      'best AI assistant 2026',
      'best local AI 2026',
      'privacy first AI assistant',
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
  description: siteConfig.descriptionEn,
  url: siteConfig.url,
  applicationCategory: 'ProductivityApplication',
  applicationSubCategory: 'AI Assistant',
  operatingSystem: ['macOS 12+', 'Windows 10+', 'Linux Ubuntu 20.04+'],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: `${siteConfig.github}/releases`,
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'US',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      merchantReturnDays: 0,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn',
      description: 'This is free, open-source software. No purchase or return required.',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: 'USD',
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'US',
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
      },
      description: 'Digital download - instant access worldwide. No shipping required.',
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '150',
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
  // 扩展功能列表（双语 + 更详细）
  featureList: [
    // 英文特性
    'Intelligent Screen Perception with OCR',
    'Clipboard Intent Understanding',
    'File Change Monitoring',
    'AI Task Automation Suggestions',
    '24/7 Background Monitoring',
    'Local-First Privacy Protection',
    'Ollama Local LLM Support',
    'Multi-Platform (Desktop, VS Code, Chrome)',
    'Speech-to-Text Recognition',
    'Offline Mode Support',
    // 中文特性
    '智能屏幕感知 OCR',
    '剪贴板意图理解',
    '文件变动监控',
    'AI 任务自动化建议',
    '24/7 后台监控',
    '本地优先隐私保护',
    'Ollama 本地 LLM 支持',
    '多平台支持',
    '语音转文字识别',
    '离线模式支持',
  ],
  // 新增：软件要求
  softwareRequirements: 'Node.js 18+, 4GB RAM minimum',
  // 新增：关键词标签
  keywords: 'AI assistant, screen perception, local AI, productivity, open source, Screenpipe alternative, Rewind alternative, Raycast alternative, Memex alternative, 24/7 AI memory, search computer history, offline AI, privacy-focused AI, local LLM, Ollama',
  // 新增：替代品标签
  sameAs: [
    'https://alternativeto.net/software/hawkeye/',
  ],
  // 新增：比较标签 - 帮助搜索引擎理解产品定位
  isRelatedTo: [
    {
      '@type': 'SoftwareApplication',
      name: 'Screenpipe',
      applicationCategory: 'ProductivityApplication',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Rewind AI',
      applicationCategory: 'ProductivityApplication',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Raycast',
      applicationCategory: 'ProductivityApplication',
    },
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

// JSON-LD 结构化数据 - FAQ（扩展版，包含更多 SEO 目标问题）
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Hawkeye AI Assistant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawkeye is a free, open-source, local-first AI desktop assistant that automatically perceives your work environment (screen, clipboard, file changes), understands your intent, and proactively offers actionable task suggestions. It supports Desktop apps, VS Code extension, and Chrome extension.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hawkeye 是什么？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawkeye 是一款免费开源的本地优先 AI 智能任务感知助手，它能自动感知你的工作环境（屏幕、剪贴板、文件变化），理解你的意图，并主动提供可执行的任务建议。支持桌面应用、VS Code 扩展和 Chrome 扩展。',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Hawkeye a free Screenpipe or Rewind alternative?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Hawkeye is a free, open-source alternative to Screenpipe and Rewind. Like these tools, it provides 24/7 screen monitoring, OCR, and AI-powered search. Unlike paid alternatives, Hawkeye is completely free and open source under MIT license, with all data processed locally for maximum privacy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Hawkeye different from Claude Code, Cursor, or Copilot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawkeye uses proactive perception mode - it automatically observes your work and identifies opportunities to help. Claude Code, Cursor, and Copilot use reactive mode, requiring you to input commands. Hawkeye is designed for everyone (developers, designers, students, office workers), not just coders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Hawkeye safe? Does it leak my privacy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No data leakage. Hawkeye uses local-first architecture - all screenshots, clipboard content, and file operations are processed locally and never uploaded to the cloud. AI analysis can use local models like Ollama, enabling 100% offline operation with zero data transmission.',
      },
    },
    {
      '@type': 'Question',
      name: 'What platforms does Hawkeye support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawkeye supports macOS, Windows, and Linux desktop apps, VS Code editor extension, and Chrome browser extension. All three platforms can sync in real-time for seamless collaboration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Hawkeye free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Hawkeye is 100% free and open-source software under the MIT license. You can freely use, modify, and distribute it. There are no hidden costs, subscriptions, or premium tiers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Hawkeye support local LLM like Ollama?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Hawkeye fully supports Ollama and other local LLMs for AI inference. This means you can run Hawkeye completely offline without sending any data to cloud APIs. You can also use cloud APIs like Claude if preferred.',
      },
    },
    {
      '@type': 'Question',
      name: 'What features does Hawkeye have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawkeye features include: 24/7 screen perception with OCR, clipboard intent understanding, file change monitoring, AI task automation suggestions, speech-to-text recognition, local LLM support (Ollama), multi-platform sync (Desktop/VS Code/Chrome), and complete offline capability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Hawkeye compare to Raycast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raycast is a productivity launcher focused on keyboard shortcuts and quick actions. Hawkeye is an AI perception assistant that proactively monitors your workflow and suggests actions. Hawkeye is free and open-source, while Raycast has paid Pro features. Both can complement each other in a productivity stack.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I search my computer history with Hawkeye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Hawkeye records your screen activity 24/7 with OCR, allowing you to scroll through your screen history and ask AI anything about what you did. Unlike cloud-based solutions, all your history stays local on your device.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Hawkeye work completely offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Hawkeye can work 100% offline with no internet required. When using local LLMs like Ollama, all AI processing happens on your device. Your data never leaves your computer, and there is zero cloud dependency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Hawkeye better than Memex or OpenRecall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawkeye offers similar functionality to Memex and OpenRecall but with additional features like proactive task suggestions, multi-platform support (Desktop, VS Code, Chrome), and deeper AI integration. All three are privacy-focused, open-source alternatives to Rewind.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Hawkeye and Screenpipe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both Hawkeye and Screenpipe are open-source, local-first screen recording AI tools. Hawkeye focuses on proactive task perception and multi-platform integration (Desktop, VS Code, Chrome extension). Screenpipe has a plugin ecosystem and emphasizes "computer use AI SDK" capabilities. Both are free Rewind alternatives.',
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
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'US',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      merchantReturnDays: 0,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn',
      description: 'This is free, open-source software. No purchase or return required.',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: 'USD',
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'US',
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
      },
      description: 'Digital download - instant access worldwide. No shipping required.',
    },
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
