import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hawkeye for Students - Free Prompt-Free AI Study Assistant | 学生 AI 助手',
  description: 'The first prompt-free AI for students. Hawkeye watches your screen and helps with homework, research papers, exam prep, and learning new concepts. 100% free, private, works offline.',
  keywords: [
    // Primary keywords
    'free AI for students',
    'AI study assistant',
    'prompt-free AI learning',
    'AI homework help',
    'AI research assistant',
    // Task keywords
    'AI essay writing help',
    'AI math tutor',
    'AI exam preparation',
    'AI citation helper',
    'AI note taking',
    // Feature keywords
    'free AI tool for school',
    'private AI for students',
    'offline AI study tool',
    'AI that explains concepts',
    // Chinese keywords
    '学生 AI 助手',
    '免费学习 AI',
    'AI 作业帮助',
    '考试复习 AI',
    '论文写作 AI',
    '学习辅助工具',
    // Long-tail keywords
    'best free AI for students 2026',
    'AI study companion',
    'AI that helps with homework without prompts',
    'private AI for academic work',
  ],
  openGraph: {
    title: 'Hawkeye for Students - Free Prompt-Free AI Study Assistant',
    description: 'The first prompt-free AI for students. No typing prompts, just study naturally. 100% free and private.',
    url: `${siteConfig.url}/use-cases/students`,
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hawkeye for Students',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawkeye for Students - Free AI Study Assistant',
    description: 'The first prompt-free AI for students. No typing prompts, just study naturally.',
    images: [siteConfig.twitterImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/use-cases/students`,
  },
}

const features = [
  {
    icon: '📚',
    title: 'Instant Concept Explanation',
    description: 'Reading a difficult textbook? Hawkeye sees what you are looking at and explains concepts in simple terms automatically.',
  },
  {
    icon: '📝',
    title: 'Essay Writing Support',
    description: 'Get real-time suggestions for structure, grammar, and citations as you write papers and essays.',
  },
  {
    icon: '🔢',
    title: 'Math Problem Helper',
    description: 'Stuck on a math problem? Hawkeye shows step-by-step solutions and explains the underlying concepts.',
  },
  {
    icon: '🎯',
    title: 'Exam Preparation',
    description: 'Reviewing notes? Hawkeye automatically generates practice questions and flashcards from your study materials.',
  },
  {
    icon: '📖',
    title: 'Research Assistant',
    description: 'Browsing academic papers? Get instant summaries, key points extraction, and citation formatting.',
  },
  {
    icon: '🆓',
    title: '100% Free Forever',
    description: 'Completely free and open source. No subscriptions, no hidden costs. Perfect for student budgets.',
  },
]

const subjects = [
  {
    name: 'STEM',
    icon: '🔬',
    examples: ['Explains complex formulas', 'Visualizes scientific concepts', 'Helps debug code', 'Checks calculations'],
  },
  {
    name: 'Languages',
    icon: '🌍',
    examples: ['Grammar corrections', 'Vocabulary suggestions', 'Translation help', 'Writing style tips'],
  },
  {
    name: 'Humanities',
    icon: '📜',
    examples: ['Essay structure', 'Citation formatting', 'Historical context', 'Literary analysis'],
  },
  {
    name: 'Business',
    icon: '📊',
    examples: ['Case study analysis', 'Financial calculations', 'Presentation polish', 'Report writing'],
  },
]

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <span className="text-indigo-400 text-sm font-medium">For Students</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-300">
              100% Free
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Prompt-Free</span> Study Companion
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stop typing prompts to ChatGPT. Hawkeye watches your screen and helps you study, write papers,
            solve problems, and prepare for exams automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/tensorboy/hawkeye/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold text-lg transition-all"
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

      {/* Why Different */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Why Students Love Prompt-Free AI
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Traditional AI tools break your concentration. You have to stop studying,
            type detailed prompts, and context-switch. Hawkeye is different.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-3xl">
                📖
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Just Study</h3>
              <p className="text-gray-400">
                Open your textbook, notes, or research paper. Study as you normally would.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-3xl">
                👁️
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hawkeye Watches</h3>
              <p className="text-gray-400">
                It observes your screen, understanding what you are reading, writing, or solving.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-3xl">
                💡
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Get Instant Help</h3>
              <p className="text-gray-400">
                Explanations, suggestions, and answers appear in a sidebar without asking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Everything You Need for Academic Success
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

      {/* Subjects */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Works for Every Subject
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Whether you are studying science, writing essays, or learning a new language,
            Hawkeye adapts to help you succeed.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="text-4xl mb-3">{subject.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{subject.name}</h3>
                <ul className="space-y-2">
                  {subject.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-indigo-400 mt-0.5">&#10003;</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Integrity */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">⚖️</span>
              A Note on Academic Integrity
            </h2>
            <p className="text-gray-300 mb-4">
              Hawkeye is designed to be a <strong className="text-white">learning assistant</strong>, not a cheating tool.
              It helps you understand concepts, check your work, and learn more effectively.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span><strong className="text-white">Good:</strong> Use Hawkeye to understand a concept you are struggling with</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span><strong className="text-white">Good:</strong> Get feedback on your draft before submitting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span><strong className="text-white">Good:</strong> Generate practice problems to test yourself</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span><strong className="text-white">Not OK:</strong> Submit AI-generated content as your own work</span>
              </li>
            </ul>
            <p className="text-gray-400 mt-4 text-sm">
              Always follow your school&apos;s policies on AI tool usage. When in doubt, ask your instructor.
            </p>
          </div>
        </div>
      </section>

      {/* Budget Friendly */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <span className="text-green-400 text-sm font-medium">💰 Student Budget Friendly</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Pay for AI When Hawkeye is Free?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            ChatGPT Plus costs $20/month. That is $240/year. Hawkeye is 100% free, forever.
            Use that money for textbooks, coffee, or ramen.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-red-400 line-through mb-2">$20/mo</h3>
              <p className="text-gray-500">ChatGPT Plus</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-red-400 line-through mb-2">$10/mo</h3>
              <p className="text-gray-500">Claude Pro</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-2">$0</h3>
              <p className="text-green-400">Hawkeye Forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Study Sessions?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands of students who study smarter with Hawkeye.
            Free, private, and works offline for library study sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/tensorboy/hawkeye/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold text-lg transition-all"
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
