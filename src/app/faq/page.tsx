import { Metadata } from 'next'
import { siteConfig, faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'FAQ - 常见问题解答 | Hawkeye AI 助手',
  description: '了解 Hawkeye AI 智能任务感知助手的常见问题：什么是 Hawkeye？如何保护隐私？支持哪些平台？与 Cursor、Copilot 有什么区别？',
  keywords: [
    'Hawkeye FAQ',
    'Hawkeye 常见问题',
    'AI 助手使用教程',
    'Hawkeye 安全吗',
    'Hawkeye 免费吗',
    'Hawkeye vs Cursor',
    'Hawkeye vs Copilot',
    '本地AI助手',
    '隐私保护AI',
  ],
  openGraph: {
    title: 'FAQ - 常见问题解答 | Hawkeye AI 助手',
    description: '了解 Hawkeye AI 智能任务感知助手的常见问题解答',
    url: `${siteConfig.url}/faq`,
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hawkeye FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - 常见问题解答 | Hawkeye AI 助手',
    description: '了解 Hawkeye AI 智能任务感知助手的常见问题解答',
    images: [siteConfig.twitterImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
}

// 扩展的FAQ数据
const faqs = [
  {
    question: 'Hawkeye 是什么？',
    answer: 'Hawkeye 是一款本地优先的 AI 智能任务感知助手，它能自动感知你的工作环境（屏幕、剪贴板、文件变化），理解你的意图，并主动提供可执行的任务建议。不同于传统的AI助手需要你输入指令，Hawkeye 会主动观察你的工作并发现可以帮助的机会。',
    category: 'general',
  },
  {
    question: 'Hawkeye 和 Claude Code / Cursor / Copilot 有什么区别？',
    answer: 'Hawkeye 采用主动感知模式，自动观察你的工作并发现可帮助的机会；而 Claude Code、Cursor、Copilot 是被动响应模式，需要你主动输入指令。Hawkeye 适用于所有人（上班族、学生、创作者、技术人员），是真正为普通用户设计的智能助手。此外，Hawkeye 支持桌面应用、VS Code 扩展、Chrome 扩展三端联动，提供更全面的工作场景覆盖。',
    category: 'comparison',
  },
  {
    question: 'Hawkeye 是否安全？会泄露我的隐私吗？',
    answer: '不会。Hawkeye 采用本地优先架构，所有屏幕截图、剪贴板内容、文件操作均在本地处理，不会上传到云端。唯一的云端调用是 AI 分析（可选使用本地模型如 Ollama 替代），实现 100% 离线运行。你的数据始终在你自己的设备上，我们永远不会收集或存储你的个人数据。',
    category: 'privacy',
  },
  {
    question: 'Hawkeye 支持哪些平台？',
    answer: 'Hawkeye 支持 macOS、Windows、Linux 桌面应用，VS Code 编辑器扩展，以及 Chrome 浏览器扩展。三端可以实时联动，无缝协作。无论你在哪个平台工作，Hawkeye 都能为你提供一致的智能助手体验。',
    category: 'platform',
  },
  {
    question: 'Hawkeye 是免费的吗？',
    answer: '是的，Hawkeye 是免费开源软件，采用 MIT 许可证。你可以自由使用、修改和分发。我们相信好的工具应该对每个人开放，这也是我们选择开源的原因。',
    category: 'pricing',
  },
  {
    question: '如何开始使用 Hawkeye？',
    answer: '你可以从我们的 GitHub 仓库下载最新版本，或者直接从 VS Code 扩展市场 / Chrome 网上应用店安装对应的扩展。安装后，Hawkeye 会自动开始感知你的工作环境，当发现可以帮助的机会时会主动提示你。',
    category: 'getting-started',
  },
  {
    question: 'Hawkeye 支持哪些 AI 模型？',
    answer: 'Hawkeye 支持多种 AI 模型：Claude（Anthropic）、OpenAI GPT 系列，以及本地模型如 Ollama。你可以根据需要选择云端模型获得更强大的能力，或者使用本地模型实现完全离线运行，保护你的隐私。',
    category: 'technical',
  },
  {
    question: 'Hawkeye 会占用很多系统资源吗？',
    answer: '不会。Hawkeye 经过精心优化，采用高效的屏幕感知和剪贴板监控机制，CPU 和内存占用都很低。在后台运行时几乎不会影响你的正常工作。如果你有特殊需求，还可以在设置中调整感知频率和功能开关。',
    category: 'performance',
  },
  {
    question: '我可以自定义 Hawkeye 的行为吗？',
    answer: '当然可以。Hawkeye 提供丰富的自定义选项：你可以设置感知频率、选择要监控的应用、配置 AI 模型、调整提示风格等。高级用户还可以编写自定义规则，让 Hawkeye 按照你的工作方式进行优化。',
    category: 'customization',
  },
  {
    question: '遇到问题如何获得帮助？',
    answer: '你可以通过以下方式获得帮助：1) 访问我们的 GitHub Issues 页面报告问题或查看已知问题；2) 阅读我们的文档获取使用指南；3) 加入我们的社区讨论区与其他用户交流。我们的团队会积极响应社区反馈。',
    category: 'support',
  },
]

// 分类标签
const categoryLabels: Record<string, string> = {
  general: '基础',
  comparison: '对比',
  privacy: '隐私',
  platform: '平台',
  pricing: '价格',
  'getting-started': '入门',
  technical: '技术',
  performance: '性能',
  customization: '自定义',
  support: '支持',
}

export default function FAQPage() {
  return (
    <>
      {/* JSON-LD 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              常见问题解答
              <span className="block text-2xl md:text-3xl text-purple-400 mt-2">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              了解关于 Hawkeye AI 智能任务感知助手的一切
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-semibold">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                          {categoryLabels[faq.category] || faq.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-white mb-3">
                        {faq.question}
                      </h2>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              还有其他问题？
            </h2>
            <p className="text-gray-300 mb-8">
              欢迎访问我们的 GitHub 仓库提交 Issue，或者加入社区讨论
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/tensorboy/hawkeye/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Issues
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium transition-all"
              >
                返回首页
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
