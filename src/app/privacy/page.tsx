'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Server, Trash2, Mail } from 'lucide-react'

export default function PrivacyPolicy() {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const prefersReducedMotion = mounted ? shouldReduceMotion : true

  useEffect(() => {
    setMounted(true)
  }, [])

  const lastUpdated = '2025-01-20'

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

      {/* Content */}
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">隐私政策</h1>
            <p className="text-gray-500">Privacy Policy</p>
            <p className="text-sm text-gray-400 mt-2">最后更新：{lastUpdated}</p>
          </div>

          {/* Summary Box */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-12">
            <h2 className="text-lg font-semibold text-green-800 mb-3">🔒 简要说明</h2>
            <ul className="space-y-2 text-green-700">
              <li>• <strong>本地优先</strong>：所有数据处理在您的设备本地完成</li>
              <li>• <strong>数据不上传</strong>：我们不收集、存储或传输您的个人数据</li>
              <li>• <strong>开源透明</strong>：源代码完全公开，您可以审查我们的代码</li>
              <li>• <strong>您拥有控制权</strong>：您可以随时删除所有本地数据</li>
            </ul>
          </div>

          {/* Sections */}
          <div className="prose prose-gray max-w-none">
            <Section
              icon={Eye}
              title="1. 信息收集"
              id="collection"
            >
              <h4>1.1 我们不收集的信息</h4>
              <p>Hawkeye 是一款<strong>本地优先</strong>的应用程序。我们不会收集：</p>
              <ul>
                <li>您的屏幕内容或截图</li>
                <li>您的剪贴板数据</li>
                <li>您的文件内容</li>
                <li>您的浏览历史</li>
                <li>您的个人身份信息</li>
                <li>任何其他敏感数据</li>
              </ul>

              <h4>1.2 本地处理的数据</h4>
              <p>以下数据仅在您的设备本地处理，永不上传：</p>
              <ul>
                <li><strong>屏幕感知数据</strong>：用于理解您当前工作上下文</li>
                <li><strong>剪贴板内容</strong>：用于提供智能建议</li>
                <li><strong>文件变化</strong>：用于监控项目状态</li>
                <li><strong>应用使用偏好</strong>：存储在本地配置文件中</li>
              </ul>

              <h4>1.3 可选的匿名统计</h4>
              <p>如果您选择启用（默认关闭），我们可能收集匿名的使用统计：</p>
              <ul>
                <li>应用启动次数</li>
                <li>功能使用频率（不含具体内容）</li>
                <li>崩溃报告（不含个人数据）</li>
              </ul>
              <p>您可以在设置中随时关闭此功能。</p>
            </Section>

            <Section
              icon={Server}
              title="2. AI 服务使用"
              id="ai-services"
            >
              <h4>2.1 本地 AI（Ollama）</h4>
              <p>当您使用本地 AI 模型（如通过 Ollama）时：</p>
              <ul>
                <li>所有 AI 推理在您的设备上完成</li>
                <li>没有任何数据离开您的电脑</li>
                <li>完全离线运行</li>
              </ul>

              <h4>2.2 云端 AI（可选）</h4>
              <p>如果您选择使用云端 AI 服务（如 Claude API）：</p>
              <ul>
                <li>您需要提供自己的 API Key</li>
                <li>数据将发送到相应的 AI 服务提供商</li>
                <li>请参阅相应服务商的隐私政策：
                  <ul>
                    <li><a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer">Anthropic (Claude) 隐私政策</a></li>
                    <li><a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">OpenAI 隐私政策</a></li>
                  </ul>
                </li>
              </ul>
              <p>我们建议敏感数据使用本地 AI 模型处理。</p>
            </Section>

            <Section
              icon={Lock}
              title="3. 数据安全"
              id="security"
            >
              <h4>3.1 本地存储</h4>
              <ul>
                <li>所有数据存储在您设备的本地文件系统中</li>
                <li>配置文件位于标准应用数据目录</li>
                <li>敏感信息（如 API Key）使用系统密钥链加密存储</li>
              </ul>

              <h4>3.2 网络通信</h4>
              <ul>
                <li>默认情况下，Hawkeye 不进行任何网络通信</li>
                <li>仅在您选择使用云端 AI 或检查更新时才会联网</li>
                <li>所有网络通信使用 HTTPS 加密</li>
              </ul>

              <h4>3.3 开源审计</h4>
              <p>Hawkeye 是开源软件，您可以：</p>
              <ul>
                <li>查看完整源代码：<a href="https://github.com/tensorboy/hawkeye" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li>审计安全性</li>
                <li>自行编译运行</li>
              </ul>
            </Section>

            <Section
              icon={Trash2}
              title="4. 数据删除"
              id="deletion"
            >
              <p>您可以随时删除 Hawkeye 存储的所有本地数据：</p>
              <ul>
                <li><strong>macOS</strong>：删除 <code>~/Library/Application Support/Hawkeye</code></li>
                <li><strong>Windows</strong>：删除 <code>%APPDATA%\Hawkeye</code></li>
                <li><strong>Linux</strong>：删除 <code>~/.config/hawkeye</code></li>
              </ul>
              <p>卸载应用程序将自动删除所有相关数据。</p>
            </Section>

            <Section
              icon={Shield}
              title="5. 第三方服务"
              id="third-party"
            >
              <h4>5.1 VS Code 扩展</h4>
              <p>Hawkeye VS Code 扩展遵循 VS Code 的扩展权限模型，仅访问必要的 API。</p>

              <h4>5.2 Chrome 扩展</h4>
              <p>Hawkeye Chrome 扩展：</p>
              <ul>
                <li>仅在您主动调用时读取当前页面内容</li>
                <li>不收集浏览历史</li>
                <li>不追踪您的在线活动</li>
              </ul>

              <h4>5.3 GitHub（更新检查）</h4>
              <p>检查应用更新时，我们会访问 GitHub API。这是标准的公开 API 调用，不涉及任何个人数据。</p>
            </Section>

            <Section
              icon={Mail}
              title="6. 联系我们"
              id="contact"
            >
              <p>如果您对本隐私政策有任何疑问，请通过以下方式联系我们：</p>
              <ul>
                <li>GitHub Issues：<a href="https://github.com/tensorboy/hawkeye/issues" target="_blank" rel="noopener noreferrer">提交问题</a></li>
                <li>Email：privacy@hawkeye.dev</li>
              </ul>
            </Section>

            <Section
              icon={Shield}
              title="7. 政策更新"
              id="updates"
            >
              <p>我们可能会不时更新本隐私政策。更新后的政策将在本页面发布，并更新"最后更新"日期。</p>
              <p>重大变更时，我们会在应用内或通过 GitHub 发布通知。</p>
            </Section>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Hawkeye. 基于 MIT 许可证开源。
            </p>
            <div className="mt-4 flex justify-center gap-6">
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">
                服务条款
              </Link>
              <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
                返回首页
              </Link>
            </div>
          </div>
        </motion.div>
      </article>
    </main>
  )
}

function Section({
  icon: Icon,
  title,
  id,
  children
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  id: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-gray-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">{title}</h2>
      </div>
      <div className="pl-13 text-gray-600 leading-relaxed">
        {children}
      </div>
    </section>
  )
}
