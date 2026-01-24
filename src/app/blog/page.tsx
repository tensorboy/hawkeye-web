import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hawkeye 博客 - AI 效率工具技巧 | 生产力提升 | 工作效率',
  description: '探索 Hawkeye 博客，获取 AI 智能助手使用技巧、效率提升方法、工作自动化教程、隐私保护指南等优质内容。',
  keywords: [
    'Hawkeye 博客',
    'AI 助手教程',
    'AI 效率工具',
    '生产力提升',
    '工作效率',
    'AI 智能助手',
    '本地AI教程',
    'Ollama 教程',
    '工作效率方法',
    '智能工具指南',
  ],
  openGraph: {
    title: 'Hawkeye 博客 - AI 效率工具技巧与生产力提升',
    description: '探索 Hawkeye 博客，获取 AI 智能助手使用技巧和效率提升方法',
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hawkeye Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye 博客 - AI 效率工具技巧与生产力提升',
    description: '探索 Hawkeye 博客，获取 AI 智能助手使用技巧和效率提升方法',
    images: [siteConfig.twitterImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

// 博客文章数据（后续可以改为从 MDX/CMS 读取）
const blogPosts = [
  {
    slug: 'why-local-first-ai',
    title: '为什么本地优先的 AI 助手是未来？',
    titleEn: 'Why Local-First AI Assistants Are the Future',
    excerpt: '探讨云端 AI 和本地 AI 的优劣，以及为什么 Hawkeye 选择本地优先架构来保护用户隐私。',
    category: '技术理念',
    date: '2025-01-15',
    readTime: '8 分钟',
    featured: true,
    tags: ['隐私保护', '本地AI', '技术架构'],
  },
  {
    slug: 'hawkeye-vs-traditional-ai-tools',
    title: '主动感知 vs 被动响应：AI 助手的两种范式',
    titleEn: 'Proactive vs Reactive: Two Paradigms of AI Assistants',
    excerpt: '对比传统 AI 工具（如 Copilot、Cursor）的被动响应模式和 Hawkeye 的主动感知模式，分析各自的优势场景。',
    category: '产品对比',
    date: '2025-01-10',
    readTime: '10 分钟',
    featured: true,
    tags: ['产品对比', 'AI工具', '工作效率'],
  },
  {
    slug: 'setup-ollama-with-hawkeye',
    title: 'Hawkeye + Ollama 完全离线运行指南',
    titleEn: 'Complete Guide: Run Hawkeye Offline with Ollama',
    excerpt: '手把手教你配置 Ollama 本地大语言模型，让 Hawkeye 100% 离线运行，彻底保护你的隐私。',
    category: '使用教程',
    date: '2025-01-05',
    readTime: '12 分钟',
    featured: false,
    tags: ['Ollama', '本地部署', '教程'],
  },
  {
    slug: '10x-productivity-tips',
    title: '10 倍效率提升实践：Hawkeye 使用技巧大全',
    titleEn: '10x Productivity with Hawkeye',
    excerpt: '分享用户使用 Hawkeye 提升工作效率的实战经验，包括邮件处理、文档整理、任务自动化等实用技巧。',
    category: '效率提升',
    date: '2024-12-28',
    readTime: '15 分钟',
    featured: true,
    tags: ['效率提升', '工作技巧', '自动化'],
  },
  {
    slug: 'ai-privacy-concerns-2025',
    title: '2025 年 AI 隐私问题全解析：你的数据去哪了？',
    titleEn: 'AI Privacy Concerns in 2025: Where Does Your Data Go?',
    excerpt: '深入分析主流 AI 工具的数据收集实践，以及如何选择真正尊重隐私的 AI 助手。',
    category: '隐私安全',
    date: '2024-12-20',
    readTime: '10 分钟',
    featured: false,
    tags: ['隐私', '数据安全', 'AI伦理'],
  },
  {
    slug: 'screen-perception-technology',
    title: '屏幕感知技术原理：Hawkeye 如何理解你的工作',
    titleEn: 'Screen Perception Technology: How Hawkeye Understands Your Work',
    excerpt: '技术深度解析 Hawkeye 的屏幕感知机制，包括 OCR、视觉理解、意图推断等核心技术。',
    category: '技术解析',
    date: '2024-12-15',
    readTime: '20 分钟',
    featured: false,
    tags: ['技术原理', '屏幕感知', '视觉AI'],
  },
]

const categories = [
  { name: '全部', count: blogPosts.length },
  { name: '技术理念', count: blogPosts.filter(p => p.category === '技术理念').length },
  { name: '使用教程', count: blogPosts.filter(p => p.category === '使用教程').length },
  { name: '效率提升', count: blogPosts.filter(p => p.category === '效率提升').length },
  { name: '产品对比', count: blogPosts.filter(p => p.category === '产品对比').length },
  { name: '技术解析', count: blogPosts.filter(p => p.category === '技术解析').length },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(p => p.featured)
  const recentPosts = blogPosts.filter(p => !p.featured)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hawkeye 博客
            <span className="block text-2xl md:text-3xl text-purple-400 mt-2">
              AI 效率工具技巧与生产力提升
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            探索 AI 智能助手的最佳实践，获取效率提升方法、技术教程和行业洞察
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-all"
              >
                {cat.name}
                <span className="ml-2 text-purple-400">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="text-yellow-400">⭐</span> 精选文章
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <div className="flex gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs text-gray-500">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">最新文章</h2>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-400">{post.excerpt}</p>
                  </div>
                  <div className="flex gap-2 md:flex-col md:items-end">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-500">#{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            订阅我们的更新
          </h2>
          <p className="text-gray-300 mb-8">
            获取最新的 AI 效率工具技巧、产品更新和独家内容
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <a
              href="https://github.com/tensorboy/hawkeye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Star on GitHub
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium transition-all w-full sm:w-auto"
            >
              返回首页
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
