'use client'

import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useState, useRef, useEffect } from 'react'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
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

  const themes = [
    { value: 'light' as const, icon: Sun, label: 'Light', labelZh: '浅色' },
    { value: 'dark' as const, icon: Moon, label: 'Dark', labelZh: '深色' },
    { value: 'system' as const, icon: Monitor, label: 'System', labelZh: '跟随系统' },
  ]

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[var(--hawk-text-secondary)] hover:text-[var(--hawk-text-primary)] transition-colors rounded-lg hover:bg-[var(--hawk-bg-secondary)]"
        aria-label="Toggle theme"
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-[var(--hawk-surface)] border border-[var(--hawk-border)] rounded-xl shadow-lg overflow-hidden z-50 min-w-[140px]">
          {themes.map(({ value, icon: Icon, label }) => (
            <button
              key={value}
              onClick={() => {
                setTheme(value)
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                theme === value
                  ? 'bg-[var(--hawk-accent)] text-[#0f172a] font-medium'
                  : 'text-[var(--hawk-text-secondary)] hover:bg-[var(--hawk-bg-secondary)] hover:text-[var(--hawk-text-primary)]'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// Simple toggle button without dropdown (just toggles between light/dark)
export function ThemeToggleSimple() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[var(--hawk-text-secondary)] hover:text-[var(--hawk-text-primary)] transition-colors rounded-lg hover:bg-[var(--hawk-bg-secondary)]"
      aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}
