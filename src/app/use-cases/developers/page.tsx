import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hawkeye for Developers - Prompt-Free AI Coding Assistant | Cursor Alternative',
  description: 'The first prompt-free AI for developers. Hawkeye watches your screen and understands your code without typing prompts. Free Cursor alternative that works with any IDE. Open source, local-first, cross-platform.',
  keywords: [
    // Primary keywords
    'prompt-free AI for developers',
    'AI coding assistant',
    'Cursor alternative',
    'free Cursor alternative',
    'Cursor alternative open source',
    'AI pair programmer',
    // IDE/Editor keywords
    'AI for VS Code',
    'AI for any IDE',
    'AI code assistant',
    'AI programming assistant',
    // Feature keywords
    'screen-aware AI coding',
    'context-aware code assistant',
    'AI error debugging',
    'AI code suggestions',
    'AI git assistant',
    // Chinese keywords
    '开发者 AI 助手',
    'AI 编程助手',
    'Cursor 替代品',
    '免费 Cursor 替代',
    '无提示词编程 AI',
    // Long-tail keywords
    'best AI coding assistant 2026',
    'free AI for programming',
    'AI that understands code without prompts',
    'local AI coding assistant',
  ],
  openGraph: {
    title: 'Hawkeye for Developers - Prompt-Free AI Coding Assistant',
    description: 'The first prompt-free AI for developers. No typing prompts, just code. Free, open source Cursor alternative.',
    url: `${siteConfig.url}/use-cases/developers`,
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hawkeye for Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye for Developers - Prompt-Free AI Coding Assistant',
    description: 'The first prompt-free AI for developers. No typing prompts, just code.',
    images: [siteConfig.twitterImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/use-cases/developers`,
  },
}

const features = [
  {
    icon: '👁️',
    title: 'Watches Your Code',
    description: 'Hawkeye observes your screen and understands what you are coding without requiring any prompts. Just code naturally.',
  },
  {
    icon: '🐛',
    title: 'Instant Error Detection',
    description: 'See an error? Hawkeye automatically analyzes it and suggests fixes based on your codebase context.',
  },
  {
    icon: '📖',
    title: 'Auto Documentation',
    description: 'Hawkeye proactively provides relevant documentation and examples when you use new APIs or libraries.',
  },
  {
    icon: '🔧',
    title: 'Git Assistance',
    description: 'Automatic commit message suggestions, merge conflict help, and branch management insights.',
  },
  {
    icon: '🌐',
    title: 'Any IDE, Any Language',
    description: 'Works with VS Code, JetBrains, Vim, Emacs - any IDE. Supports all programming languages.',
  },
  {
    icon: '🔒',
    title: '100% Local & Private',
    description: 'Your code never leaves your machine. Complete privacy for proprietary codebases.',
  },
]

const comparisons = [
  {
    feature: 'Prompt-Free',
    hawkeye: true,
    cursor: false,
    copilot: false,
  },
  {
    feature: 'Works with Any IDE',
    hawkeye: true,
    cursor: false,
    copilot: false,
  },
  {
    feature: 'Free Forever',
    hawkeye: true,
    cursor: false,
    copilot: false,
  },
  {
    feature: 'Open Source',
    hawkeye: true,
    cursor: false,
    copilot: false,
  },
  {
    feature: '100% Local Option',
    hawkeye: true,
    cursor: false,
    copilot: false,
  },
  {
    feature: 'Cross-Platform',
    hawkeye: true,
    cursor: true,
    copilot: true,
  },
]

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-sm font-medium">For Developers</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
              Prompt-Free
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The First <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Prompt-Free</span> AI
            <br />for Developers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stop typing prompts. Hawkeye watches your screen and understands your code automatically.
            Free Cursor alternative that works with any IDE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/tensorboy/hawkeye/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Download Free
            </a>
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-lg transition-all"
            >
              Compare with Cursor
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            How Prompt-Free Coding Works
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Unlike Cursor or Copilot that require you to type prompts or accept inline suggestions,
            Hawkeye understands your context automatically.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-3xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Just Code</h3>
              <p className="text-gray-400">
                Open your favorite IDE and start coding. Hawkeye runs quietly in the background.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-3xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hawkeye Watches</h3>
              <p className="text-gray-400">
                It observes your screen, understanding your code, errors, and what you are trying to do.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-3xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Get Help When Needed</h3>
              <p className="text-gray-400">
                When you need assistance, Hawkeye proactively shows relevant suggestions in an ambient sidebar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Built for Developer Productivity
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Hawkeye vs Cursor vs GitHub Copilot
          </h2>
          <p className="text-gray-400 text-center mb-12">
            See why developers are switching to prompt-free AI
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      Hawkeye
                    </span>
                  </th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Cursor</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Copilot</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {row.hawkeye ? (
                        <span className="text-green-400">&#10003;</span>
                      ) : (
                        <span className="text-gray-600">&#10005;</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.cursor ? (
                        <span className="text-green-400">&#10003;</span>
                      ) : (
                        <span className="text-gray-600">&#10005;</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.copilot ? (
                        <span className="text-green-400">&#10003;</span>
                      ) : (
                        <span className="text-gray-600">&#10005;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/compare"
              className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2"
            >
              See full comparison &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Developer Workflows Hawkeye Enhances
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Debugging Errors</h3>
              <p className="text-gray-400 mb-4">
                When an error appears in your terminal or browser console, Hawkeye immediately:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">&#10003;</span>
                  Identifies the root cause from your code context
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">&#10003;</span>
                  Suggests specific fixes with code snippets
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">&#10003;</span>
                  Links to relevant StackOverflow/docs if needed
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Learning New APIs</h3>
              <p className="text-gray-400 mb-4">
                Working with an unfamiliar library? Hawkeye automatically:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">&#10003;</span>
                  Shows documentation for functions you use
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">&#10003;</span>
                  Provides usage examples from popular repos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">&#10003;</span>
                  Warns about common pitfalls and gotchas
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Code Reviews</h3>
              <p className="text-gray-400 mb-4">
                Reviewing a PR or reading unfamiliar code? Hawkeye helps:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">&#10003;</span>
                  Explains complex code blocks in plain English
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">&#10003;</span>
                  Highlights potential bugs or issues
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">&#10003;</span>
                  Suggests improvements and best practices
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Git Workflows</h3>
              <p className="text-gray-400 mb-4">
                Dealing with Git? Hawkeye streamlines your workflow:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">&#10003;</span>
                  Auto-generates commit messages from your changes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">&#10003;</span>
                  Helps resolve merge conflicts intelligently
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">&#10003;</span>
                  Explains diff changes for PR descriptions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Try Prompt-Free Coding?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands of developers who have eliminated prompt typing from their workflow.
            Free, open source, and works with any IDE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/tensorboy/hawkeye/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg transition-all"
            >
              Download Hawkeye Free
            </a>
            <a
              href="https://github.com/tensorboy/hawkeye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-lg transition-all"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
