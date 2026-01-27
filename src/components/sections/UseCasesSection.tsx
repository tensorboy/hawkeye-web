'use client'

import { motion } from 'framer-motion'
import {
  LucideIcon,
  Cpu,
  FileText,
  Clipboard,
  FolderOpen,
  Mail,
  Globe,
  ChevronRight
} from 'lucide-react'

interface UseCase {
  icon: LucideIcon
  title: string
  description: string
  tag: string | null
}

interface UseCasesSectionProps {
  prefersReducedMotion: boolean
}

const useCases: UseCase[] = [
  {
    icon: Cpu,
    title: '问题诊断助手',
    description: '感知报错信息，智能建议解决方案',
    tag: 'Popular'
  },
  {
    icon: FileText,
    title: '文档智能整理',
    description: '自动按类型和日期整理下载文件',
    tag: 'Popular'
  },
  {
    icon: Clipboard,
    title: '剪贴板增强',
    description: '理解复制内容，建议下一步操作',
    tag: null
  },
  {
    icon: FolderOpen,
    title: '项目文件追踪',
    description: '监控变化，自动生成变更报告',
    tag: null
  },
  {
    icon: Mail,
    title: '邮件处理建议',
    description: '分析邮件，建议回复和待办事项',
    tag: null
  },
  {
    icon: Globe,
    title: '网页信息提取',
    description: '自动识别关键信息并建议保存',
    tag: null
  }
]

export function UseCasesSection({ prefersReducedMotion }: UseCasesSectionProps) {
  return (
    <section id="usecases" className="py-20 md:py-32 bg-[var(--hawk-bg-secondary)]" aria-labelledby="usecases-heading">
      <div className="container mx-auto px-4">
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[var(--hawk-accent)] bg-[var(--hawk-accent)]/10 rounded-full uppercase tracking-wider">
            Use Cases
          </span>
          <h2 id="usecases-heading" className="hawk-display-lg text-[var(--hawk-text-primary)] mb-4">
            真实场景，真实效果
          </h2>
          <p className="hawk-body-lg text-[var(--hawk-text-secondary)] max-w-2xl mx-auto">
            看看 Hawkeye 如何赋能你的日常工作
          </p>
        </motion.header>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--hawk-surface)] rounded-2xl border border-[var(--hawk-border)] overflow-hidden shadow-lg" role="list" aria-label="使用场景列表">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                role="listitem"
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: prefersReducedMotion ? 0 : index * 0.05 }}
                className={`
                  flex items-center gap-4 px-5 py-4 min-h-[72px]
                  hover:bg-[var(--hawk-bg-secondary)] cursor-pointer transition-colors group
                  ${index !== useCases.length - 1 ? 'border-b border-[var(--hawk-border)]' : ''}
                `}
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--hawk-bg-tertiary)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--hawk-accent)]/10 transition-colors">
                  <useCase.icon className="w-5 h-5 text-[var(--hawk-text-secondary)] group-hover:text-[var(--hawk-accent)] transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-base font-semibold text-[var(--hawk-text-primary)]">{useCase.title}</h3>
                    {useCase.tag && (
                      <span className="px-2 py-0.5 text-xs font-semibold bg-[var(--hawk-accent)]/10 text-[var(--hawk-accent)] rounded-full">
                        {useCase.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--hawk-text-secondary)]">{useCase.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[var(--hawk-text-muted)] group-hover:text-[var(--hawk-accent)] transition-colors flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
