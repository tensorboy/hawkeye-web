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
  Clock,
  Search,
  PlayCircle,
  ArrowRight,
  Eye
} from 'lucide-react'
import { GitHubStarButton } from '@/components/GitHubStars'

export default function ScreenpipeComparePage() {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const prefersReducedMotion = mounted ? shouldReduceMotion : true

  useEffect(() => {
    setMounted(true)
  }, [])

  const comparisonPoints = [
    {
      feature: 'AI 模式',
      hawkeye: '主动式 (Proactive)',
      screenpipe: '被动式 (Reactive)',
      highlight: true,
    },
    {
      feature: 'Prompt-Free',
      hawkeye: true,
      screenpipe: false,
      highlight: true,
    },
    {
      feature: '实时帮助',
      hawkeye: true,
      screenpipe: '需要查询',
      highlight: true,
    },
    {
      feature: '开源',
      hawkeye: true,
      screenpipe: true,
      highlight: false,
    },
    {
      feature: '本地优先',
      hawkeye: true,
      screenpipe: true,
      highlight: false,
    },
    {
      feature: '屏幕录制',
      hawkeye: '实时感知',
      screenpipe: '持续录制',
      highlight: false,
    },
    {
      feature: '存储需求',
      hawkeye: '低',
      screenpipe: '高 (视频存储)',
      highlight: false,
    },
    {
      feature: '搜索历史',
      hawkeye: '自动上下文',
      screenpipe: '手动搜索',
      highlight: false,
    },
    {
      feature: '本地 LLM',
      hawkeye: true,
      screenpipe: true,
      highlight: false,
    },
    {
      feature: 'Agent 模式',
      hawkeye: true,
      screenpipe: '部分',
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
              Screenpipe Alternative
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hawkeye vs Screenpipe
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
              <span className="text-orange-600 font-semibold">Proactive AI</span> vs Reactive Search
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              两者都是开源本地优先，但 Hawkeye 主动帮助你，Screenpipe 需要你主动查询。AI 应该懂你，而不是等你问。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/tensorboy/hawkeye/releases"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-lg"
              >
                <Monitor className="w-5 h-5" />
                Try Proactive AI
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
            Proactive vs Reactive: The Key Difference
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-xl text-gray-900">Hawkeye: Proactive AI</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>实时感知屏幕，<strong>主动</strong>提供帮助</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>无需输入任何提示词或搜索</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>看到错误立即分析，复制文本立即处理</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>轻量级，不占用大量存储空间</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white/70 rounded-xl">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;AI 应该像一个细心的同事，在你需要时主动帮助，而不是等你开口问。&rdquo;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 rounded-2xl border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Search className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-bold text-xl text-gray-900">Screenpipe: Reactive Search</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                  <span>持续录制屏幕和音频，存储供日后搜索</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                  <span>需要主动发起查询才能获得帮助</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                  <span>适合回溯&ldquo;我之前看到过什么&rdquo;</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                  <span>需要大量存储空间保存录制内容</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white/70 rounded-xl">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;更像是一个可搜索的工作记录系统，而不是实时 AI 助手。&rdquo;
                </p>
              </div>
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
                  <span>Screenpipe</span>
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
                  <div className="text-center">{renderValue(point.screenpipe)}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">* 关键差异点</p>
          </div>
        </div>
      </section>

      {/* Use Case Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Which One is Right for You?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-orange-50 p-6 rounded-2xl border border-orange-100"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-orange-600" />
                  Choose Hawkeye if you want:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>实时 AI 帮助，无需等待或搜索</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Prompt-Free 体验，AI 自动理解你在做什么</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>轻量级解决方案，不需要 TB 级存储</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>编程、写作、研究等日常工作的实时辅助</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-200"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <PlayCircle className="w-5 h-5 text-gray-600" />
                  Choose Screenpipe if you want:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gray-400 mt-0.5" />
                    <span>完整的工作历史记录和回溯</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gray-400 mt-0.5" />
                    <span>搜索&ldquo;我之前在哪里看到过这个&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gray-400 mt-0.5" />
                    <span>会议记录和音频转录</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gray-400 mt-0.5" />
                    <span>有足够存储空间保存持续录制内容</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            <p className="text-center text-gray-600 mt-8">
              提示：两者可以同时使用 — Hawkeye 提供实时帮助，Screenpipe 记录历史。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium">
            Proactive AI Assistant
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for AI That Helps Before You Ask?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            开源、本地优先、Prompt-Free。AI 应该主动帮助你，而不是等你开口。
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
            <Link href="/compare/cursor" className="text-gray-400 hover:text-white text-sm">vs Cursor</Link>
            <Link href="/" className="text-gray-400 hover:text-white text-sm">返回首页</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
