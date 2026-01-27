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
  Eye,
  ArrowRight
} from 'lucide-react'
import { GitHubStarButton } from '@/components/GitHubStars'

export default function CursorComparePage() {
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
      cursor: false,
      highlight: true,
    },
    {
      feature: '定价',
      hawkeye: '免费开源',
      cursor: '$20/月起',
      highlight: true,
    },
    {
      feature: '工作范围',
      hawkeye: '全屏幕感知',
      cursor: '仅代码编辑器',
      highlight: true,
    },
    {
      feature: '数据隐私',
      hawkeye: '100% 本地',
      cursor: '云端处理',
      highlight: true,
    },
    {
      feature: '开源',
      hawkeye: true,
      cursor: false,
      highlight: false,
    },
    {
      feature: '离线使用',
      hawkeye: true,
      cursor: false,
      highlight: false,
    },
    {
      feature: '本地 LLM (Ollama)',
      hawkeye: true,
      cursor: false,
      highlight: false,
    },
    {
      feature: '浏览器支持',
      hawkeye: true,
      cursor: false,
      highlight: false,
    },
    {
      feature: '非编程任务',
      hawkeye: true,
      cursor: false,
      highlight: false,
    },
    {
      feature: 'Agent 模式',
      hawkeye: true,
      cursor: true,
      highlight: false,
    },
    {
      feature: '代码补全',
      hawkeye: '通过扩展',
      cursor: true,
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              Cursor Alternative
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hawkeye vs Cursor
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
              Beyond Code: <span className="text-orange-600 font-semibold">Full-Screen AI</span> That Just Knows
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Cursor 专注代码编辑。Hawkeye 感知你的整个工作流程 — 无需提示词，完全本地，永久免费。
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
            Why Choose Hawkeye Over Cursor?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Full-Screen AI</h3>
              <p className="text-gray-600 text-sm">
                感知整个屏幕，不仅限于代码编辑器
              </p>
              <div className="mt-3 text-xs text-orange-600 font-medium">Cursor 仅限 IDE</div>
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
              <div className="mt-3 text-xs text-green-600 font-medium">Cursor 需 $20+/月</div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Prompt-Free</h3>
              <p className="text-gray-600 text-sm">
                无需输入提示词，自动理解上下文
              </p>
              <div className="mt-3 text-xs text-purple-600 font-medium">Cursor 需手动输入</div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">100% Private</h3>
              <p className="text-gray-600 text-sm">
                完全本地处理，代码不上传
              </p>
              <div className="mt-3 text-xs text-blue-600 font-medium">Cursor 云端处理</div>
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
                  <span>Cursor</span>
                </div>
              </div>

              {/* Rows */}
              {comparisonPoints.map((point) => (
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
                  <div className="text-center">{renderValue(point.cursor)}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">* 关键差异点</p>
          </div>
        </div>
      </section>

      {/* Beyond Code */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 rounded-3xl border border-blue-100"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                AI That Sees Everything, Not Just Code
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Cursor 是一款优秀的 AI 编程 IDE，但它只能看到代码编辑器内的内容。
                <strong className="text-orange-600"> Hawkeye 不同</strong> — 它感知你的整个工作流程：
                浏览器、终端、设计工具、文档，甚至你的剪贴板。
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/80 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-gray-600" />
                    Cursor 工作范围
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      代码编辑和补全
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400" />
                      浏览器内容
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400" />
                      设计工具 (Figma, etc.)
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400" />
                      文档和笔记
                    </li>
                  </ul>
                </div>
                <div className="bg-white/80 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-orange-600" />
                    Hawkeye 工作范围
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      全屏幕感知
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      浏览器内容
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      任何应用程序
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      剪贴板监控
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700"
                >
                  Explore all Hawkeye features
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            When to Choose Hawkeye Over Cursor
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">多任务工作流</h3>
              <p className="text-gray-600 text-sm">
                当你需要在代码、浏览器、文档之间频繁切换时，Hawkeye 可以感知整个工作流程，提供连贯的帮助。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">隐私敏感项目</h3>
              <p className="text-gray-600 text-sm">
                当你处理敏感代码或企业项目时，Hawkeye 完全本地运行，代码永不上传云端。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">零成本方案</h3>
              <p className="text-gray-600 text-sm">
                当你不想支付每月 $20+ 的订阅费时，Hawkeye 是完全免费的开源方案。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium">
            Free Cursor Alternative
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Full-Screen AI?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            免费、开源、本地优先。不仅仅是代码编辑器，是你的全方位 AI 协作伙伴。
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
            <Link href="/compare/cowork" className="text-gray-400 hover:text-white text-sm">vs Claude Cowork</Link>
            <Link href="/" className="text-gray-400 hover:text-white text-sm">返回首页</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
