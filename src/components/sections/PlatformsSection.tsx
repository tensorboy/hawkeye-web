'use client'

import { motion } from 'framer-motion'
import { LucideIcon, Monitor, Code2, Chrome } from 'lucide-react'

interface Platform {
  icon: LucideIcon
  name: string
  desc: string
  gradient: string
}

interface PlatformsSectionProps {
  prefersReducedMotion: boolean
}

const platforms: Platform[] = [
  { icon: Monitor, name: '桌面应用', desc: 'macOS · Windows · Linux', gradient: 'from-slate-600 to-slate-800' },
  { icon: Code2, name: 'VS Code', desc: '编辑器深度集成', gradient: 'from-blue-600 to-indigo-700' },
  { icon: Chrome, name: 'Chrome', desc: '浏览器扩展', gradient: 'from-amber-500 to-orange-600' },
]

export function PlatformsSection({ prefersReducedMotion }: PlatformsSectionProps) {
  return (
    <section id="platforms" className="py-20 md:py-32 relative overflow-hidden" aria-labelledby="platforms-heading">
      <div className="absolute inset-0 hawk-grid-bg opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[var(--hawk-accent)] bg-[var(--hawk-accent)]/10 rounded-full uppercase tracking-wider">
            Platforms
          </span>
          <h2 id="platforms-heading" className="hawk-display-lg text-[var(--hawk-text-primary)] mb-4">
            多平台联动
          </h2>
          <p className="hawk-body-lg text-[var(--hawk-text-secondary)] max-w-2xl mx-auto">
            桌面应用、VS Code 扩展、Chrome 扩展三端实时同步
          </p>
        </motion.header>

        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto" role="list" aria-label="支持平台列表">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              role="listitem"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
              whileHover={prefersReducedMotion ? {} : { y: -8 }}
              className="hawk-card text-center !p-6 md:!p-8"
            >
              <div
                className={`w-14 h-14 md:w-20 md:h-20 mx-auto rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center mb-4 md:mb-6`}
              >
                <platform.icon className="w-7 h-7 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="hawk-heading text-[var(--hawk-text-primary)] mb-1 md:mb-2">{platform.name}</h3>
              <p className="text-sm text-[var(--hawk-text-secondary)]">{platform.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
