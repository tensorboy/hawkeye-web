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
  Lock,
  ArrowRight,
  Eye,
  Code2
} from 'lucide-react'
import { GitHubStarButton } from '@/components/GitHubStars'

export default function RewindComparePage() {
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
      rewind: false,
      highlight: true,
    },
    {
      feature: '定价',
      hawkeye: '免费开源',
      rewind: '$20/月',
      highlight: true,
    },
    {
      feature: '开源',
      hawkeye: true,
      rewind: false,
      highlight: true,
    },
    {
      feature: '平台支持',
      hawkeye: 'Windows/Mac/Linux',
      rewind: '仅 macOS',
      highlight: true,
    },
    {
      feature: '数据隐私',
      hawkeye: '100% 本地',
      rewind: '本地存储',
      highlight: false,
    },
    {
      feature: 'AI 模式',
      hawkeye: '主动式帮助',
      rewind: '被动式搜索',
      highlight: false,
    },
    {
      feature: '实时帮助',
      hawkeye: true,
      rewind: false,
      highlight: false,
    },
    {
      feature: '屏幕录制',
      hawkeye: '实时感知',
      rewind: '持续录制',
      highlight: false,
    },
    {
      feature: '本地 LLM (Ollama)',
      hawkeye: true,
      rewind: false,
      highlight: false,
    },
    {
      feature: '会议转录',
      hawkeye: '通过集成',
      rewind: true,
      highlight: false,
    },
    {
      feature: 'VS Code 扩展',
      hawkeye: true,
      rewind: false,
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
              Rewind AI Alternative
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hawkeye vs Rewind AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
              Free, Open Source, <span className="text-orange-600 font-semibold">Prompt-Free</span> AI Memory
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              无需 $20/月订阅，无需 macOS，完全开源可审计。AI 不只是记住过去，更要主动帮助现在。
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
            Why Choose Hawkeye Over Rewind AI?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Free Forever</h3>
              <p className="text-gray-600 text-sm">
                MIT 开源，永久免费，无订阅费
              </p>
              <div className="mt-3 text-xs text-green-600 font-medium">Rewind 需 $20/月</div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Prompt-Free</h3>
              <p className="text-gray-600 text-sm">
                主动帮助，无需搜索或提问
              </p>
              <div className="mt-3 text-xs text-orange-600 font-medium">Rewind 需要搜索查询</div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Open Source</h3>
              <p className="text-gray-600 text-sm">
                代码完全透明，可审计可定制
              </p>
              <div className="mt-3 text-xs text-blue-600 font-medium">Rewind 闭源</div>
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
              <div className="mt-3 text-xs text-purple-600 font-medium">Rewind 仅 macOS</div>
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
                  <span>Rewind AI</span>
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
                  <div className="text-center">{renderValue(point.rewind)}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">* 关键差异点</p>
          </div>
        </div>
      </section>

      {/* Proactive vs Reactive */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-12 rounded-3xl border border-indigo-100"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Proactive AI vs Searchable Memory
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Rewind AI 的核心是&ldquo;记住你看到的一切&rdquo;，然后让你搜索。这在回溯时很有用，但在工作中你需要的是<strong className="text-orange-600">实时帮助</strong>。
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/80 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-orange-600" />
                    Hawkeye: 实时帮助
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>1. 你在写代码遇到错误</li>
                    <li>2. Hawkeye 立即检测到并分析</li>
                    <li>3. 自动显示解决方案</li>
                    <li className="text-orange-600 font-medium">无需任何操作!</li>
                  </ul>
                </div>
                <div className="bg-white/80 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-gray-500">🔍</span>
                    Rewind: 搜索历史
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>1. 你在写代码遇到错误</li>
                    <li>2. 你继续工作，可能忘记了</li>
                    <li>3. 后来想起来，打开 Rewind 搜索</li>
                    <li>4. 找到之前的错误信息</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700"
                >
                  Explore Hawkeye&apos;s proactive features
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Source Advantage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            The Open Source Advantage
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">可审计</h3>
              <p className="text-gray-600 text-sm">
                完整源代码公开，你可以检查 AI 如何处理你的数据，没有隐藏的遥测或数据收集。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">可定制</h3>
              <p className="text-gray-600 text-sm">
                不满意某个功能？Fork 后自行修改。企业可以根据安全要求定制部署。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">永不过时</h3>
              <p className="text-gray-600 text-sm">
                开源项目不会因公司倒闭而消失。社区会持续维护，你的工作流程不会中断。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium">
            Free Rewind AI Alternative
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Proactive AI Memory?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            免费、开源、跨平台。AI 不只是记住过去，更要主动帮助现在。
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
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <Link href="/compare" className="text-gray-400 hover:text-white text-sm">所有对比</Link>
            <Link href="/compare/cowork" className="text-gray-400 hover:text-white text-sm">vs Claude Cowork</Link>
            <Link href="/compare/cursor" className="text-gray-400 hover:text-white text-sm">vs Cursor</Link>
            <Link href="/compare/screenpipe" className="text-gray-400 hover:text-white text-sm">vs Screenpipe</Link>
            <Link href="/" className="text-gray-400 hover:text-white text-sm">返回首页</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
