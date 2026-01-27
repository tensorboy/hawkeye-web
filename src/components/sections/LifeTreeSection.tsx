'use client'

import { motion } from 'framer-motion'
import { TreePine } from 'lucide-react'
import { DemoTree } from './life-tree/DemoTree'

interface LifeTreeSectionProps {
  prefersReducedMotion: boolean
  locale?: string
}

const COPY: Record<string, {
  badge: string
  heading: string
  tagline: string
  subheading: string
  cards: { title: string; description: string; icon: string }[]
}> = {
  en: {
    badge: 'Life Tree',
    heading: 'AI Supercharges Every Goal',
    tagline: 'Your Career. Your Health. Your Learning. Your Finances. All leveled up by AI.',
    subheading: 'You just do your thing. Hawkeye sees what you\'re working on, researches better approaches in the background, and serves you upgrades — so every goal gets 10x better, effortlessly.',
    cards: [
      {
        title: 'You Do, AI Researches',
        description: 'While you work, AI silently analyzes your patterns and researches smarter approaches — no manual input needed.',
        icon: '🔍',
      },
      {
        title: 'Better Way Found',
        description: 'AI discovers a faster workflow, a healthier habit, or a smarter strategy — and suggests it to you at the right moment.',
        icon: '💡',
      },
      {
        title: 'Instant Upgrade',
        description: 'One tap and you\'re using the better approach. Your career, health, learning, and finances — all leveled up automatically.',
        icon: '🚀',
      },
    ],
  },
  zh: {
    badge: '生命树',
    heading: 'AI 全方位加速你的人生',
    tagline: '事业 · 健康 · 学习 · 财务 — 全面升级，由 AI 驱动。',
    subheading: '你只管做你的事。Hawkeye 看到你正在做什么，后台悄悄调研更好的方案，发现更优解后立刻建议给你——每个目标都自动变得更好。',
    cards: [
      {
        title: '你做事，AI 调研',
        description: '你在工作时，AI 在后台默默分析你的模式，调研更聪明的方法——无需任何手动输入。',
        icon: '🔍',
      },
      {
        title: '发现更优方案',
        description: 'AI 发现了更快的工作流、更健康的习惯、更聪明的策略——并在恰当的时机推荐给你。',
        icon: '💡',
      },
      {
        title: '一键升级',
        description: '轻轻一点，你就用上了更好的方案。事业、健康、学习、财务——全部自动升级。',
        icon: '🚀',
      },
    ],
  },
  ja: {
    badge: 'ライフツリー',
    heading: 'AIがあなたの人生を加速する',
    tagline: 'キャリア・健康・学習・資産形成 — すべてAIがレベルアップ。',
    subheading: 'あなたは普段通りに作業するだけ。Hawkeyeがバックグラウンドでより良い方法を調査し、最適な提案をお届け — すべての目標が自然と10倍良くなります。',
    cards: [
      {
        title: 'あなたが動く、AIが調べる',
        description: '作業中、AIがバックグラウンドでパターンを分析し、より賢い方法を調査。手動入力は一切不要。',
        icon: '🔍',
      },
      {
        title: 'より良い方法を発見',
        description: 'AIがより速いワークフロー、より健康的な習慣、よりスマートな戦略を発見し、最適なタイミングで提案。',
        icon: '💡',
      },
      {
        title: 'ワンタップでアップグレード',
        description: 'ワンタップでより良い方法に切り替え。キャリア・健康・学習・資産形成がすべて自動レベルアップ。',
        icon: '🚀',
      },
    ],
  },
  ko: {
    badge: '라이프 트리',
    heading: 'AI가 당신의 모든 목표를 강화',
    tagline: '커리어 · 건강 · 학습 · 재정 — 모두 AI가 레벨업합니다.',
    subheading: '당신은 하던 일을 하세요. Hawkeye가 백그라운드에서 더 나은 방법을 조사하고 발견하면 바로 제안합니다 — 모든 목표가 자동으로 업그레이드됩니다.',
    cards: [
      {
        title: '당신이 일하면, AI가 조사',
        description: '일하는 동안 AI가 백그라운드에서 패턴을 분석하고 더 스마트한 방법을 조사합니다. 수동 입력 불필요.',
        icon: '🔍',
      },
      {
        title: '더 나은 방법 발견',
        description: 'AI가 더 빠른 워크플로우, 더 건강한 습관, 더 스마트한 전략을 발견하고 적절한 시점에 추천합니다.',
        icon: '💡',
      },
      {
        title: '원탭 업그레이드',
        description: '한 번의 탭으로 더 나은 방법을 적용. 커리어, 건강, 학습, 재정 — 모두 자동 업그레이드.',
        icon: '🚀',
      },
    ],
  },
  es: {
    badge: 'Árbol de Vida',
    heading: 'La IA potencia cada meta tuya',
    tagline: 'Tu carrera. Tu salud. Tu aprendizaje. Tus finanzas. Todo mejorado por IA.',
    subheading: 'Tú solo haz lo tuyo. Hawkeye investiga mejores enfoques en segundo plano y te sugiere mejoras — cada meta se vuelve 10x mejor, sin esfuerzo.',
    cards: [
      {
        title: 'Tú actúas, la IA investiga',
        description: 'Mientras trabajas, la IA analiza tus patrones e investiga métodos más inteligentes en segundo plano. Sin entrada manual.',
        icon: '🔍',
      },
      {
        title: 'Mejor camino encontrado',
        description: 'La IA descubre flujos más rápidos, hábitos más saludables o estrategias más inteligentes — y te los sugiere en el momento justo.',
        icon: '💡',
      },
      {
        title: 'Mejora instantánea',
        description: 'Un toque y ya usas el mejor enfoque. Carrera, salud, aprendizaje y finanzas — todo se mejora automáticamente.',
        icon: '🚀',
      },
    ],
  },
  fr: {
    badge: 'Arbre de Vie',
    heading: "L'IA booste chacun de vos objectifs",
    tagline: 'Carrière. Santé. Apprentissage. Finances. Tout amélioré par l\'IA.',
    subheading: "Faites ce que vous faites. Hawkeye recherche de meilleures approches en arrière-plan et vous propose des améliorations — chaque objectif s'améliore 10x, sans effort.",
    cards: [
      {
        title: 'Vous agissez, l\'IA recherche',
        description: "Pendant que vous travaillez, l'IA analyse vos habitudes et recherche des méthodes plus intelligentes en arrière-plan. Aucune saisie manuelle.",
        icon: '🔍',
      },
      {
        title: 'Meilleure voie trouvée',
        description: "L'IA découvre des flux plus rapides, des habitudes plus saines ou des stratégies plus intelligentes — et vous les suggère au bon moment.",
        icon: '💡',
      },
      {
        title: 'Amélioration instantanée',
        description: "Un clic et vous utilisez la meilleure approche. Carrière, santé, apprentissage, finances — tout s'améliore automatiquement.",
        icon: '🚀',
      },
    ],
  },
  de: {
    badge: 'Lebensbaum',
    heading: 'KI verstärkt jedes deiner Ziele',
    tagline: 'Karriere. Gesundheit. Lernen. Finanzen. Alles verbessert durch KI.',
    subheading: 'Mach einfach dein Ding. Hawkeye recherchiert im Hintergrund bessere Ansätze und schlägt dir Upgrades vor — jedes Ziel wird 10x besser, ganz ohne Aufwand.',
    cards: [
      {
        title: 'Du handelst, KI recherchiert',
        description: 'Während du arbeitest, analysiert KI deine Muster und recherchiert smartere Methoden im Hintergrund. Keine manuelle Eingabe nötig.',
        icon: '🔍',
      },
      {
        title: 'Besserer Weg gefunden',
        description: 'KI entdeckt schnellere Workflows, gesündere Gewohnheiten oder smartere Strategien — und schlägt sie dir im richtigen Moment vor.',
        icon: '💡',
      },
      {
        title: 'Sofort-Upgrade',
        description: 'Ein Tipp und du nutzt den besseren Ansatz. Karriere, Gesundheit, Lernen, Finanzen — alles wird automatisch verbessert.',
        icon: '🚀',
      },
    ],
  },
}

export function LifeTreeSection({ prefersReducedMotion, locale = 'en' }: LifeTreeSectionProps) {
  const copy = COPY[locale] ?? COPY.en

  return (
    <section id="lifetree" className="pt-20 pb-16 md:py-24 bg-gradient-to-b from-[var(--hawk-bg-secondary)] to-[var(--hawk-bg-primary)] relative overflow-hidden" aria-labelledby="lifetree-heading">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, var(--hawk-text-tertiary) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium mb-6">
            <TreePine className="w-4 h-4" />
            {copy.badge}
          </span>
          <h2 id="lifetree-heading" className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[var(--hawk-text-primary)] mb-3 md:mb-4">
            {copy.heading}
          </h2>
          <p className="text-base sm:text-xl md:text-2xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 dark:from-amber-300 dark:via-orange-400 dark:to-rose-400 bg-clip-text text-transparent px-2 sm:px-0">
            {copy.tagline}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[var(--hawk-text-secondary)] max-w-2xl mx-auto px-2 sm:px-0">
            {copy.subheading}
          </p>
        </motion.header>

        {/* Tree Visualization */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-8 md:mb-12"
        >
          <div className="bg-[var(--hawk-surface)] rounded-2xl border border-[var(--hawk-border)] p-3 sm:p-6 md:p-8 backdrop-blur-sm overflow-x-auto shadow-sm dark:shadow-none">
            <div className="min-w-[360px]">
              <DemoTree prefersReducedMotion={!!prefersReducedMotion} />
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {copy.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-[var(--hawk-surface)] rounded-xl p-6 border border-[var(--hawk-border)] shadow-sm dark:shadow-none"
            >
              <span className="text-2xl mb-3 block">{card.icon}</span>
              <h3 className="text-[var(--hawk-text-primary)] font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-[var(--hawk-text-secondary)] leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
