'use client'

import { motion } from 'framer-motion'
import { Github, Download } from 'lucide-react'

interface CTASectionProps {
  prefersReducedMotion: boolean
}

export function CTASection({ prefersReducedMotion }: CTASectionProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[var(--hawk-bg-primary)] to-slate-900 relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 hawk-noise" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--hawk-accent)] rounded-full blur-[200px] opacity-10" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="cta-heading" className="hawk-display-lg text-white mb-6">
            The Future is Prompt-Free
          </h2>
          <p className="hawk-body-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Open source, local-first, 100% private. Your AI coworker that just works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              href="https://github.com/tensorboy/hawkeye"
              className="hawk-btn-accent flex items-center justify-center gap-3"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
            </motion.a>
            <motion.a
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              href="https://github.com/tensorboy/hawkeye/releases"
              className="hawk-btn-ghost !border-slate-700 !text-slate-300 hover:!bg-slate-800 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
