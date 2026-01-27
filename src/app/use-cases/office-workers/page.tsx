import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hawkeye for Office Workers - Prompt-Free AI for Productivity | 办公 AI 助手',
  description: 'The first prompt-free AI for office workers. Hawkeye watches your screen and helps with emails, documents, data analysis, and presentations without typing prompts. Free, private, and runs locally.',
  keywords: [
    // Primary keywords
    'prompt-free AI for office',
    'AI office assistant',
    'AI productivity tool',
    'AI for knowledge workers',
    'screen-aware AI assistant',
    // Task keywords
    'AI email writing',
    'AI document assistant',
    'AI data analysis',
    'AI presentation help',
    'AI meeting assistant',
    // Feature keywords
    'local AI assistant',
    'private AI for work',
    'offline AI assistant',
    'AI that understands context',
    // Chinese keywords
    '办公 AI 助手',
    'AI 办公效率工具',
    '无提示词 AI',
    '本地 AI 助手',
    '职场 AI 助手',
    '白领 AI 助手',
    // Long-tail keywords
    'best AI for office workers 2026',
    'free AI office assistant',
    'AI that helps with work without prompts',
    'private AI for corporate use',
  ],
  openGraph: {
    title: 'Hawkeye for Office Workers - Prompt-Free AI Productivity Assistant',
    description: 'The first prompt-free AI for office work. No typing prompts, just work naturally. Free and 100% private.',
    url: `${siteConfig.url}/use-cases/office-workers`,
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hawkeye for Office Workers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye for Office Workers - Prompt-Free AI Productivity',
    description: 'The first prompt-free AI for office work. No typing prompts, just work naturally.',
    images: [siteConfig.twitterImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/use-cases/office-workers`,
  },
}

const features = [
  {
    icon: '📧',
    title: 'Smart Email Assistance',
    description: 'Hawkeye watches as you read emails and suggests replies, summaries, and follow-up actions without you asking.',
  },
  {
    icon: '📊',
    title: 'Data Analysis Help',
    description: 'Working with Excel or Google Sheets? Hawkeye explains formulas, suggests charts, and helps interpret data automatically.',
  },
  {
    icon: '📝',
    title: 'Document Enhancement',
    description: 'Whether writing reports or proposals, get real-time suggestions for clarity, tone, and structure.',
  },
  {
    icon: '🎯',
    title: 'Meeting Preparation',
    description: 'Hawkeye notices when you view calendar invites and proactively provides relevant context and talking points.',
  },
  {
    icon: '🔍',
    title: 'Research Companion',
    description: 'Browsing for research? Hawkeye summarizes articles, extracts key points, and suggests related resources.',
  },
  {
    icon: '🔒',
    title: 'Corporate-Safe Privacy',
    description: 'Runs 100% locally. Your confidential documents, emails, and data never leave your machine.',
  },
]

const workflows = [
  {
    title: 'Email Management',
    description: 'Hawkeye transforms how you handle emails:',
    items: [
      'Auto-generates professional reply drafts',
      'Summarizes long email threads in seconds',
      'Identifies action items and deadlines',
      'Suggests follow-up reminders',
    ],
  },
  {
    title: 'Document Writing',
    description: 'Create better documents faster:',
    items: [
      'Real-time grammar and style suggestions',
      'Auto-formatting for professional appearance',
      'Content suggestions based on context',
      'Translation assistance for global teams',
    ],
  },
  {
    title: 'Data & Spreadsheets',
    description: 'Make sense of your data:',
    items: [
      'Explains complex formulas in plain language',
      'Suggests appropriate charts and visualizations',
      'Identifies patterns and anomalies',
      'Helps clean and organize messy data',
    ],
  },
  {
    title: 'Presentations',
    description: 'Create compelling presentations:',
    items: [
      'Suggests slide structure and flow',
      'Helps write concise bullet points',
      'Recommends visuals and layouts',
      'Prepares speaker notes automatically',
    ],
  },
]

export default function OfficeWorkersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-sm font-medium">For Office Workers</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-300">
              100% Private
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Understands</span> Your Work
            <br />Without Prompts
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stop typing prompts. Hawkeye watches your screen and provides intelligent assistance for emails, documents,
            data analysis, and presentations automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/tensorboy/hawkeye/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold text-lg transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Download Free
            </a>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-lg transition-all"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            The Problem with Traditional AI Assistants
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            ChatGPT, Claude, and other AI tools require you to stop working, switch context, and type detailed prompts.
            That breaks your flow.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4">❌ Traditional AI Workflow</h3>
              <ol className="space-y-3 text-gray-400">
                <li>1. You are writing an email</li>
                <li>2. You need help with tone</li>
                <li>3. Open ChatGPT in a new tab</li>
                <li>4. Copy your email text</li>
                <li>5. Type a prompt explaining what you want</li>
                <li>6. Wait for response</li>
                <li>7. Copy result back to email</li>
                <li className="text-red-400 font-medium">Lost focus, wasted time</li>
              </ol>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">✓ Hawkeye Workflow</h3>
              <ol className="space-y-3 text-gray-400">
                <li>1. You are writing an email</li>
                <li>2. Hawkeye sees your email</li>
                <li>3. Tone suggestions appear in sidebar</li>
                <li>4. One click to apply</li>
                <li className="text-green-400 font-medium">Stay in flow, no prompts needed!</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Intelligent Assistance for Every Task
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

      {/* Workflows */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How Hawkeye Enhances Your Daily Work
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workflows.map((workflow, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{workflow.title}</h3>
                <p className="text-gray-400 mb-4">{workflow.description}</p>
                <ul className="space-y-2">
                  {workflow.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <span className="text-teal-400 mt-1">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <span className="text-green-400 text-sm font-medium">🔒 Enterprise-Ready Privacy</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Safe for Confidential Work
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Unlike cloud-based AI assistants, Hawkeye runs 100% locally on your machine.
            Your emails, documents, and data never leave your computer.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">No Data Uploads</h3>
              <p className="text-gray-400 text-sm">
                Your screen content is processed locally. Nothing is sent to external servers.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Offline Capable</h3>
              <p className="text-gray-400 text-sm">
                Works without internet using local AI models. Perfect for air-gapped environments.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Open Source</h3>
              <p className="text-gray-400 text-sm">
                Fully auditable code. Your IT team can verify exactly what the software does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-teal-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Prompt-Free Productivity?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands of office workers who have transformed their daily workflow.
            Free, private, and works with all your favorite apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/tensorboy/hawkeye/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold text-lg transition-all"
            >
              Download Hawkeye Free
            </a>
            <Link
              href="/use-cases"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-lg transition-all"
            >
              Explore All Use Cases
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
