'use client'

import { motion } from 'framer-motion'
import { LucideIcon, Scan, Brain, Shield, ArrowRight } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  titleEn: string
  description: string
  gradient: string
  glow: string
}

interface FeaturesSectionProps {
  prefersReducedMotion: boolean
}

const features: Feature[] = [
  {
    icon: Scan,
    title: 'Sees Everything',
    titleEn: '多模态感知',
    description: '屏幕、剪贴板、文件变化，全方位感知你的工作上下文',
    gradient: 'from-amber-500 to-orange-600',
    glow: 'rgba(245, 158, 11, 0.3)'
  },
  {
    icon: Brain,
    title: 'Thinks Ahead',
    titleEn: '主动推理',
    description: '无需输入提示词，自动理解意图，主动建议下一步行动',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59, 130, 246, 0.3)'
  },
  {
    icon: Shield,
    title: 'Stays Private',
    titleEn: '隐私安全',
    description: '100% 本地处理，数据永不离开设备，完全离线可用',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16, 185, 129, 0.3)'
  }
]

export function FeaturesSection({ prefersReducedMotion }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden" aria-labelledby="features-heading">
      <div className="absolute inset-0 hawk-grid-bg opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[var(--hawk-accent)] bg-[var(--hawk-accent)]/10 rounded-full uppercase tracking-wider">
            Why Prompt-Free
          </span>
          <h2 id="features-heading" className="hawk-display-lg text-[var(--hawk-text-primary)] mb-4">
            No Prompts. Just Results.
          </h2>
          <p className="hawk-body-lg text-[var(--hawk-text-secondary)] max-w-2xl mx-auto">
            Your genius AI teammate who never needs instructions
          </p>
        </motion.header>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto" role="list">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              role="listitem"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prefersReducedMotion ? 0 : index * 0.15 }}
              whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.02 }}
              className="hawk-card group cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon with gradient */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                style={{ boxShadow: `0 8px 30px ${feature.glow}` }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="hawk-heading text-[var(--hawk-text-primary)] mb-1 group-hover:text-[var(--hawk-accent)] transition-colors">{feature.title}</h3>
              <p className="text-sm text-[var(--hawk-text-tertiary)] mb-4 font-medium">{feature.titleEn}</p>
              <p className="hawk-body text-[var(--hawk-text-secondary)]">{feature.description}</p>

              {/* Interactive indicator */}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--hawk-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>了解更多</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
