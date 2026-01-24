'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--hawk-bg-primary)] flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 hawk-grid-bg opacity-30" />
      <div className="absolute inset-0 hawk-noise" />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-3 mb-8">
            <Image src="/logo.png" alt="Hawkeye" width={48} height={48} className="w-12 h-12" />
            <span className="text-2xl font-display font-bold text-[var(--hawk-text-primary)]">Hawkeye</span>
          </Link>

          {/* 404 Display */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-display font-bold text-[var(--hawk-accent)] mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--hawk-text-primary)] mb-4">
              页面未找到
            </h2>
            <p className="text-[var(--hawk-text-secondary)] max-w-md mx-auto">
              抱歉，您访问的页面不存在或已被移动。请检查 URL 或返回首页。
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="hawk-btn-accent flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              返回首页
            </Link>
            <button
              onClick={() => window.history.back()}
              className="hawk-btn-ghost flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              返回上一页
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-[var(--hawk-border)]">
            <p className="text-sm text-[var(--hawk-text-tertiary)] mb-4">或访问以下页面：</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/features" className="text-[var(--hawk-accent)] hover:underline">
                功能介绍
              </Link>
              <Link href="/changelog" className="text-[var(--hawk-accent)] hover:underline">
                更新日志
              </Link>
              <Link href="/faq" className="text-[var(--hawk-accent)] hover:underline">
                常见问题
              </Link>
              <a
                href="https://github.com/tensorboy/hawkeye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--hawk-accent)] hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
