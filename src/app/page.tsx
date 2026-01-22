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
  TrendingUp,
  Menu,
  X,
  ChevronDown,
  FileText,
  Clipboard,
  FolderOpen,
  Mail,
  MessageSquare,
  Twitter,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: Eye,
      title: '智能感知',
      titleEn: 'Intelligent Perception',
      description: '实时分析屏幕内容、剪贴板、文件变化，理解你的工作上下文',
      badge: 'Free',
      badgeColor: 'bg-green-100 text-green-700'
    },
    {
      icon: Zap,
      title: '即时建议',
      titleEn: 'Instant Suggestions',
      description: '基于 AI 推理生成可执行的任务建议，一键直达',
      badge: 'Dynamic',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Shield,
      title: '本地优先',
      titleEn: 'Local-First',
      description: '所有数据处理在本地完成，支持离线运行，隐私安全',
      badge: 'Secure',
      badgeColor: 'bg-purple-100 text-purple-700'
    }
  ]

  const useCases = [
    {
      icon: Cpu,
      title: '程序员调试助手',
      description: '自动感知报错信息，智能建议解决方案，减少调试时间',
      tag: '⭐️ Featured'
    },
    {
      icon: FileText,
      title: '文档自动整理',
      description: '监控下载文件夹，自动按类型和日期整理文档',
      tag: '⭐️ Featured'
    },
    {
      icon: Clipboard,
      title: '剪贴板智能助手',
      description: '理解复制内容的意图，自动建议下一步操作',
      tag: null
    },
    {
      icon: FolderOpen,
      title: '项目文件追踪',
      description: '监控项目文件变化，自动生成变更报告',
      tag: null
    },
    {
      icon: Mail,
      title: '邮件处理建议',
      description: '分析邮件内容，建议回复模板和待办事项',
      tag: null
    },
    {
      icon: Globe,
      title: '网页信息提取',
      description: '浏览网页时自动识别关键信息并建议保存',
      tag: null
    }
  ]

  const stats = [
    { value: '10x', label: '效率提升', description: '相比传统工作流程' },
    { value: '100%', label: '本地运行', description: '数据永不离开设备' },
    { value: '3', label: '平台支持', description: '桌面/VS Code/Chrome' },
  ]

  const platforms = [
    { icon: Monitor, name: '桌面应用', desc: 'macOS / Windows / Linux', color: 'from-blue-500 to-cyan-500' },
    { icon: Code2, name: 'VS Code', desc: '编辑器扩展', color: 'from-purple-500 to-pink-500' },
    { icon: Chrome, name: 'Chrome', desc: '浏览器扩展', color: 'from-orange-500 to-red-500' },
  ]

  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-b from-orange-50/50 via-white to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🦅</span>
              <span className="text-xl font-bold text-gray-900">Hawkeye</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                功能
              </Link>
              <Link href="#usecases" className="text-gray-600 hover:text-gray-900 transition-colors">
                使用场景
              </Link>
              <Link href="#platforms" className="text-gray-600 hover:text-gray-900 transition-colors">
                多平台
              </Link>
              <Link href="https://github.com/tensorboy/hawkeye" className="text-gray-600 hover:text-gray-900 transition-colors">
                文档
              </Link>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/tensorboy/hawkeye"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <Link
                href="https://github.com/tensorboy/hawkeye"
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="https://github.com/tensorboy/hawkeye/releases"
                className="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Download
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-100 py-4"
          >
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 py-2">功能</Link>
              <Link href="#usecases" className="text-gray-600 hover:text-gray-900 py-2">使用场景</Link>
              <Link href="#platforms" className="text-gray-600 hover:text-gray-900 py-2">多平台</Link>
              <Link href="https://github.com/tensorboy/hawkeye" className="text-gray-600 hover:text-gray-900 py-2">文档</Link>
              <hr className="border-gray-100" />
              <Link
                href="https://github.com/tensorboy/hawkeye/releases"
                className="px-4 py-3 bg-gray-900 text-white rounded-lg font-medium text-center"
              >
                Download
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 id="hero-heading" className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 tracking-tight">
              <span className="block">Hawkeye</span>
              <span className="block text-3xl md:text-5xl mt-2 font-normal text-gray-700">
                AI 赋能每个人 10x 效率
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              从感知到行动 — <strong className="text-gray-900">本地优先的 AI 助手</strong>自动观察你的工作环境，
              理解意图，主动提供帮助。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/tensorboy/hawkeye/releases"
                className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-4 rounded-xl font-medium text-lg hover:bg-gray-800 transition-all shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for Mac
                <ChevronDown className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/tensorboy/hawkeye"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors"
              >
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden">
                {/* Mock App Window */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-500">Hawkeye - 智能任务助手</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[300px] flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-3xl">
                    {/* Chat Panel */}
                    <div className="col-span-1 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                      <div className="text-sm font-medium text-gray-900 mb-3">对话</div>
                      <div className="space-y-2">
                        <div className="bg-gray-100 rounded-lg p-2 text-xs text-gray-600">
                          帮我整理下载文件夹...
                        </div>
                        <div className="bg-primary-100 rounded-lg p-2 text-xs text-primary-700">
                          好的！我已检测到 23 个文件...
                        </div>
                      </div>
                    </div>
                    {/* Agent Cards */}
                    <div className="col-span-2 grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
                        <div className="text-xs font-medium text-green-600 mb-1">屏幕感知</div>
                        <div className="text-sm text-gray-700">正在分析当前窗口...</div>
                        <div className="mt-2 text-xs text-gray-400">● 运行中</div>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
                        <div className="text-xs font-medium text-blue-600 mb-1">文件监控</div>
                        <div className="text-sm text-gray-700">检测到 3 个新文件</div>
                        <div className="mt-2 text-xs text-gray-400">● 活跃</div>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
                        <div className="text-xs font-medium text-purple-600 mb-1">剪贴板</div>
                        <div className="text-sm text-gray-700">已捕获代码片段</div>
                        <div className="mt-2 text-xs text-gray-400">● 就绪</div>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
                        <div className="text-xs font-medium text-orange-600 mb-1">任务建议</div>
                        <div className="text-sm text-gray-700">生成了 5 个建议</div>
                        <div className="mt-2 text-xs text-gray-400">● 完成</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-gray-700">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white" aria-labelledby="features-heading">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="features-heading" className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Build Your Workflow, Your Way
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              智能、安全、完全可控
            </p>
          </motion.header>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Free · 免费开源</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Dynamic · 动态感知</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Secure · 本地优先</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50/50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
                  <feature.icon className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{feature.titleEn}</p>
                <p className="text-gray-600">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="usecases" className="py-24 bg-gradient-to-b from-white to-orange-50/30" aria-labelledby="usecases-heading">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Usecases</span>
            <h2 id="usecases-heading" className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-4">
              真实场景，真实效果
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              看看 Hawkeye 如何帮助你处理日常任务
            </p>
          </motion.header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.article
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer group"
              >
                {useCase.tag && (
                  <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded mb-3">
                    {useCase.tag}
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 transition-colors">
                    <useCase.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">{useCase.title}</h3>
                    <p className="text-sm text-gray-500">{useCase.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-24 bg-white" aria-labelledby="platforms-heading">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="platforms-heading" className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              多平台联动
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              桌面应用、VS Code 扩展、Chrome 扩展三端实时同步
            </p>
          </motion.header>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all text-center"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-500">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50" aria-labelledby="privacy-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h2 id="privacy-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    隐私优先，安全设计
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">所有数据本地处理，永不上传</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">支持 Ollama 本地 LLM</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">可选云端 AI（Claude API）</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">100% 开源透明</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="cta-heading" className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              开源 · 免费 · 本地运行
            </h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
              Hawkeye 是开源项目，你可以自己托管并使用自己的 API Key 或本地模型。
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/tensorboy/hawkeye"
              className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
              Try on GitHub
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 border-t border-gray-800" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🦅</span>
                <span className="text-xl font-bold text-white">Hawkeye</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                AI 赋能每个人 10x 效率。本地优先，隐私安全，开源免费。
              </p>
              {/* Email Subscribe */}
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />
                <button className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">产品</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors">功能</Link></li>
                <li><Link href="#usecases" className="text-gray-400 hover:text-white transition-colors">使用场景</Link></li>
                <li><Link href="#platforms" className="text-gray-400 hover:text-white transition-colors">多平台</Link></li>
                <li><Link href="/compare" className="text-gray-400 hover:text-white transition-colors">对比竞品</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">资源</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/tensorboy/hawkeye" className="text-gray-400 hover:text-white transition-colors">文档</a></li>
                <li><a href="https://github.com/tensorboy/hawkeye" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                <li><Link href="/changelog" className="text-gray-400 hover:text-white transition-colors">更新日志</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">法律</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">隐私政策</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">服务条款</Link></li>
              </ul>
              <h3 className="font-semibold text-white mb-4 mt-6">语言</h3>
              <ul className="space-y-2">
                <li><Link href="/en" className="text-gray-400 hover:text-white transition-colors">English</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Hawkeye. MIT License. <span className="text-gray-600">v0.1.0</span>
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">隐私政策</Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">服务条款</Link>
              <a href="https://github.com/tensorboy/hawkeye" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/tensorboy" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
