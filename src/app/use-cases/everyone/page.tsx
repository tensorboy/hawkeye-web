import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hawkeye for Everyone - Prompt-Free AI Assistant for Non-Coders | No Coding Required',
  description: 'The AI assistant that works without typing prompts. Perfect for writers, students, researchers, and professionals. Hawkeye understands what you are doing and helps automatically. Free, privacy-first, no technical skills needed.',
  keywords: [
    // Primary keywords
    'prompt-free AI assistant',
    'AI for non-coders',
    'AI without coding',
    'AI for everyone',
    'easy AI assistant',
    // User segments
    'AI for writers',
    'AI for students',
    'AI for researchers',
    'AI for professionals',
    'AI for office workers',
    // Feature keywords
    'no prompt AI',
    'automatic AI assistant',
    'screen-aware AI',
    'ambient AI assistant',
    'AI that watches screen',
    // Comparison keywords
    'Claude Cowork for non-coders',
    'ChatGPT alternative for non-techies',
    'easy ChatGPT alternative',
    // Chinese keywords
    '无需编程的 AI 助手',
    '非程序员 AI 工具',
    '人人可用的 AI',
    '无提示词 AI',
    '简单 AI 助手',
    '办公 AI 助手',
    '写作 AI 助手',
    '学习 AI 助手',
    // Long-tail keywords
    'best AI for non-technical users 2026',
    'AI assistant without learning prompts',
    'AI that helps without asking',
  ],
  openGraph: {
    title: 'Hawkeye for Everyone - Prompt-Free AI for Non-Coders',
    description: 'AI assistant that works without typing prompts. Perfect for writers, students, and professionals.',
    url: `${siteConfig.url}/use-cases/everyone`,
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hawkeye for Everyone',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye for Everyone - Prompt-Free AI for Non-Coders',
    description: 'AI assistant that works without typing prompts. No coding required.',
    images: [siteConfig.twitterImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/use-cases/everyone`,
  },
}

const userTypes = [
  {
    icon: '✍️',
    title: 'Writers & Content Creators',
    description: 'Hawkeye watches as you write and offers suggestions for better phrasing, grammar improvements, and relevant research without interrupting your flow.',
    benefits: [
      'Real-time writing suggestions',
      'Automatic fact-checking prompts',
      'Style and tone guidance',
      'Research links when you need them',
    ],
  },
  {
    icon: '📚',
    title: 'Students & Researchers',
    description: 'Reading papers or studying? Hawkeye understands the content and proactively offers explanations, summaries, and related materials.',
    benefits: [
      'Instant explanations of complex concepts',
      'Automatic citation suggestions',
      'Study material summaries',
      'Related topic recommendations',
    ],
  },
  {
    icon: '💼',
    title: 'Office Professionals',
    description: 'Emails, documents, spreadsheets - Hawkeye sees what you are working on and helps with drafting, analyzing, and organizing.',
    benefits: [
      'Email drafting assistance',
      'Document summarization',
      'Meeting notes organization',
      'Data insights from spreadsheets',
    ],
  },
  {
    icon: '🎨',
    title: 'Designers & Creatives',
    description: 'Browsing for inspiration? Hawkeye tracks design references, extracts color palettes, and helps organize your creative research.',
    benefits: [
      'Automatic inspiration collection',
      'Color and typography extraction',
      'Design trend insights',
      'Asset organization help',
    ],
  },
]

const painPoints = [
  {
    problem: 'Do not know what to ask AI',
    solution: 'Hawkeye observes your work and suggests help proactively',
  },
  {
    problem: 'Writing prompts takes too long',
    solution: 'Zero prompts needed - Hawkeye understands your context automatically',
  },
  {
    problem: 'Switching between apps is distracting',
    solution: 'Hawkeye works alongside any app without requiring focus switching',
  },
  {
    problem: 'AI does not understand my situation',
    solution: 'Hawkeye sees your screen and knows exactly what you are working on',
  },
  {
    problem: 'Worried about privacy with cloud AI',
    solution: '100% local processing option - your data never leaves your device',
  },
]

export default function EveryonePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <span className="text-green-400 text-sm font-medium">For Everyone</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
              No Coding Required
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI That Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Works</span>
            <br />No Prompts, No Skills Needed
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Forget about learning how to &ldquo;talk to AI.&rdquo; Hawkeye watches your screen and understands
            what you need. It is like having a helpful colleague who is always paying attention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/tensorboy/hawkeye/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold text-lg transition-all"
            >
              Download Free
            </a>
            <Link
              href="/blog/what-is-prompt-free-ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-lg transition-all"
            >
              What is Prompt-Free AI?
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Why Traditional AI is Hard for Most People
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            ChatGPT, Claude, and other AI tools require you to be good at writing prompts.
            But most people are not prompt engineers.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-400">&#10005;</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-2">{item.problem}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4 pt-4 border-t border-white/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400">&#10003;</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Simple */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            How Hawkeye Works
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Three simple steps to smarter work
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <span className="text-4xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Install and Forget</h3>
              <p className="text-gray-400">
                Download Hawkeye, open it once, and it runs quietly in the background.
                No setup, no configuration needed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <span className="text-4xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Work Naturally</h3>
              <p className="text-gray-400">
                Just do your normal work - writing, reading, researching.
                Hawkeye silently observes and understands your context.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <span className="text-4xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Get Smart Help</h3>
              <p className="text-gray-400">
                When Hawkeye detects you might need assistance, it proactively
                shows helpful suggestions in a sidebar. No prompts required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Types */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Perfect for Every Type of Work
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {userTypes.map((user, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{user.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{user.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{user.description}</p>
                <ul className="space-y-2">
                  {user.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <span className="text-green-400">&#10003;</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison with ChatGPT */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Hawkeye vs ChatGPT
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Why prompt-free is better for everyday use
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4">ChatGPT / Claude</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  <span>You must type detailed prompts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  <span>Opens in separate browser tab</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  <span>Does not see what you are working on</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  <span>You need to copy-paste context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  <span>Data goes to cloud servers</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Hawkeye</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">&#10003;</span>
                  <span>Zero prompts needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">&#10003;</span>
                  <span>Lives alongside your apps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">&#10003;</span>
                  <span>Sees your screen automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">&#10003;</span>
                  <span>Context is always current</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">&#10003;</span>
                  <span>100% local processing option</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">🔒</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Your Privacy is Protected
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Hawkeye can run 100% locally on your computer. Your screen content, documents,
            and personal information never leave your device. It is completely open source
            so you can verify this yourself.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl mb-2">💻</div>
              <h3 className="text-white font-medium">100% Local Processing</h3>
              <p className="text-sm text-gray-400">Nothing leaves your computer</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl mb-2">🔓</div>
              <h3 className="text-white font-medium">Open Source</h3>
              <p className="text-sm text-gray-400">Verify the code yourself</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl mb-2">🚫</div>
              <h3 className="text-white font-medium">No Account Required</h3>
              <p className="text-sm text-gray-400">No signup, no tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Try the Easiest AI Assistant Ever
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            No prompts to learn. No commands to memorize. Just install and let Hawkeye help.
            Free and works on Windows, Mac, and Linux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/tensorboy/hawkeye/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold text-lg transition-all"
            >
              Download Hawkeye Free
            </a>
            <Link
              href="/use-cases"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-lg transition-all"
            >
              See All Use Cases
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
