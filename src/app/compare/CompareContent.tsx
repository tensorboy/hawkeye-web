'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
  const competitors = [
    {
      name: 'Hawkeye',
      logo: '🦅',
      tagline: 'AI 赋能 10x 效率',
      isUs: true,
      pricing: '免费开源',
      pricingNote: 'MIT License',
    },
    {
      name: 'GitHub Copilot',
      logo: '🤖',
      tagline: 'AI Pair Programmer',
      isUs: false,
      pricing: '$10-39/月',
      pricingNote: '订阅制',
    },
    {
      name: 'Cursor',
      logo: '⚡',
      tagline: 'AI Code Editor',
      isUs: false,
      pricing: '$20/月',
      pricingNote: 'Pro 版',
    },
    {
      name: 'Cline',
      logo: '🔧',
      tagline: 'VS Code Agent',
      isUs: false,
      pricing: '免费',
      pricingNote: '需自带 API Key',
    },
  ]

  const features = [
    {
      category: '核心功能',
      items: [
        {
          name: '代码补全',
          hawkeye: 'partial',
          copilot: true,
          cursor: true,
          cline: true,
          note: 'Hawkeye 主要聚焦任务建议',
        },
        {
          name: '屏幕感知',
          hawkeye: true,
          copilot: false,
          cursor: false,
          cline: false,
          note: '独家功能：理解屏幕内容',
        },
        {
          name: '剪贴板智能',
          hawkeye: true,
          copilot: false,
          cursor: false,
          cline: false,
          note: '独家功能：监控剪贴板',
        },
        {
          name: '文件监控',
          hawkeye: true,
          copilot: false,
          cursor: false,
          cline: 'partial',
          note: '自动追踪文件变化',
        },
        {
          name: '任务建议',
          hawkeye: true,
          copilot: false,
          cursor: 'partial',
          cline: true,
          note: '主动提供下一步建议',
        },
        {
          name: 'Agent 模式',
          hawkeye: true,
          copilot: true,
          cursor: true,
          cline: true,
          note: '自主执行多步任务',
        },
      ],
    },
    {
      category: '平台支持',
      items: [
        {
          name: '桌面应用',
          hawkeye: true,
          copilot: false,
          cursor: true,
          cline: false,
          note: '独立运行的桌面 App',
        },
        {
          name: 'VS Code 扩展',
          hawkeye: true,
          copilot: true,
          cursor: false,
          cline: true,
          note: 'VS Code 集成',
        },
        {
          name: 'Chrome 扩展',
          hawkeye: true,
          copilot: false,
          cursor: false,
          cline: false,
          note: '独家功能：浏览器集成',
        },
        {
          name: 'JetBrains',
          hawkeye: false,
          copilot: true,
          cursor: false,
          cline: false,
          note: 'JetBrains IDE 支持',
        },
      ],
    },
    {
      category: '隐私与安全',
      items: [
        {
          name: '本地运行',
          hawkeye: true,
          copilot: false,
          cursor: false,
          cline: 'partial',
          note: '数据不离开设备',
        },
        {
          name: '离线模式',
          hawkeye: true,
          copilot: false,
          cursor: false,
          cline: 'partial',
          note: '无需联网使用',
        },
        {
          name: '本地 LLM',
          hawkeye: true,
          copilot: false,
          cursor: false,
          cline: true,
          note: '支持 Ollama 等',
        },
        {
          name: '自带 API Key',
          hawkeye: true,
          copilot: false,
          cursor: true,
          cline: true,
          note: '使用自己的 Key',
        },
        {
          name: '开源透明',
          hawkeye: true,
          copilot: false,
          cursor: false,
          cline: true,
          note: '源码公开可审计',
        },
      ],
    },
    {
      category: '定价',
      items: [
        {
          name: '免费使用',
          hawkeye: true,
          copilot: 'partial',
          cursor: 'partial',
          cline: true,
          note: 'Copilot/Cursor 有免费限制',
        },
        {
          name: '无订阅费',
          hawkeye: true,
          copilot: false,
          cursor: false,
          cline: true,
          note: '无月费',
        },
        {
          name: '企业自托管',
          hawkeye: true,
          copilot: true,
          cursor: false,
          cline: true,
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
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hawkeye vs 竞品对比
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              了解 Hawkeye 与其他 AI 编程助手的区别，选择最适合你的工具
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">为什么选择 Hawkeye？</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">隐私优先</h3>
              <p className="text-gray-600 text-sm">
                100% 本地处理，数据永不上传。支持完全离线运行。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">主动感知</h3>
              <p className="text-gray-600 text-sm">
                独家屏幕感知、剪贴板监控功能，理解你的工作上下文。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">永久免费</h3>
              <p className="text-gray-600 text-sm">
                MIT 开源许可，无订阅费，自带 API Key 或使用本地模型。
              </p>
            </motion.div>
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
                  <th className="p-4 text-left text-gray-500 font-medium w-1/3">功能</th>
                  {competitors.map((c) => (
                    <th key={c.name} className={`p-4 text-center ${c.isUs ? 'bg-orange-50' : ''}`}>
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl">{c.logo}</span>
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
                {features.map((category, categoryIndex) => (
                  <>
                    <tr key={category.category} className="bg-gray-50">
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
                          {renderFeatureValue(item.copilot)}
                        </td>
                        <td className="p-4 text-center">
                          {renderFeatureValue(item.cursor)}
                        </td>
                        <td className="p-4 text-center">
                          {renderFeatureValue(item.cline)}
                        </td>
                      </tr>
                    ))}
                  </>
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

          {/* vs Copilot */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-8 bg-gray-50 rounded-2xl"
            id="hawkeye-vs-copilot"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🦅 Hawkeye vs 🤖 GitHub Copilot
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Hawkeye 优势</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ 完全免费，无订阅费用</li>
                  <li>✅ 本地优先，数据不上传</li>
                  <li>✅ 屏幕感知、剪贴板监控</li>
                  <li>✅ 开源透明，可审计代码</li>
                  <li>✅ 支持 Chrome 浏览器扩展</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Copilot 优势</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ 代码补全更成熟</li>
                  <li>✅ 支持更多 IDE（JetBrains 等）</li>
                  <li>✅ 企业级支持和 SLA</li>
                  <li>✅ 与 GitHub 深度集成</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              <strong>结论：</strong>如果你重视隐私和成本，选择 Hawkeye；如果需要成熟的代码补全和企业支持，选择 Copilot。
            </p>
          </motion.article>

          {/* vs Cursor */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-8 bg-gray-50 rounded-2xl"
            id="hawkeye-vs-cursor"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🦅 Hawkeye vs ⚡ Cursor
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Hawkeye 优势</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ 完全免费，无 Pro 版限制</li>
                  <li>✅ 不需要更换编辑器</li>
                  <li>✅ 本地 LLM 支持更好</li>
                  <li>✅ 多平台（VS Code + Chrome）</li>
                  <li>✅ 独特的感知功能</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Cursor 优势</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ Composer 多文件编辑强大</li>
                  <li>✅ 代码补全速度极快</li>
                  <li>✅ 专为 AI 编程优化的 IDE</li>
                  <li>✅ 更流畅的编辑体验</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              <strong>结论：</strong>如果你想保持现有工作流程并获得额外的感知能力，选择 Hawkeye；如果愿意切换 IDE 追求极致的 AI 编程体验，选择 Cursor。
            </p>
          </motion.article>

          {/* vs Cline */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-50 rounded-2xl"
            id="hawkeye-vs-cline"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🦅 Hawkeye vs 🔧 Cline
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Hawkeye 优势</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ 独立桌面应用，不限于 VS Code</li>
                  <li>✅ Chrome 扩展支持</li>
                  <li>✅ 屏幕感知、剪贴板监控</li>
                  <li>✅ 更广泛的使用场景</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Cline 优势</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✅ Plan/Act 双模式更成熟</li>
                  <li>✅ VS Code 集成更深入</li>
                  <li>✅ 社区更活跃（4M+ 用户）</li>
                  <li>✅ MCP 协议支持更完善</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              <strong>结论：</strong>两者都是优秀的开源选择。如果你需要超越 VS Code 的使用场景和感知能力，选择 Hawkeye；如果专注于 VS Code 内的代码开发，Cline 是很好的选择。
            </p>
          </motion.article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            准备好体验 Hawkeye 了吗？
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            免费、开源、本地优先。立即下载，开始 10x 效率提升之旅。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/tensorboy/hawkeye/releases"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Monitor className="w-5 h-5" />
              下载桌面应用
            </Link>
            <Link
              href="https://github.com/tensorboy/hawkeye"
              className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
              查看源代码
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
