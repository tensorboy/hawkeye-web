'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Menu, X, Github } from 'lucide-react'
import { GitHubStars } from './GitHubStars'

interface NavItem {
  href: string
  label: string
  external?: boolean
}

interface NavigationProps {
  locale: 'zh' | 'en'
  navItems: NavItem[]
  showGitHubStars?: boolean
  showLanguageSwitcher?: boolean
  downloadLabel?: string
  downloadHref?: string
}

export function Navigation({
  locale,
  navItems,
  showGitHubStars = true,
  showLanguageSwitcher = true,
  downloadLabel = locale === 'zh' ? '下载' : 'Download',
  downloadHref = 'https://github.com/tensorboy/hawkeye/releases',
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const prefersReducedMotion = mounted ? shouldReduceMotion : true

  useEffect(() => {
    setMounted(true)
  }, [])

  const homeHref = locale === 'zh' ? '/' : '/en'
  const switchLocaleHref = locale === 'zh' ? '/en' : '/'
  const switchLocaleLabel = locale === 'zh' ? 'EN' : '中文'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-gray-900/80 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={homeHref} className="flex items-center gap-2 min-h-[44px]">
            <Image src="/logo.png" alt="Hawkeye" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Hawkeye</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors py-3 px-2"
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {showLanguageSwitcher && (
              <Link href={switchLocaleHref} className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 min-h-[44px] flex items-center px-2">
                {switchLocaleLabel}
              </Link>
            )}
            {showGitHubStars && (
              <GitHubStars repo="tensorboy/hawkeye" />
            )}
            <Link
              href={downloadHref}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 min-h-[44px] flex items-center"
            >
              {downloadLabel}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-4"
        >
          <div className="container mx-auto px-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-3 min-h-[44px] flex items-center"
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {item.label}
              </Link>
            ))}
            {showLanguageSwitcher && (
              <Link
                href={switchLocaleHref}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-3 min-h-[44px] flex items-center"
              >
                {switchLocaleLabel}
              </Link>
            )}
            <hr className="border-gray-100 dark:border-gray-800" />
            <Link
              href={downloadHref}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 bg-gray-900 text-white rounded-lg font-medium text-center min-h-[44px] flex items-center justify-center dark:bg-white dark:text-gray-900"
            >
              {downloadLabel}
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

// Pre-configured navigation items for each locale
export const zhNavItems: NavItem[] = [
  { href: '#features', label: '功能' },
  { href: '#usecases', label: '使用场景' },
  { href: '#platforms', label: '多平台' },
  { href: 'https://github.com/tensorboy/hawkeye', label: '文档', external: true },
]

export const enNavItems: NavItem[] = [
  { href: '#features', label: 'Features' },
  { href: '#usecases', label: 'Use Cases' },
  { href: '#platforms', label: 'Platforms' },
  { href: 'https://github.com/tensorboy/hawkeye', label: 'Docs', external: true },
]
