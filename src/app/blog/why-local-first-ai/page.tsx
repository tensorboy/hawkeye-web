import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '为什么本地优先的 AI 助手是未来？| Hawkeye 博客',
  description: '深入探讨云端 AI 和本地 AI 的优劣对比，解析 Hawkeye 选择本地优先架构的技术理念，以及如何在保护隐私的同时获得强大的 AI 能力。',
  keywords: [
    '本地AI',
    'local first AI',
    'AI隐私保护',
    '离线AI助手',
    'Ollama',
    '本地大语言模型',
    '数据隐私',
    'AI安全',
    '云端AI vs 本地AI',
    'Hawkeye',
  ],
  authors: [{ name: 'Hawkeye Team' }],
  openGraph: {
    title: '为什么本地优先的 AI 助手是未来？',
    description: '深入探讨云端 AI 和本地 AI 的优劣对比，解析本地优先架构的技术理念',
    url: `${siteConfig.url}/blog/why-local-first-ai`,
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Hawkeye Team'],
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: '为什么本地优先的 AI 助手是未来？',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '为什么本地优先的 AI 助手是未来？',
    description: '深入探讨云端 AI 和本地 AI 的优劣对比',
    images: [siteConfig.twitterImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/why-local-first-ai`,
  },
}

// 文章的 JSON-LD 结构化数据
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '为什么本地优先的 AI 助手是未来？',
  description: '深入探讨云端 AI 和本地 AI 的优劣对比，解析 Hawkeye 选择本地优先架构的技术理念。',
  image: siteConfig.ogImage,
  datePublished: '2025-01-15T00:00:00.000Z',
  dateModified: '2025-01-15T00:00:00.000Z',
  author: {
    '@type': 'Organization',
    name: 'Hawkeye Team',
    url: siteConfig.url,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Hawkeye',
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/blog/why-local-first-ai`,
  },
}

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Article Header */}
        <header className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm">
                ← 返回博客
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">
                技术理念
              </span>
              <span className="text-xs text-gray-500">2025-01-15</span>
              <span className="text-xs text-gray-500">8 分钟阅读</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              为什么本地优先的 AI 助手是未来？
            </h1>
            <p className="text-lg text-gray-300">
              探讨云端 AI 和本地 AI 的优劣，以及为什么 Hawkeye 选择本地优先架构来保护用户隐私。
            </p>
          </div>
        </header>

        {/* Article Content */}
        <article className="py-12 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-purple">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-8">

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">AI 助手的两种架构</h2>
                <p className="text-gray-300 leading-relaxed">
                  在当今的 AI 工具市场，我们可以看到两种截然不同的架构选择：<strong className="text-purple-400">云端优先</strong>和<strong className="text-purple-400">本地优先</strong>。
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  云端优先的代表如 ChatGPT、Claude Web、GitHub Copilot 等，它们将用户数据发送到远程服务器进行处理，依赖强大的云端算力来提供服务。
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  本地优先的代表则是 Hawkeye 这类工具，核心理念是：<em className="text-white">你的数据永远不离开你的设备</em>。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">云端 AI 的隐私风险</h2>
                <p className="text-gray-300 leading-relaxed">
                  当你使用云端 AI 服务时，以下数据可能被上传到服务器：
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>你输入的每一段文字和代码</li>
                  <li>你上传的文件内容</li>
                  <li>你的对话历史和使用习惯</li>
                  <li>部分服务甚至会收集屏幕截图</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  这些数据可能被用于模型训练、被第三方访问，或者在数据泄露事件中暴露。对于处理敏感商业信息、个人隐私或机密代码的用户来说，这是一个不可忽视的风险。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Hawkeye 的本地优先架构</h2>
                <p className="text-gray-300 leading-relaxed">
                  Hawkeye 采用本地优先架构，这意味着：
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">🔒 数据不离开设备</h3>
                    <p className="text-sm text-gray-400">
                      屏幕截图、剪贴板内容、文件变动——所有感知数据都在本地处理，永远不会上传到任何服务器。
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">🤖 可选的本地模型</h3>
                    <p className="text-sm text-gray-400">
                      支持 Ollama 等本地 LLM，实现 100% 离线运行，彻底消除数据外泄风险。
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">⚡ 更快的响应</h3>
                    <p className="text-sm text-gray-400">
                      本地处理意味着零网络延迟，感知和响应更加即时。
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">💰 更低的成本</h3>
                    <p className="text-sm text-gray-400">
                      减少对云端 API 的依赖，使用本地模型可以大幅降低使用成本。
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">混合架构：两全其美</h2>
                <p className="text-gray-300 leading-relaxed">
                  Hawkeye 采用灵活的混合架构，让用户自主选择：
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li><strong className="text-white">完全离线模式</strong>：使用 Ollama 等本地模型，适合处理高度敏感的数据</li>
                  <li><strong className="text-white">云端增强模式</strong>：使用 Claude 或 GPT-4 等强大的云端模型，获得更好的 AI 能力</li>
                  <li><strong className="text-white">智能切换</strong>：根据任务敏感度自动选择合适的模型</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  这种设计让用户在隐私保护和 AI 能力之间找到最佳平衡点。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">为什么这是未来？</h2>
                <p className="text-gray-300 leading-relaxed">
                  我们相信本地优先的 AI 助手代表了未来的发展方向，原因如下：
                </p>
                <ol className="list-decimal list-inside text-gray-300 space-y-3 mt-4">
                  <li>
                    <strong className="text-white">隐私法规日益严格</strong>：GDPR、CCPA 等法规对数据处理提出更高要求
                  </li>
                  <li>
                    <strong className="text-white">本地硬件性能提升</strong>：Apple Silicon、高端 GPU 让本地运行大模型成为可能
                  </li>
                  <li>
                    <strong className="text-white">开源模型快速发展</strong>：Llama、Mistral 等开源模型能力持续提升
                  </li>
                  <li>
                    <strong className="text-white">用户隐私意识增强</strong>：越来越多人关注数据主权和隐私保护
                  </li>
                  <li>
                    <strong className="text-white">企业安全需求</strong>：企业客户需要本地部署方案来满足合规要求
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">开始体验</h2>
                <p className="text-gray-300 leading-relaxed">
                  如果你也认同本地优先的理念，欢迎尝试 Hawkeye。它是完全免费开源的，你可以：
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a
                    href="https://github.com/tensorboy/hawkeye/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium transition-all text-center"
                  >
                    下载 Hawkeye
                  </a>
                  <Link
                    href="/features"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all text-center"
                  >
                    了解更多功能
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-12 px-4 bg-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-6">相关文章</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/setup-ollama-with-hawkeye"
                className="block bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all"
              >
                <h3 className="text-white font-medium mb-2">Hawkeye + Ollama 完全离线运行指南</h3>
                <p className="text-sm text-gray-400">手把手教你配置本地大语言模型</p>
              </Link>
              <Link
                href="/blog/ai-privacy-concerns-2025"
                className="block bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all"
              >
                <h3 className="text-white font-medium mb-2">2025 年 AI 隐私问题全解析</h3>
                <p className="text-sm text-gray-400">你的数据去哪了？</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
