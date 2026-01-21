import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hawkeye 功能特性 - AI 智能感知 | 隐私保护 | 多平台支持',
  description: '探索 Hawkeye AI 助手的全部功能：智能屏幕感知、剪贴板意图理解、文件变动监控、本地优先隐私保护、支持 Ollama 本地模型、桌面/VSCode/Chrome 三端联动。',
  keywords: [
    'Hawkeye 功能',
    'AI 屏幕感知',
    '剪贴板助手',
    '文件监控工具',
    '本地AI助手',
    '隐私保护AI',
    'Ollama 集成',
    'VS Code AI 扩展',
    'Chrome AI 扩展',
    '桌面AI应用',
    '任务自动化',
    '智能工作助手',
    '10x 生产力',
  ],
  openGraph: {
    title: 'Hawkeye 功能特性 - 全方位 AI 智能任务感知助手',
    description: '探索 Hawkeye AI 助手的全部功能：智能感知、隐私保护、多平台支持',
    url: `${siteConfig.url}/features`,
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hawkeye Features',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye 功能特性 - 全方位 AI 智能任务感知助手',
    description: '探索 Hawkeye AI 助手的全部功能：智能感知、隐私保护、多平台支持',
    images: [siteConfig.twitterImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/features`,
  },
}

const features = [
  {
    icon: '👁️',
    title: '智能屏幕感知',
    titleEn: 'Smart Screen Perception',
    description: '自动捕捉和理解屏幕内容，识别你正在进行的工作，无需手动输入即可获得智能建议。',
    benefits: ['自动识别工作场景', '无需手动输入', '实时理解上下文'],
    category: 'perception',
  },
  {
    icon: '📋',
    title: '剪贴板意图理解',
    titleEn: 'Clipboard Intent Understanding',
    description: '智能分析复制的内容，自动理解你的意图并提供相关的操作建议和快捷方式。',
    benefits: ['智能内容分析', '自动意图识别', '一键执行操作'],
    category: 'perception',
  },
  {
    icon: '📂',
    title: '文件变动监控',
    titleEn: 'File Change Monitoring',
    description: '实时监控文件系统变化，在你保存或修改文件时主动提供相关帮助和建议。',
    benefits: ['实时文件监控', '智能变更分析', '主动提供帮助'],
    category: 'perception',
  },
  {
    icon: '🔒',
    title: '本地优先架构',
    titleEn: 'Local-First Architecture',
    description: '所有数据处理都在本地完成，你的屏幕截图、剪贴板内容永远不会上传到云端。',
    benefits: ['数据不离开设备', '无云端存储', '完全掌控隐私'],
    category: 'privacy',
  },
  {
    icon: '🤖',
    title: '本地 LLM 支持',
    titleEn: 'Local LLM Support',
    description: '支持 Ollama 等本地大语言模型，实现 100% 离线运行，彻底保护你的隐私。',
    benefits: ['支持 Ollama', '100% 离线运行', '零数据泄露风险'],
    category: 'privacy',
  },
  {
    icon: '💻',
    title: '桌面应用',
    titleEn: 'Desktop App',
    description: '原生桌面应用支持 macOS、Windows、Linux，提供系统级的任务感知和自动化能力。',
    benefits: ['跨平台支持', '系统级集成', '原生性能'],
    category: 'platform',
  },
  {
    icon: '⚡',
    title: 'VS Code 扩展',
    titleEn: 'VS Code Extension',
    description: '深度集成 VS Code 编辑器，为开发者提供智能代码建议、文档查询、错误修复等功能。',
    benefits: ['IDE 深度集成', '智能代码建议', '开发效率提升'],
    category: 'platform',
  },
  {
    icon: '🌐',
    title: 'Chrome 扩展',
    titleEn: 'Chrome Extension',
    description: '浏览器扩展感知网页内容，帮助你快速总结、翻译、提取信息或完成网页相关任务。',
    benefits: ['网页内容感知', '快速信息提取', '浏览效率提升'],
    category: 'platform',
  },
  {
    icon: '🔄',
    title: '三端联动',
    titleEn: 'Cross-Platform Sync',
    description: '桌面应用、VS Code 扩展、Chrome 扩展之间无缝协作，提供统一的智能助手体验。',
    benefits: ['无缝协作', '统一体验', '工作流连续'],
    category: 'platform',
  },
  {
    icon: '🎯',
    title: '主动任务建议',
    titleEn: 'Proactive Task Suggestions',
    description: '不需要你主动询问，Hawkeye 会在发现帮助机会时主动提供可执行的任务建议。',
    benefits: ['主动帮助', '减少认知负担', '提升效率'],
    category: 'intelligence',
  },
  {
    icon: '🧠',
    title: '多模型支持',
    titleEn: 'Multi-Model Support',
    description: '支持 Claude、OpenAI GPT、本地 Ollama 等多种 AI 模型，根据需求灵活选择。',
    benefits: ['模型自由选择', '云端/本地切换', '成本可控'],
    category: 'intelligence',
  },
  {
    icon: '⚙️',
    title: '高度可定制',
    titleEn: 'Highly Customizable',
    description: '丰富的配置选项让你可以自定义感知频率、监控范围、提示风格等，打造专属体验。',
    benefits: ['灵活配置', '个性化体验', '工作流适配'],
    category: 'intelligence',
  },
]

const categories = [
  { id: 'perception', name: '智能感知', icon: '👁️' },
  { id: 'privacy', name: '隐私保护', icon: '🔒' },
  { id: 'platform', name: '多平台支持', icon: '💻' },
  { id: 'intelligence', name: '智能能力', icon: '🧠' },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hawkeye 功能特性
            <span className="block text-2xl md:text-3xl text-purple-400 mt-2">
              全方位 AI 智能任务感知助手
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Hawkeye 通过智能感知你的工作环境，主动发现帮助机会，让 AI 真正成为你的工作伙伴，而不是等待指令的工具。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
              >
                {cat.icon} {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features by Category */}
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">{category.icon}</span>
              {category.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {features
                .filter((f) => f.category === category.id)
                .map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-purple-400 mb-3">{feature.titleEn}</p>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                          <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* Comparison CTA */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            想了解 Hawkeye 与其他工具的区别？
          </h2>
          <p className="text-gray-300 mb-8">
            查看 Hawkeye 与 Cursor、Copilot、Cline 的详细对比
          </p>
          <Link
            href="/compare"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium transition-all"
          >
            查看产品对比
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            准备好体验了吗？
          </h2>
          <p className="text-gray-300 mb-8">
            Hawkeye 完全免费开源，立即下载开始你的智能工作之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/tensorboy/hawkeye/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-purple-500/25"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              免费下载
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-lg transition-all"
            >
              返回首页
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
