'use client'

import { useState, useRef, useEffect } from 'react'
import { Globe, Check } from 'lucide-react'
import Link from 'next/link'
import { locales, localeNames, localeFlags, getLocalePath, type Locale } from '@/lib/i18n'

interface LanguageSelectorProps {
  currentLocale: Locale
  className?: string
}

export function LanguageSelector({ currentLocale, className = '' }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="min-h-[44px] px-3 flex items-center gap-2 text-sm font-medium text-[var(--hawk-text-secondary)] hover:text-[var(--hawk-text-primary)] transition-colors rounded-lg hover:bg-[var(--hawk-bg-secondary)]"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{localeFlags[currentLocale]} {localeNames[currentLocale]}</span>
        <span className="sm:hidden">{localeFlags[currentLocale]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-[var(--hawk-surface)] border border-[var(--hawk-border)] rounded-xl shadow-lg overflow-hidden z-50 min-w-[160px]">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={getLocalePath(locale)}
              onClick={() => setIsOpen(false)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                locale === currentLocale
                  ? 'bg-[var(--hawk-accent)] text-[#0f172a] font-medium'
                  : 'text-[var(--hawk-text-secondary)] hover:bg-[var(--hawk-bg-secondary)] hover:text-[var(--hawk-text-primary)]'
              }`}
            >
              <span>{localeFlags[locale]}</span>
              <span className="flex-1">{localeNames[locale]}</span>
              {locale === currentLocale && <Check className="w-4 h-4" />}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// Simple mobile version without dropdown
export function LanguageSelectorMobile({ currentLocale }: LanguageSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 py-2">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getLocalePath(locale)}
          className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
            locale === currentLocale
              ? 'bg-[var(--hawk-accent)] text-[#0f172a] font-medium'
              : 'text-[var(--hawk-text-secondary)] hover:bg-[var(--hawk-bg-secondary)] hover:text-[var(--hawk-text-primary)]'
          }`}
        >
          <span>{localeFlags[locale]}</span>
          <span>{localeNames[locale]}</span>
        </Link>
      ))}
    </div>
  )
}
