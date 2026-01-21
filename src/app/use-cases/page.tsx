import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hawkeye 使用场景 - 开发者 | 设计师 | 学生 | 办公人员',
  description: '了解 Hawkeye AI 助手如何帮助不同用户：程序员代码辅助、设计师创意工作、学生学习研究、办公人员日常任务自动化。真实使用案例和效率提升数据。',
  keywords: [
    'Hawkeye 使用场景',
    'AI 编程助手',
    'AI 设计工具',
    'AI 学习助手',
    'AI 办公助手',
    '程序员工具',
    '设计师工具',
    '学生效率工具',
    '办公自动化',
    '任务自动化案例',
    '效率提升工具',
    '工作流优化',
  ],
  openGraph: {
    title: 'Hawkeye 使用场景 - 适合每个人的 AI 智能助手',
    description: '了解 Hawkeye AI 助手如何帮助开发者、设计师、学生、办公人员提升效率',
    url: `${siteConfig.url}/use-cases`,
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hawkeye Use Cases',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye 使用场景 - 适合每个人的 AI 智能助手',
    description: '了解 Hawkeye AI 助手如何帮助开发者、设计师、学生、办公人员提升效率',
    images: [siteConfig.twitterImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/use-cases`,
  },
}

const useCases = [
  {
    id: 'developers',
    icon: '👨‍💻',
    title: '软件开发者',
    titleEn: 'Software Developers',
    description: 'Hawkeye 为开发者提供全方位的智能编程辅助，从代码理解到 Bug 修复，全程陪伴。',
    color: 'from-blue-500 to-cyan-500',
    scenarios: [
      {
        title: '智能代码补全与建议',
        description: '基于你当前的代码上下文，Hawkeye 主动提供代码补全、重构建议和最佳实践提示。',
      },
      {
        title: '错误诊断与修复',
        description: '当你遇到报错时，Hawkeye 自动分析错误信息，理解上下文，提供精准的修复方案。',
      },
      {
        title: '文档查询与学习',
        description: '复制一段代码或 API 名称，Hawkeye 自动查找相关文档，帮你快速理解用法。',
      },
      {
        title: 'Git 操作辅助',
        description: '感知你的文件变更，自动生成 commit 信息，帮你处理 merge 冲突。',
      },
    ],
    testimonial: {
      quote: '以前写代码时需要频繁切换到浏览器查文档，现在 Hawkeye 会主动把相关信息推送给我，感觉效率提升了不止一倍。',
      author: '资深前端开发者',
    },
    stats: [
      { label: '代码编写效率', value: '+65%' },
      { label: 'Bug 修复速度', value: '+80%' },
      { label: '上下文切换', value: '-70%' },
    ],
  },
  {
    id: 'designers',
    icon: '🎨',
    title: '设计师',
    titleEn: 'Designers',
    description: 'Hawkeye 帮助设计师提升创意工作效率，从灵感收集到设计稿交付，全程智能辅助。',
    color: 'from-pink-500 to-rose-500',
    scenarios: [
      {
        title: '设计灵感收集',
        description: '浏览设计网站时，Hawkeye 自动分析你看的设计，提取配色、布局、字体等关键信息。',
      },
      {
        title: '素材整理与分类',
        description: '监控你下载的素材文件，自动按类型、风格、项目进行智能分类和整理。',
      },
      {
        title: '设计稿标注辅助',
        description: '从设计软件截图，Hawkeye 自动识别元素尺寸、间距、颜色值，生成开发友好的标注。',
      },
      {
        title: '跨软件协作',
        description: '在 Figma、Sketch、PS 之间切换时，Hawkeye 保持上下文连贯，智能同步工作状态。',
      },
    ],
    testimonial: {
      quote: 'Hawkeye 就像有了一个永远在线的设计助理，帮我处理那些繁琐但必要的工作，让我可以专注于创意本身。',
      author: 'UI/UX 设计师',
    },
    stats: [
      { label: '素材整理效率', value: '+120%' },
      { label: '设计迭代速度', value: '+45%' },
      { label: '交付准备时间', value: '-60%' },
    ],
  },
  {
    id: 'students',
    icon: '📚',
    title: '学生与研究者',
    titleEn: 'Students & Researchers',
    description: 'Hawkeye 为学习和研究提供智能辅助，从资料整理到论文写作，让学习更高效。',
    color: 'from-green-500 to-emerald-500',
    scenarios: [
      {
        title: '智能文献管理',
        description: '下载 PDF 论文时，Hawkeye 自动提取标题、作者、摘要，建立你的个人知识库。',
      },
      {
        title: '阅读辅助与笔记',
        description: '阅读文献时选中不理解的内容，Hawkeye 自动提供解释、翻译或相关背景知识。',
      },
      {
        title: '论文写作建议',
        description: '写作过程中，Hawkeye 主动检查语法、逻辑连贯性，提供措辞建议和引用提醒。',
      },
      {
        title: '学习进度追踪',
        description: '监控你的学习活动，自动生成学习报告，帮你了解时间分配和知识盲点。',
      },
    ],
    testimonial: {
      quote: '写论文时 Hawkeye 帮了大忙，它能理解我在写什么，主动提供相关引用建议，还帮我检查学术写作规范。',
      author: '研究生',
    },
    stats: [
      { label: '文献阅读效率', value: '+85%' },
      { label: '论文写作速度', value: '+50%' },
      { label: '知识整理时间', value: '-55%' },
    ],
  },
  {
    id: 'office-workers',
    icon: '💼',
    title: '办公人员',
    titleEn: 'Office Workers',
    description: 'Hawkeye 帮助办公人员自动化日常任务，减少重复劳动，提升工作效率。',
    color: 'from-orange-500 to-amber-500',
    scenarios: [
      {
        title: '邮件智能处理',
        description: '阅读邮件时，Hawkeye 自动提取关键信息、待办事项，并建议回复模板。',
      },
      {
        title: '文档摘要生成',
        description: '打开长篇文档，Hawkeye 自动生成摘要，帮你快速了解核心内容。',
      },
      {
        title: '会议记录整理',
        description: '会议结束后，Hawkeye 帮你整理笔记、提取行动项、分配责任人。',
      },
      {
        title: '数据报表辅助',
        description: '处理 Excel 数据时，Hawkeye 主动提供公式建议、数据清洗提示和可视化方案。',
      },
    ],
    testimonial: {
      quote: '每天要处理几十封邮件，以前光是分类和回复就要花大半天。有了 Hawkeye 后，这些工作变得轻松多了。',
      author: '项目经理',
    },
    stats: [
      { label: '邮件处理效率', value: '+90%' },
      { label: '文档处理速度', value: '+70%' },
      { label: '重复工作', value: '-80%' },
    ],
  },
]

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hawkeye 使用场景
            <span className="block text-2xl md:text-3xl text-purple-400 mt-2">
              适合每个人的 AI 智能助手
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            无论你是开发者、设计师、学生还是办公人员，Hawkeye 都能理解你的工作，主动提供帮助，让你专注于真正重要的事情。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {useCases.map((uc) => (
              <a
                key={uc.id}
                href={`#${uc.id}`}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
              >
                {uc.icon} {uc.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      {useCases.map((useCase, index) => (
        <section
          key={useCase.id}
          id={useCase.id}
          className={`py-20 px-4 ${index % 2 === 1 ? 'bg-white/5' : ''}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{useCase.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{useCase.title}</h2>
                    <p className="text-purple-400">{useCase.titleEn}</p>
                  </div>
                </div>
                <p className="text-xl text-gray-300 mb-8">{useCase.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {useCase.stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-white/5 rounded-xl">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="border-l-4 border-purple-500 pl-4 py-2">
                  <p className="text-gray-300 italic mb-2">&ldquo;{useCase.testimonial.quote}&rdquo;</p>
                  <cite className="text-purple-400 text-sm">— {useCase.testimonial.author}</cite>
                </blockquote>
              </div>

              {/* Right: Scenarios */}
              <div className="space-y-4">
                {useCase.scenarios.map((scenario, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full bg-gradient-to-r ${useCase.color} flex items-center justify-center text-xs text-white font-bold`}>
                        {i + 1}
                      </span>
                      {scenario.title}
                    </h3>
                    <p className="text-gray-400">{scenario.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            找到你的使用场景了吗？
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Hawkeye 的智能感知能力可以适应任何工作场景，立即开始体验吧
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
              免费下载 Hawkeye
            </a>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-lg transition-all"
            >
              查看全部功能
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
