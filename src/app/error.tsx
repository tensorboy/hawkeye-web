'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to console in development
    console.error('Application error:', error)
  }, [error])

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

          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-[var(--hawk-text-primary)] mb-4">
              出错了
            </h1>
            <p className="text-[var(--hawk-text-secondary)] max-w-md mx-auto mb-2">
              抱歉，页面加载时发生了错误。请尝试刷新页面或返回首页。
            </p>
            {error.digest && (
              <p className="text-xs text-[var(--hawk-text-muted)] font-mono">
                Error ID: {error.digest}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="hawk-btn-accent flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              重试
            </button>
            <Link
              href="/"
              className="hawk-btn-ghost flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              返回首页
            </Link>
          </div>

          {/* Help Text */}
          <div className="mt-12 pt-8 border-t border-[var(--hawk-border)]">
            <p className="text-sm text-[var(--hawk-text-tertiary)]">
              如果问题持续存在，请{' '}
              <a
                href="https://github.com/tensorboy/hawkeye/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--hawk-accent)] hover:underline"
              >
                提交问题报告
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
