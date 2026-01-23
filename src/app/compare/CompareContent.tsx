'use client'

import { Fragment, useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  Check,
  X,
  Minus,
  Github,
  ExternalLink,
  Shield,
  Zap,
  Eye,
  Monitor,
  Code2,
  Chrome,
  DollarSign,
  Server,
  Lock
} from 'lucide-react'
import { GitHubStarButton } from '@/components/GitHubStars'

export default function CompareContent() {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const prefersReducedMotion = mounted ? shouldReduceMotion : true

  useEffect(() => {
    setMounted(true)
  }, [])

  const competitors = [
    {
      name: 'Hawkeye',
      logo: '/logo.png',
      tagline: 'Prompt-Free AI Coworker',
      isUs: true,
      pricing: '免费开源',
      pricingNote: 'MIT License',
    },
    {
      name: 'Claude Cowork',
      logo: '🧠',
      tagline: 'Anthropic 桌面助手',
      isUs: false,
      pricing: '$20+/月',
      pricingNote: 'Pro 订阅起',
    },
    {
      name: 'Cursor',
      logo: '⌨️',
      tagline: 'AI 代码编辑器',
      isUs: false,
      pricing: '$20/月',
      pricingNote: 'Pro 起步',
    },
    {
      name: 'Screenpipe',
      logo: '📺',
      tagline: '开源 Rewind',
      isUs: false,
      pricing: '免费开源',
      pricingNote: 'MIT License',
    },
  ]

  const features = [
    {
      category: '核心能力',
      items: [
        {
          name: 'Prompt-Free（无需提示词）',
          hawkeye: true,
          cowork: false,
          cursor: false,
          screenpipe: false,
          note: '✨ Hawkeye 独有：自动理解意图',
        },
        {
          name: '屏幕感知',
          hawkeye: true,
          cowork: true,
          cursor: false,
          screenpipe: true,
          note: '理解屏幕内容和上下文',
        },
        {
          name: '主动任务建议',
          hawkeye: true,
          cowork: 'partial',
          cursor: false,
          screenpipe: false,
          note: '主动分析并建议下一步',
        },
        {
          name: '剪贴板智能',
          hawkeye: true,
          cowork: false,
          cursor: false,
          screenpipe: true,
          note: '监控剪贴板内容',
        },
        {
          name: '文件监控',
          hawkeye: true,
          cowork: true,
          cursor: true,
          screenpipe: false,
          note: '自动追踪文件变化',
        },
        {
          name: 'Agent 模式',
          hawkeye: true,
          cowork: true,
          cursor: true,
          screenpipe: 'partial',
          note: '自主执行多步任务',
        },
      ],
    },
    {
      category: '适用场景',
      items: [
        {
          name: '非开发者友好',
          hawkeye: true,
          cowork: true,
          cursor: false,
          screenpipe: 'partial',
          note: 'Cursor 专注代码',
        },
        {
          name: '代码开发',
          hawkeye: true,
          cowork: 'partial',
          cursor: true,
          screenpipe: false,
          note: 'VS Code 集成',
        },
        {
          name: '办公自动化',
          hawkeye: true,
          cowork: true,
          cursor: false,
          screenpipe: 'partial',
          note: '邮件、文档处理',
        },
        {
          name: '通用任务',
          hawkeye: true,
          cowork: true,
          cursor: false,
          screenpipe: true,
          note: '任意桌面操作',
        },
      ],
    },
    {
      category: '平台支持',
      items: [
        {
          name: '桌面应用',
          hawkeye: true,
          cowork: true,
          cursor: true,
          screenpipe: true,
          note: '独立运行的桌面 App',
        },
        {
          name: 'VS Code 扩展',
          hawkeye: true,
          cowork: false,
          cursor: false,
          screenpipe: false,
          note: 'Cursor 是独立编辑器',
        },
        {
          name: 'Chrome 扩展',
          hawkeye: true,
          cowork: 'partial',
          cursor: false,
          screenpipe: false,
          note: '浏览器集成',
        },
        {
          name: 'Windows',
          hawkeye: true,
          cowork: false,
          cursor: true,
          screenpipe: true,
          note: 'Cowork 仅 macOS',
        },
        {
          name: 'Linux',
          hawkeye: true,
          cowork: false,
          cursor: true,
          screenpipe: true,
          note: 'Linux 支持',
        },
      ],
    },
    {
      category: '隐私与安全',
      items: [
        {
          name: '100% 本地处理',
          hawkeye: true,
          cowork: false,
          cursor: false,
          screenpipe: true,
          note: '数据完全不上传',
        },
        {
          name: '离线可用',
          hawkeye: true,
          cowork: false,
          cursor: false,
          screenpipe: true,
          note: '无需联网使用',
        },
        {
          name: '本地 LLM (Ollama)',
          hawkeye: true,
          cowork: false,
          cursor: false,
          screenpipe: true,
          note: '支持本地大模型',
        },
        {
          name: '开源透明',
          hawkeye: true,
          cowork: false,
          cursor: false,
          screenpipe: true,
          note: '源码公开可审计',
        },
      ],
    },
    {
      category: '定价',
      items: [
        {
          name: '完全免费',
          hawkeye: true,
          cowork: false,
          cursor: false,
          screenpipe: true,
          note: 'Cowork/Cursor 需 $20/月',
        },
        {
          name: '无订阅费',
          hawkeye: true,
          cowork: false,
          cursor: false,
          screenpipe: true,
          note: '无月费',
        },
        {
          name: '企业自托管',
          hawkeye: true,
          cowork: false,
          cursor: 'partial',
          screenpipe: true,
          note: '私有部署',
        },
      ],
    },
  ]

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-500" />
    } else if (value === false) {
      return <X className="w-5 h-5 text-gray-300" />
    } else if (value === 'partial') {
      return <Minus className="w-5 h-5 text-yellow-500" />
    }
    return null
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors min-h-[44px] py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-orange-50/50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
              ✨ The Only Prompt-Free Option
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compare Prompt-Free AI Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Hawkeye vs Claude Cowork vs Cursor vs Screenpipe
            </p>
            <p className="text-base text-gray-500 max-w-3xl mx-auto mb-8">
              <strong className="text-orange-600">唯一无需提示词的 AI 协作伙伴</strong> — 自动理解你在做什么，无需输入任何指令
            </p>
            <div className="flex justify-center gap-4">
              <GitHubStarButton repo="tensorboy/hawkeye" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Prompt-Free Hawkeye?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Zero Prompts</h3>
              <p className="text-gray-600 text-sm">
                无需输入提示词。Hawkeye 自动理解你在做什么，主动建议下一步。
              </p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">100% Private</h3>
              <p className="text-gray-600 text-sm">
                完全本地处理，数据永不上传。支持离线运行 + 本地 LLM。
              </p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Free Forever</h3>
              <p className="text-gray-600 text-sm">
                开源免费，无 $20/月订阅。Cowork 和 Cursor 的最佳替代。
              </p>
            </motion.div>
          </div>

          {/* Competitive Positioning */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Hawkeye 的竞争优势</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🧠</span>
                  <span className="font-semibold text-gray-800">vs Claude Cowork</span>
                </div>
                <p className="text-sm text-gray-600"><strong>Prompt-Free</strong> + 免费 + 跨平台（Cowork 需 $20/月，仅 macOS）</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">⌨️</span>
                  <span className="font-semibold text-gray-800">vs Cursor</span>
                </div>
                <p className="text-sm text-gray-600"><strong>非开发者友好</strong> + Prompt-Free + 免费（Cursor 专注代码，$20/月）</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">📺</span>
                  <span className="font-semibold text-gray-800">vs Screenpipe</span>
                </div>
                <p className="text-sm text-gray-600"><strong>主动建议</strong> + VS Code/Chrome 集成（Screenpipe 侧重被动记录）</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">⏪</span>
                  <span className="font-semibold text-gray-800">vs Rewind AI</span>
                </div>
                <p className="text-sm text-gray-600"><strong>开源永续</strong> + Prompt-Free（Rewind 已停服）</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">功能对比表</h2>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200">
              {/* Header */}
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="p-4 text-left text-gray-500 font-medium w-1/4">功能</th>
                  {competitors.map((c) => (
                    <th key={c.name} className={`p-4 text-center ${c.isUs ? 'bg-orange-50' : ''}`}>
                      <div className="flex flex-col items-center gap-1">
                        {c.isUs ? (
                          <Image src={c.logo} alt={c.name} width={32} height={32} className="w-8 h-8" />
                        ) : (
                          <span className="text-2xl">{c.logo}</span>
                        )}
                        <span className={`font-bold ${c.isUs ? 'text-orange-600' : 'text-gray-900'}`}>
                          {c.name}
                        </span>
                        <span className="text-xs text-gray-500">{c.pricing}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {features.map((category) => (
                  <Fragment key={category.category}>
                    <tr className="bg-gray-50">
                      <td colSpan={5} className="p-3 font-semibold text-gray-700 text-sm uppercase tracking-wide">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr
                        key={item.name}
                        className={`border-b border-gray-100 ${itemIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                      >
                        <td className="p-4">
                          <div>
                            <span className="font-medium text-gray-900">{item.name}</span>
                            {item.note && (
                              <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-center bg-orange-50/50">
                          {renderFeatureValue(item.hawkeye)}
                        </td>
                        <td className="p-4 text-center">
                          {renderFeatureValue(item.cowork)}
                        </td>
                        <td className="p-4 text-center">
                          {renderFeatureValue(item.cursor)}
                        </td>
                        <td className="p-4 text-center">
                          {renderFeatureValue(item.screenpipe)}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>支持</span>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="w-4 h-4 text-yellow-500" />
              <span>部分支持</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-gray-300" />
              <span>不支持</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparisons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">详细对比</h2>

          {/* vs Claude Cowork */}
          <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-8 bg-gray-50 rounded-2xl"
            id="hawkeye-vs-cowork"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Image src="/logo.png" alt="Hawkeye" width={24} height={24} className="w-6 h-6 inline" /> Hawkeye vs 🧠 Claude Cowork
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Claude Cowork 是 Anthropic 推出的桌面 AI 助手。<strong>核心区别：Hawkeye 无需提示词（Prompt-Free），Cowork 仍需手动输入指令。</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Hawkeye 优势</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ <strong>Prompt-Free</strong>，无需输入任何指令</li>
                  <li>✅ <strong>完全免费</strong>，无 $20+/月订阅费</li>
                  <li>✅ <strong>100% 本地处理</strong>，数据不上传</li>
                  <li>✅ <strong>支持 Windows/Linux</strong>（Cowork 仅 macOS）</li>
                  <li>✅ <strong>VS Code + Chrome 扩展</strong>多端联动</li>
                  <li>✅ <strong>开源透明</strong>，代码可审计</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Claude Cowork 优势</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ Claude Opus 4.5 模型能力强大</li>
                  <li>✅ VM 沙盒安全隔离</li>
                  <li>✅ 与 Gmail 等 Anthropic 连接器集成</li>
                  <li>✅ Anthropic 官方技术支持</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              <strong>结论：</strong>如果你想要<strong>无需打字的 AI 协作</strong>，选择 Hawkeye；如果需要 Anthropic 官方支持且只使用 macOS，选择 Claude Cowork。
            </p>
          </motion.article>

          {/* vs Cursor */}
          <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-8 bg-gray-50 rounded-2xl"
            id="hawkeye-vs-cursor"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Image src="/logo.png" alt="Hawkeye" width={24} height={24} className="w-6 h-6 inline" /> Hawkeye vs ⌨️ Cursor
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Cursor 是基于 VS Code 的 AI 代码编辑器，专注于开发者。<strong>核心区别：Hawkeye 面向所有人，不只是程序员。</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Hawkeye 优势</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ <strong>Prompt-Free</strong>，无需输入任何指令</li>
                  <li>✅ <strong>非开发者友好</strong>，办公/学习/创作全覆盖</li>
                  <li>✅ <strong>完全免费</strong>，无 $20/月订阅费</li>
                  <li>✅ <strong>100% 本地处理</strong>，数据隐私</li>
                  <li>✅ <strong>开源透明</strong>，代码可审计</li>
                  <li>✅ <strong>屏幕感知</strong>，理解整个桌面</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Cursor 优势</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ 代码补全和生成极其强大</li>
                  <li>✅ 深度集成代码编辑体验</li>
                  <li>✅ 多模型支持（GPT-4, Claude）</li>
                  <li>✅ 成熟的商业产品</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              <strong>结论：</strong>如果你是<strong>非开发者或想要通用 AI 助手</strong>，选择 Hawkeye；如果你专注于代码开发，Cursor 可能更适合。
            </p>
          </motion.article>

          {/* vs Screenpipe */}
          <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-8 bg-gray-50 rounded-2xl"
            id="hawkeye-vs-screenpipe"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Image src="/logo.png" alt="Hawkeye" width={24} height={24} className="w-6 h-6 inline" /> Hawkeye vs 📺 Screenpipe
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Screenpipe 是开源版 Rewind，24/7 录制屏幕和音频。<strong>核心区别：Hawkeye 主动建议，Screenpipe 被动记录。</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Hawkeye 优势</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ <strong>Prompt-Free 主动建议</strong>而非被动记录</li>
                  <li>✅ <strong>VS Code 扩展</strong>深度集成开发场景</li>
                  <li>✅ <strong>Chrome 扩展</strong>浏览器内辅助</li>
                  <li>✅ <strong>即时分析</strong>，无需回溯搜索</li>
                  <li>✅ 更轻量，不需要 24/7 录制存储</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Screenpipe 优势</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ 24/7 全量录制，可回溯搜索</li>
                  <li>✅ Pipes 生态可构建自动化工作流</li>
                  <li>✅ Screenpipe Terminator 桌面自动化 SDK</li>
                  <li>✅ 与 Notion/Obsidian 等集成</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              <strong>结论：</strong>如果你想要<strong>主动智能建议和 Prompt-Free 体验</strong>，选择 Hawkeye；如果需要<strong>全量记录和历史搜索</strong>，选择 Screenpipe。
            </p>
          </motion.article>

          {/* vs Rewind (已停服) */}
          <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300"
            id="hawkeye-vs-rewind"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Image src="/logo.png" alt="Hawkeye" width={24} height={24} className="w-6 h-6 inline" /> Hawkeye vs ⏪ Rewind AI <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full ml-2">已停服</span>
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Rewind AI 于 2025年12月被 Meta 收购，12月19日起停止所有屏幕/音频捕获功能。曾是最受欢迎的"数字记忆"助手。
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-700 mb-2">🔄 Hawkeye：Rewind 的开源替代</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✅ <strong>永久免费开源</strong>，不会被收购停服</li>
                <li>✅ <strong>100% 本地运行</strong>，比 Rewind 更隐私</li>
                <li>✅ <strong>主动建议</strong>而非仅记录</li>
                <li>✅ <strong>三端联动</strong>（桌面 + VS Code + Chrome）</li>
                <li>✅ <strong>社区驱动</strong>，持续迭代</li>
              </ul>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              如果你是 Rewind 的原用户，Hawkeye 是最佳的开源替代方案——更隐私、更主动、永久免费。
            </p>
          </motion.article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium">
            ✨ The Only Prompt-Free Option
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">
            Try the Prompt-Free AI Coworker
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            免费、开源、本地优先。无需提示词，自然工作即可。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/tensorboy/hawkeye/releases"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              <Monitor className="w-5 h-5" />
              Try Prompt-Free AI
            </Link>
            <Link
              href="https://github.com/tensorboy/hawkeye"
              className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
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
            © {new Date().getFullYear()} Hawkeye. MIT License.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">隐私政策</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">服务条款</Link>
            <Link href="/" className="text-gray-400 hover:text-white text-sm">返回首页</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
