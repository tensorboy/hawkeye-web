'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  Check,
  X,
  Github,
  Shield,
  Zap,
  Monitor,
  DollarSign,
  Globe,
  Code2,
  Chrome,
  ArrowRight
} from 'lucide-react'
import { GitHubStarButton } from '@/components/GitHubStars'

export default function CoworkComparePage() {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const prefersReducedMotion = mounted ? shouldReduceMotion : true

  useEffect(() => {
    setMounted(true)
  }, [])

  const comparisonPoints = [
    {
      feature: 'Prompt-Free (无需提示词)',
      hawkeye: true,
      cowork: false,
      highlight: true,
    },
    {
      feature: '定价',
      hawkeye: '免费开源',
      cowork: '$20+/月',
      highlight: true,
    },
    {
      feature: '数据隐私',
      hawkeye: '100% 本地',
      cowork: '云端处理',
      highlight: true,
    },
    {
      feature: '平台支持',
      hawkeye: 'Windows/Mac/Linux',
      cowork: '仅 macOS',
      highlight: true,
    },
    {
      feature: '开源',
      hawkeye: true,
      cowork: false,
      highlight: false,
    },
    {
      feature: '离线使用',
      hawkeye: true,
      cowork: false,
      highlight: false,
    },
    {
      feature: '本地 LLM (Ollama)',
      hawkeye: true,
      cowork: false,
      highlight: false,
    },
    {
      feature: 'VS Code 扩展',
      hawkeye: true,
      cowork: false,
      highlight: false,
    },
    {
      feature: 'Chrome 扩展',
      hawkeye: true,
      cowork: '部分',
      highlight: false,
    },
    {
      feature: '屏幕感知',
      hawkeye: true,
      cowork: true,
      highlight: false,
    },
    {
      feature: 'Agent 模式',
      hawkeye: true,
      cowork: true,
      highlight: false,
    },
  ]

  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-500 mx-auto" />
    } else if (value === false) {
      return <X className="w-5 h-5 text-red-400 mx-auto" />
    }
    return <span className="text-gray-700">{value}</span>
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors min-h-[44px] py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            所有对比
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Hawkeye" width={32} height={32} />
            <span className="font-bold text-gray-900">Hawkeye</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50/50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
              Claude Cowork Alternative
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hawkeye vs Claude Cowork
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
              The Free, Open Source, <span className="text-orange-600 font-semibold">Prompt-Free</span> Alternative
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              无需 $20/月，无需提示词，完全本地运行，支持 Windows/Linux
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/tensorboy/hawkeye/releases"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-lg"
              >
                <Monitor className="w-5 h-5" />
                Try Prompt-Free AI
              </Link>
              <GitHubStarButton repo="tensorboy/hawkeye" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Hawkeye Over Claude Cowork?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Prompt-Free</h3>
              <p className="text-gray-600 text-sm">
                无需输入提示词，自动理解你在做什么
              </p>
              <div className="mt-3 text-xs text-orange-600 font-medium">Cowork 仍需手动输入</div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Free Forever</h3>
              <p className="text-gray-600 text-sm">
                MIT 开源，永久免费，无订阅费
              </p>
              <div className="mt-3 text-xs text-green-600 font-medium">Cowork 需 $20+/月</div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">100% Private</h3>
              <p className="text-gray-600 text-sm">
                完全本地处理，数据不上传
              </p>
              <div className="mt-3 text-xs text-blue-600 font-medium">Cowork 云端处理</div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Cross-Platform</h3>
              <p className="text-gray-600 text-sm">
                Windows, macOS, Linux 全支持
              </p>
              <div className="mt-3 text-xs text-purple-600 font-medium">Cowork 仅 macOS</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Feature Comparison
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-gray-100 p-4 font-semibold text-gray-700">
                <div>Feature</div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Image src="/logo.png" alt="Hawkeye" width={24} height={24} />
                    <span className="text-orange-600">Hawkeye</span>
                  </div>
                </div>
                <div className="text-center">
                  <span>Claude Cowork</span>
                </div>
              </div>

              {/* Rows */}
              {comparisonPoints.map((point, index) => (
                <div
                  key={point.feature}
                  className={`grid grid-cols-3 p-4 border-t border-gray-100 items-center ${
                    point.highlight ? 'bg-orange-50/50' : ''
                  }`}
                >
                  <div className={`font-medium ${point.highlight ? 'text-orange-700' : 'text-gray-700'}`}>
                    {point.feature}
                    {point.highlight && <span className="ml-2 text-orange-500">*</span>}
                  </div>
                  <div className="text-center">{renderValue(point.hawkeye)}</div>
                  <div className="text-center">{renderValue(point.cowork)}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">* 关键差异点</p>
          </div>
        </div>
      </section>

      {/* What is Prompt-Free */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 md:p-12 rounded-3xl border border-orange-100"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                What is Prompt-Free AI?
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                传统 AI 助手（包括 Claude Cowork）需要你手动输入指令告诉它做什么。
                <strong className="text-orange-600"> Hawkeye 是不同的</strong> — 它自动感知你的屏幕、剪贴板和文件变化，
                理解你正在做什么，并主动建议下一步行动。
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/80 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-red-500">X</span> 传统方式 (Claude Cowork)
                  </h3>
                  <ol className="space-y-2 text-gray-600 text-sm">
                    <li>1. 看到错误信息</li>
                    <li>2. 复制错误信息</li>
                    <li>3. 打开 AI 助手</li>
                    <li>4. 输入 &quot;帮我分析这个错误...&quot;</li>
                    <li>5. 等待回复</li>
                  </ol>
                </div>
                <div className="bg-white/80 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-green-500">✓</span> Prompt-Free (Hawkeye)
                  </h3>
                  <ol className="space-y-2 text-gray-600 text-sm">
                    <li>1. 看到错误信息</li>
                    <li>2. Hawkeye 自动检测到</li>
                    <li>3. 立即显示分析和建议</li>
                    <li className="text-orange-600 font-medium">无需任何输入!</li>
                  </ol>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/blog/what-is-prompt-free-ai"
                  className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700"
                >
                  Learn more about Prompt-Free AI
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Multi-Platform Support
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Claude Cowork 仅支持 macOS。Hawkeye 支持所有主流平台，还有 VS Code 和 Chrome 扩展。
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Monitor, name: 'macOS', hawkeye: true, cowork: true },
              { icon: Monitor, name: 'Windows', hawkeye: true, cowork: false },
              { icon: Monitor, name: 'Linux', hawkeye: true, cowork: false },
              { icon: Code2, name: 'VS Code', hawkeye: true, cowork: false },
              { icon: Chrome, name: 'Chrome', hawkeye: true, cowork: false },
            ].map((platform) => (
              <div
                key={platform.name}
                className={`p-4 rounded-xl text-center ${
                  platform.hawkeye && !platform.cowork
                    ? 'bg-orange-50 border border-orange-200'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <platform.icon className={`w-8 h-8 mx-auto mb-2 ${
                  platform.hawkeye && !platform.cowork ? 'text-orange-600' : 'text-gray-600'
                }`} />
                <div className="text-sm font-medium text-gray-900">{platform.name}</div>
                <div className="mt-2 flex justify-center gap-1">
                  {platform.hawkeye && (
                    <span className="w-2 h-2 rounded-full bg-orange-500" title="Hawkeye" />
                  )}
                  {platform.cowork && (
                    <span className="w-2 h-2 rounded-full bg-gray-400" title="Cowork" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-500" />
              <span>Hawkeye</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-400" />
              <span>Claude Cowork</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium">
            Free Claude Cowork Alternative
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Go Prompt-Free?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            免费、开源、本地优先。无需 $20/月，无需提示词。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/tensorboy/hawkeye/releases"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-lg"
            >
              <Monitor className="w-5 h-5" />
              Download Hawkeye Free
            </Link>
            <Link
              href="https://github.com/tensorboy/hawkeye"
              className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Hawkeye. MIT License.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/compare" className="text-gray-400 hover:text-white text-sm">所有对比</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">隐私政策</Link>
            <Link href="/" className="text-gray-400 hover:text-white text-sm">返回首页</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
