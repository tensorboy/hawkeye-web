'use client'

import { motion } from 'framer-motion'
import { Shield, Check } from 'lucide-react'

interface PrivacySectionProps {
  prefersReducedMotion: boolean
}

const privacyFeatures = [
  '所有数据本地处理，永不上传',
  '支持 Ollama 本地 LLM',
  '可选云端 AI（自带 API Key）',
  '100% 开源透明可审计'
]

export function PrivacySection({ prefersReducedMotion }: PrivacySectionProps) {
  return (
    <section className="py-20 md:py-32 bg-[var(--hawk-bg-secondary)]" aria-labelledby="privacy-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hawk-border-gradient overflow-hidden"
          >
            <div className="bg-[var(--hawk-surface)] p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h2 id="privacy-heading" className="hawk-display-md text-[var(--hawk-text-primary)] mb-6">
                    隐私优先，安全设计
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4" role="list">
                    {privacyFeatures.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 min-h-[44px]" role="listitem">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                        </div>
                        <span className="text-[var(--hawk-text-secondary)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
