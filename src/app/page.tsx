'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Eye,
  Zap,
  Shield,
  Download,
  Github,
  Chrome,
  Monitor,
  Code2,
  ArrowRight,
  Check,
  Sparkles,
  Cpu,
  Globe,
  Lock,
  Users,
  Star,
  TrendingUp
} from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')

  const features = [
    {
      icon: Eye,
      title: '智能感知',
      titleEn: 'Intelligent Perception',
      description: '实时分析屏幕内容、剪贴板、文件变化，理解你的工作上下文',
      descriptionEn: 'Real-time analysis of screen content, clipboard, and file changes'
    },
    {
      icon: Zap,
      title: '即时建议',
      titleEn: 'Instant Suggestions',
      description: '基于 AI 推理生成可执行的任务建议，一键直达',
      descriptionEn: 'AI-powered actionable task suggestions with one-click execution'
    },
    {
      icon: Shield,
      title: '本地优先',
      titleEn: 'Local-First',
      description: '所有数据处理在本地完成，支持离线运行，隐私安全',
      descriptionEn: 'All data processing done locally, offline support, privacy guaranteed'
    }
  ]

  const platforms = [
    { icon: Monitor, name: '桌面应用', desc: 'macOS / Windows / Linux', color: 'from-blue-500 to-cyan-500' },
    { icon: Code2, name: 'VS Code', desc: '编辑器扩展', color: 'from-purple-500 to-pink-500' },
    { icon: Chrome, name: 'Chrome', desc: '浏览器扩展', color: 'from-orange-500 to-red-500' },
  ]

  const stats = [
    { icon: Users, value: '1000+', label: '活跃用户' },
    { icon: Star, value: '4.9', label: '用户评分' },
    { icon: TrendingUp, value: '10x', label: '效率提升' },
    { icon: Globe, value: '100%', label: '离线可用' },
  ]

  const useCases = [
    {
      icon: Cpu,
      title: '程序员',
      description: '自动感知报错信息，智能建议解决方案，减少调试时间'
    },
    {
      icon: Globe,
      title: '设计师',
      description: '监控素材下载，自动整理文件，追踪设计任务进度'
    },
    {
      icon: Lock,
      title: '学生',
      description: '自动保存网页笔记，整理学习资料，提醒作业截止时间'
    },
    {
      icon: Users,
      title: '上班族',
      description: '智能邮件提醒，日程管理建议，会议资料自动整理'
    },
  ]

  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section - 核心 H1 标题 */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" aria-hidden="true" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }} aria-hidden="true" />

        <div className="container mx-auto px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>本地优先 · 隐私安全 · AI 驱动</span>
            </div>

            <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Hawkeye
              <span className="sr-only"> - AI 智能任务感知助手，让你实现 10 倍工作效率</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              <strong>AI 智能任务感知与执行助手</strong>
            </p>

            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              像鹰眼一样敏锐地观察你的工作环境，理解你的意图，主动提供帮助。
              <em>所有数据处理完全在本地</em>，只有 AI 分析时才调用云端 API（可选本地模型）。
              <strong>让 AI 赋能每一个人，实现 10x 工作效率。</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/tensorboy/hawkeye/releases"
                className="inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-shadow"
                aria-label="下载 Hawkeye 桌面版应用"
              >
                <Download className="w-5 h-5" aria-hidden="true" />
                下载桌面版
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/tensorboy/hawkeye"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors"
                aria-label="在 GitHub 上查看 Hawkeye 源代码"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - 数据展示 */}
      <section className="py-12 bg-white border-b" aria-label="Hawkeye 核心数据">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-500" aria-hidden="true" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - H2 核心特性 */}
      <section className="py-24 bg-white" aria-labelledby="features-heading">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4">核心特性</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              三大核心能力，让 AI 成为你的贴身助手，帮你实现 <strong>10 倍工作效率</strong>
            </p>
          </motion.header>

          <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="核心特性列表">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-shadow"
                role="listitem"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6" aria-hidden="true">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section - H2 应用场景 */}
      <section className="py-24 bg-gray-50" aria-labelledby="usecases-heading">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="usecases-heading" className="text-3xl md:text-4xl font-bold mb-4">适用人群</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Hawkeye 为每一个人设计，无论你是程序员、设计师、学生还是上班族
            </p>
          </motion.header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="适用人群列表">
            {useCases.map((useCase, index) => (
              <motion.article
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all"
                role="listitem"
              >
                <useCase.icon className="w-10 h-10 text-primary-500 mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-500 text-sm">{useCase.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section - H2 多平台支持 */}
      <section className="py-24 bg-white" aria-labelledby="platforms-heading">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="platforms-heading" className="text-3xl md:text-4xl font-bold mb-4">多平台支持</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              桌面应用、VS Code 扩展、Chrome 扩展三端联动，无缝协作
            </p>
          </motion.header>

          <div className="grid md:grid-cols-3 gap-6" role="list" aria-label="支持平台列表">
            {platforms.map((platform, index) => (
              <motion.article
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100"
                role="listitem"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6`} aria-hidden="true">
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className="text-gray-500">{platform.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section - H2 隐私优先 */}
      <section className="py-24 bg-gray-50" aria-labelledby="privacy-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-500/10 rounded-3xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 id="privacy-heading" className="text-2xl md:text-3xl font-bold mb-4">隐私优先设计</h2>
                  <ul className="space-y-3 text-gray-600" role="list">
                    <li className="flex items-center gap-3" role="listitem">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <span>所有屏幕截图、剪贴板内容仅在本地处理</span>
                    </li>
                    <li className="flex items-center gap-3" role="listitem">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <span>文件监控和任务执行完全离线运行</span>
                    </li>
                    <li className="flex items-center gap-3" role="listitem">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <span>唯一的云端调用是 AI 分析（可选本地模型替代）</span>
                    </li>
                    <li className="flex items-center gap-3" role="listitem">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <span>支持 Ollama 等本地 LLM，实现 <strong>100% 离线</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* FAQ Section - H2 常见问题（简化版） */}
      <section className="py-24 bg-white" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">常见问题</h2>
          </motion.header>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.details
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-xl p-6 cursor-pointer"
            >
              <summary className="font-semibold text-lg flex justify-between items-center">
                <span>Hawkeye 和 Claude Code / Cursor / Copilot 有什么区别？</span>
                <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" aria-hidden="true" />
              </summary>
              <p className="mt-4 text-gray-600">
                Hawkeye 采用<strong>主动感知</strong>模式，自动观察你的工作并发现可帮助的机会；
                而 Claude Code、Cursor、Copilot 是被动响应模式，需要你主动输入指令。
                Hawkeye 适用于所有人（程序员、设计师、学生、上班族），而不仅仅是开发者。
              </p>
            </motion.details>

            <motion.details
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-gray-50 rounded-xl p-6 cursor-pointer"
            >
              <summary className="font-semibold text-lg flex justify-between items-center">
                <span>Hawkeye 是否安全？会泄露我的隐私吗？</span>
                <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" aria-hidden="true" />
              </summary>
              <p className="mt-4 text-gray-600">
                不会。Hawkeye 采用<strong>本地优先架构</strong>，所有屏幕截图、剪贴板内容、文件操作均在本地处理，不会上传到云端。
                唯一的云端调用是 AI 分析（可选使用本地模型如 Ollama 替代），实现 100% 离线运行。
              </p>
            </motion.details>

            <motion.details
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-gray-50 rounded-xl p-6 cursor-pointer"
            >
              <summary className="font-semibold text-lg flex justify-between items-center">
                <span>Hawkeye 是免费的吗？</span>
                <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" aria-hidden="true" />
              </summary>
              <p className="mt-4 text-gray-600">
                是的，Hawkeye 是<strong>免费开源软件</strong>，采用 MIT 许可证。你可以自由使用、修改和分发。
              </p>
            </motion.details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
              开始使用 Hawkeye，实现 10x 工作效率
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              免费开源，本地运行，让 AI 成为你的智能助手
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/tensorboy/hawkeye"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors"
                aria-label="查看 Hawkeye 文档和源代码"
              >
                查看文档
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - 语义化 footer */}
      <footer className="py-12 bg-gray-900 text-gray-400" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl" role="img" aria-label="鹰">🦅</span>
              <span className="text-white font-semibold">Hawkeye</span>
              <span className="text-sm">- AI 赋能每个人 10x 效率</span>
            </div>
            <p className="text-sm">
              MIT License © {new Date().getFullYear()} <a href="https://github.com/tensorboy" className="hover:text-white transition-colors">tensorboy</a>
            </p>
            <nav aria-label="社交媒体链接">
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/tensorboy/hawkeye"
                  className="hover:text-white transition-colors"
                  aria-label="访问 Hawkeye GitHub 仓库"
                >
                  <Github className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  )
}
