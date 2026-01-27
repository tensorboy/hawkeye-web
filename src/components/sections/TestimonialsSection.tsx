'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
}

interface TestimonialsSectionProps {
  prefersReducedMotion: boolean
}

const testimonials: Testimonial[] = [
  {
    quote: "终于有一个真正尊重隐私的 AI 助手了。所有数据都在本地处理，我可以放心地在工作中使用它。",
    author: "张明",
    role: "产品经理",
    avatar: "Z"
  },
  {
    quote: "Hawkeye 彻底改变了我的工作流程。它能自动识别我在做什么，并给出精准的建议，效率提升太明显了。",
    author: "李华",
    role: "自由职业者",
    avatar: "L"
  },
  {
    quote: "作为一个开源项目，Hawkeye 的质量让我惊讶。社区活跃，更新频繁，功能越来越强大。",
    author: "王强",
    role: "创业者",
    avatar: "W"
  }
]

export function TestimonialsSection({ prefersReducedMotion }: TestimonialsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-[var(--hawk-bg-primary)]" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[var(--hawk-accent)] bg-[var(--hawk-accent)]/10 rounded-full uppercase tracking-wider">
            用户评价
          </span>
          <h2 id="testimonials-heading" className="hawk-display-lg text-[var(--hawk-text-primary)]">
            用户们怎么说
          </h2>
        </motion.header>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
              className="hawk-card"
            >
              <div className="flex gap-1 mb-4" aria-label={`5星好评`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[var(--hawk-accent)] fill-[var(--hawk-accent)]" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-[var(--hawk-text-secondary)] mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--hawk-accent)] to-orange-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[var(--hawk-text-primary)]">{testimonial.author}</div>
                  <div className="text-sm text-[var(--hawk-text-tertiary)]">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
