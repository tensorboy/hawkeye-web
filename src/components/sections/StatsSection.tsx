'use client'

import { motion } from 'framer-motion'
import { Zap, Lock, Layers, LucideIcon } from 'lucide-react'

interface Stat {
  value: string
  label: string
  icon: LucideIcon
}

interface StatsSectionProps {
  prefersReducedMotion: boolean
}

const stats: Stat[] = [
  { value: '10x', label: '效率提升', icon: Zap },
  { value: '100%', label: '本地运行', icon: Lock },
  { value: '3', label: '平台支持', icon: Layers },
]

export function StatsSection({ prefersReducedMotion }: StatsSectionProps) {
  return (
    <section className="py-16 md:py-20 border-y border-[var(--hawk-border)] bg-[var(--hawk-bg-secondary)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-[var(--hawk-accent)]/10">
                <stat.icon className="w-6 h-6 text-[var(--hawk-accent)]" />
              </div>
              <div className="hawk-display-md text-[var(--hawk-text-primary)] mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-[var(--hawk-text-secondary)]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
