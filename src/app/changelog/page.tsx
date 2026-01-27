'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Sparkles,
  Bug,
  Zap,
  Shield,
  Globe,
  Monitor,
  Code2,
  Chrome,
  Github,
  Tag,
  Calendar
} from 'lucide-react'

interface ChangelogEntry {
  version: string
  date: string
  type: 'major' | 'minor' | 'patch'
  title: string
  description: string
  changes: {
    type: 'feature' | 'improvement' | 'fix' | 'security'
    text: string
  }[]
}

export default function ChangelogPage() {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const prefersReducedMotion = mounted ? shouldReduceMotion : true

  useEffect(() => {
    setMounted(true)
  }, [])

  const changelog: ChangelogEntry[] = [
    {
      version: '0.2.0',
      date: '2025-01-20',
      type: 'minor',
      title: '多平台支持 & 屏幕感知增强',
      description: '新增 VS Code 扩展和 Chrome 扩展支持，大幅增强屏幕感知能力。',
      changes: [
        { type: 'feature', text: '新增 VS Code 扩展，支持在编辑器中使用 Hawkeye' },
        { type: 'feature', text: '新增 Chrome 扩展，浏览网页时自动感知内容' },
        { type: 'feature', text: '屏幕感知支持更多应用窗口类型' },
        { type: 'improvement', text: '优化剪贴板监控性能，降低 CPU 占用' },
        { type: 'improvement', text: '改进任务建议算法，提高建议准确度' },
        { type: 'fix', text: '修复在某些 macOS 版本上的权限提示问题' },
        { type: 'fix', text: '修复文件监控偶发的崩溃问题' },
      ],
    },
    {
      version: '0.1.1',
      date: '2025-01-10',
      type: 'patch',
      title: 'Bug 修复 & 性能优化',
      description: '修复首个版本中发现的问题，优化整体性能。',
      changes: [
        { type: 'fix', text: '修复 Ollama 连接超时问题' },
        { type: 'fix', text: '修复中文路径文件监控失败的问题' },
        { type: 'improvement', text: '优化启动速度，减少 50% 启动时间' },
        { type: 'improvement', text: '优化内存占用，降低 30% 内存使用' },
        { type: 'security', text: '更新依赖库，修复潜在安全漏洞' },
      ],
    },
    {
      version: '0.1.0',
      date: '2025-01-01',
      type: 'major',
      title: '首个公开版本发布',
      description: 'Hawkeye 正式开源发布！本地优先的 AI 助手，赋能 10x 效率。',
      changes: [
        { type: 'feature', text: '屏幕感知：实时分析当前屏幕内容' },
        { type: 'feature', text: '剪贴板监控：智能理解复制内容意图' },
        { type: 'feature', text: '文件监控：追踪项目文件变化' },
        { type: 'feature', text: '任务建议：AI 驱动的智能建议系统' },
        { type: 'feature', text: '本地 LLM 支持：集成 Ollama 本地模型' },
        { type: 'feature', text: '云端 AI 支持：可选 Claude API 集成' },
        { type: 'feature', text: 'macOS 原生应用，支持 Apple Silicon' },
      ],
    },
  ]

  const getVersionBadgeColor = (type: 'major' | 'minor' | 'patch') => {
    switch (type) {
      case 'major':
        return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'minor':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'patch':
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getChangeIcon = (type: 'feature' | 'improvement' | 'fix' | 'security') => {
    switch (type) {
      case 'feature':
        return <Sparkles className="w-4 h-4 text-purple-500" />
      case 'improvement':
        return <Zap className="w-4 h-4 text-blue-500" />
      case 'fix':
        return <Bug className="w-4 h-4 text-orange-500" />
      case 'security':
        return <Shield className="w-4 h-4 text-green-500" />
    }
  }

  const getChangeLabel = (type: 'feature' | 'improvement' | 'fix' | 'security') => {
    switch (type) {
      case 'feature':
        return '新功能'
      case 'improvement':
        return '改进'
      case 'fix':
        return '修复'
      case 'security':
        return '安全'
    }
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
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <Tag className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              更新日志
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Changelog - 了解 Hawkeye 的最新更新和改进
            </p>
          </motion.div>
        </div>
      </section>

      {/* Changelog List */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-12">
            {changelog.map((entry, index) => (
              <motion.article
                key={entry.version}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline line */}
                {index < changelog.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-gray-200 -mb-12" />
                )}

                {/* Version header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Tag className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900">
                        v{entry.version}
                      </h2>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getVersionBadgeColor(entry.type)}`}>
                        {entry.type === 'major' ? '重大更新' : entry.type === 'minor' ? '功能更新' : '补丁'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={entry.date}>{entry.date}</time>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="ml-16">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {entry.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {entry.description}
                  </p>

                  {/* Changes list */}
                  <ul className="space-y-3">
                    {entry.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0">
                          {getChangeIcon(change.type)}
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600 mr-2">
                            {getChangeLabel(change.type)}
                          </span>
                          <span className="text-gray-700">{change.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>

          {/* More on GitHub */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gray-50 rounded-2xl text-center"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              查看完整更新历史
            </h3>
            <p className="text-gray-600 mb-4">
              访问 GitHub Releases 页面获取所有版本的详细更新说明
            </p>
            <a
              href="https://github.com/tensorboy/hawkeye/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub Releases
            </a>
          </motion.div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            订阅更新通知
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            在 GitHub 上 Watch 项目，第一时间获取新版本发布通知
          </p>
          <a
            href="https://github.com/tensorboy/hawkeye/subscription"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <Github className="w-5 h-5" />
            Watch on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Anureka Inc.. MIT License.
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
