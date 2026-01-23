'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertTriangle, Users, Code, Gavel, Mail } from 'lucide-react'

export default function TermsOfService() {
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
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">服务条款</h1>
            <p className="text-gray-500">Terms of Service</p>
            <p className="text-sm text-gray-400 mt-2">最后更新：{lastUpdated}</p>
          </div>

          {/* Summary Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
            <h2 className="text-lg font-semibold text-blue-800 mb-3">📋 简要说明</h2>
            <ul className="space-y-2 text-blue-700">
              <li>• <strong>免费开源</strong>：Hawkeye 基于 MIT 许可证，永久免费</li>
              <li>• <strong>按原样提供</strong>：不提供任何明示或暗示的保证</li>
              <li>• <strong>自担风险</strong>：使用本软件的风险由您自行承担</li>
              <li>• <strong>社区驱动</strong>：欢迎贡献代码和反馈问题</li>
            </ul>
          </div>

          {/* Sections */}
          <div className="prose prose-gray max-w-none">
            <Section
              icon={Scale}
              title="1. 接受条款"
              id="acceptance"
            >
              <p>
                通过下载、安装或使用 Hawkeye（以下简称"本软件"），您同意受本服务条款（以下简称"条款"）的约束。
                如果您不同意这些条款，请不要使用本软件。
              </p>
              <p>
                本软件是根据 <strong>MIT 许可证</strong> 发布的开源软件。使用本软件即表示您同时接受 MIT 许可证的条款。
              </p>
            </Section>

            <Section
              icon={Code}
              title="2. MIT 许可证"
              id="license"
            >
              <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                <p className="mb-4">MIT License</p>
                <p className="mb-4">Copyright (c) {new Date().getFullYear()} Hawkeye</p>
                <p className="mb-4">
                  Permission is hereby granted, free of charge, to any person obtaining a copy
                  of this software and associated documentation files (the &quot;Software&quot;), to deal
                  in the Software without restriction, including without limitation the rights
                  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                  copies of the Software, and to permit persons to whom the Software is
                  furnished to do so, subject to the following conditions:
                </p>
                <p className="mb-4">
                  The above copyright notice and this permission notice shall be included in all
                  copies or substantial portions of the Software.
                </p>
                <p>
                  THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                  SOFTWARE.
                </p>
              </div>
            </Section>

            <Section
              icon={Users}
              title="3. 使用权限"
              id="usage"
            >
              <h4>3.1 您可以</h4>
              <ul>
                <li>免费下载和使用本软件用于个人或商业目的</li>
                <li>复制、修改和分发本软件</li>
                <li>将本软件集成到您自己的项目中</li>
                <li>基于本软件创建衍生作品</li>
              </ul>

              <h4>3.2 您需要</h4>
              <ul>
                <li>在软件的副本中保留版权声明和许可声明</li>
                <li>遵守适用的法律法规</li>
                <li>对您自己的使用行为负责</li>
              </ul>

              <h4>3.3 您不得</h4>
              <ul>
                <li>将本软件用于任何非法目的</li>
                <li>以任何可能损害、禁用或过度负担本软件基础设施的方式使用本软件</li>
                <li>试图获取本软件任何用户的未授权访问权限</li>
                <li>删除或修改本软件中的任何版权或其他所有权声明</li>
              </ul>
            </Section>

            <Section
              icon={AlertTriangle}
              title="4. 免责声明"
              id="disclaimer"
            >
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 font-medium">⚠️ 重要提示</p>
              </div>

              <h4>4.1 按原样提供</h4>
              <p>
                本软件按"原样"提供，不提供任何形式的明示或暗示保证，包括但不限于：
              </p>
              <ul>
                <li>适销性保证</li>
                <li>特定用途适用性保证</li>
                <li>非侵权保证</li>
                <li>持续可用性或无错误运行保证</li>
              </ul>

              <h4>4.2 风险自担</h4>
              <p>您理解并同意：</p>
              <ul>
                <li>使用本软件的风险完全由您自行承担</li>
                <li>您对使用本软件产生的任何后果负全部责任</li>
                <li>我们不对任何直接、间接、附带、特殊或后果性损害负责</li>
              </ul>

              <h4>4.3 AI 生成内容</h4>
              <p>本软件可能使用 AI 技术生成建议和内容。您理解：</p>
              <ul>
                <li>AI 生成的内容可能不准确或不完整</li>
                <li>您应当独立验证 AI 生成的任何建议或信息</li>
                <li>我们不对 AI 生成内容的准确性、完整性或适用性负责</li>
              </ul>
            </Section>

            <Section
              icon={Gavel}
              title="5. 责任限制"
              id="liability"
            >
              <p>
                在法律允许的最大范围内，Hawkeye 的开发者和贡献者在任何情况下均不对以下事项承担责任：
              </p>
              <ul>
                <li>使用或无法使用本软件造成的任何损失</li>
                <li>数据丢失或损坏</li>
                <li>业务中断</li>
                <li>利润损失</li>
                <li>任何间接、附带、特殊或后果性损害</li>
              </ul>
              <p>
                即使我们已被告知此类损害的可能性，此限制仍然适用。
              </p>
            </Section>

            <Section
              icon={Code}
              title="6. 第三方服务"
              id="third-party"
            >
              <h4>6.1 AI 服务提供商</h4>
              <p>如果您选择使用云端 AI 服务，您需要：</p>
              <ul>
                <li>提供自己的 API 密钥</li>
                <li>遵守相应服务提供商的服务条款</li>
                <li>对使用这些服务产生的费用负责</li>
              </ul>

              <h4>6.2 开源依赖</h4>
              <p>
                本软件使用各种开源库和组件。这些组件受其各自许可证的约束。
                完整的依赖列表可在源代码仓库中找到。
              </p>
            </Section>

            <Section
              icon={Users}
              title="7. 社区贡献"
              id="contributions"
            >
              <p>如果您向本项目贡献代码或其他内容：</p>
              <ul>
                <li>您授予项目永久、全球、免版税的许可来使用您的贡献</li>
                <li>您声明您有权做出此类贡献</li>
                <li>您的贡献将按照项目的 MIT 许可证发布</li>
              </ul>
              <p>
                我们欢迎社区贡献！请查看我们的
                <a href="https://github.com/tensorboy/hawkeye/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                  贡献指南
                </a>。
              </p>
            </Section>

            <Section
              icon={FileText}
              title="8. 条款变更"
              id="changes"
            >
              <p>
                我们保留随时修改这些条款的权利。修改后的条款将在本页面发布，
                并更新"最后更新"日期。
              </p>
              <p>
                继续使用本软件即表示您接受修改后的条款。如果您不同意新条款，
                请停止使用本软件。
              </p>
            </Section>

            <Section
              icon={Gavel}
              title="9. 适用法律"
              id="governing-law"
            >
              <p>
                这些条款受中华人民共和国法律管辖并按其解释，不考虑法律冲突原则。
              </p>
              <p>
                因这些条款引起的或与之相关的任何争议应提交至有管辖权的人民法院解决。
              </p>
            </Section>

            <Section
              icon={Mail}
              title="10. 联系我们"
              id="contact"
            >
              <p>如果您对本服务条款有任何疑问，请通过以下方式联系我们：</p>
              <ul>
                <li>GitHub Issues：<a href="https://github.com/tensorboy/hawkeye/issues" target="_blank" rel="noopener noreferrer">提交问题</a></li>
                <li>Email：legal@hawkeye.dev</li>
              </ul>
            </Section>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Hawkeye. 基于 MIT 许可证开源。
            </p>
            <div className="mt-4 flex justify-center gap-6">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
                隐私政策
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
