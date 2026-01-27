'use client'

import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

// Static animation variants - defined outside component to prevent recreation on each render
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (prefersReducedMotion: boolean) => ({
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.15,
      delayChildren: prefersReducedMotion ? 0 : 0.2
    }
  })
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (prefersReducedMotion: boolean) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  })
}

// Viewport settings for consistent behavior
const viewportOnce = { once: true, amount: 0.2 } as const
import {
  Eye,
  Zap,
  Shield,
  Download,
  Github,
  Chrome,
  Monitor,
  Code2,
  ArrowRight,
  Check,
  Sparkles,
  Cpu,
  Globe,
  Lock,
  Star,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  FileText,
  Clipboard,
  FolderOpen,
  Mail,
  Twitter,
  ExternalLink,
  Home as HomeIcon,
  Layers,
  Play,
  Activity,
  Target,
  Scan,
  Brain,
  MousePointer2,
  Command
} from 'lucide-react'
import Link from 'next/link'
import { GitHubStars } from '@/components/GitHubStars'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageSelector, LanguageSelectorMobile } from '@/components/LanguageSelector'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mounted, setMounted] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const heroRef = useRef<HTMLDivElement>(null)

  const prefersReducedMotion = mounted ? shouldReduceMotion : true

  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'usecases', 'platforms']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            return
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: Scan,
      title: '多模态感知',
      subtitle: '全方位感知',
      description: '屏幕、剪贴板、文件变化，全方位感知你的工作上下文',
      gradient: 'from-amber-500 to-orange-600',
      glow: 'rgba(245, 158, 11, 0.3)'
    },
    {
      icon: Brain,
      title: '主动推理',
      subtitle: '智能预判',
      description: '无需输入提示词，自动理解意图，主动建议下一步行动',
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'rgba(59, 130, 246, 0.3)'
    },
    {
      icon: Shield,
      title: '隐私安全',
      subtitle: '数据保护',
      description: '100% 本地处理，数据永不离开设备，完全离线可用',
      gradient: 'from-emerald-500 to-teal-500',
      glow: 'rgba(16, 185, 129, 0.3)'
    }
  ]

  const useCases = [
    {
      icon: Cpu,
      title: '问题诊断助手',
      description: '感知报错信息，智能建议解决方案',
      tag: '热门'
    },
    {
      icon: FileText,
      title: '文档智能整理',
      description: '自动按类型和日期整理下载文件',
      tag: '热门'
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

  const stats = [
    { value: '10x', label: '效率提升', icon: Zap },
    { value: '100%', label: '本地运行', icon: Lock },
    { value: '3', label: '平台支持', icon: Layers },
  ]

  const platforms = [
    { icon: Monitor, name: '桌面应用', desc: 'macOS · Windows · Linux', gradient: 'from-slate-600 to-slate-800' },
    { icon: Code2, name: 'VS Code', desc: '编辑器深度集成', gradient: 'from-blue-600 to-indigo-700' },
    { icon: Chrome, name: 'Chrome', desc: '浏览器扩展', gradient: 'from-amber-500 to-orange-600' },
  ]

  // Memoized hover animation props to prevent recreation
  const hoverAnimation = useMemo(() =>
    prefersReducedMotion ? {} : { scale: 1.02, y: -2 }
  , [prefersReducedMotion])

  const tapAnimation = useMemo(() =>
    prefersReducedMotion ? {} : { scale: 0.98 }
  , [prefersReducedMotion])

  const cardHoverAnimation = useMemo(() =>
    prefersReducedMotion ? {} : { y: -8, scale: 1.02 }
  , [prefersReducedMotion])

  return (
    <main className="min-h-screen bg-[var(--hawk-bg-primary)] pb-[70px] md:pb-0 overflow-x-hidden">
      {/* Skip Link for Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--hawk-accent)] focus:text-slate-900 focus:rounded-lg focus:font-semibold"
      >
        跳转到主要内容
      </a>

      {/* Navigation - Glassmorphism */}
      <nav aria-label="主导航" className="fixed top-0 left-0 right-0 z-50 hawk-glass safe-area-pt">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/zh" className="flex items-center gap-3 min-h-[44px] min-w-[44px] group">
              <div className="relative">
                <Image src="/logo.png" alt="Hawkeye" width={36} height={36} className="w-9 h-9 transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-[var(--hawk-accent)] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
              </div>
              <span className="text-xl font-display font-bold text-[var(--hawk-text-primary)]">Hawkeye</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {[
                { href: '#features', label: '功能' },
                { href: '#usecases', label: '场景' },
                { href: '#platforms', label: '平台' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 min-h-[44px] flex items-center text-[var(--hawk-text-secondary)] hover:text-[var(--hawk-text-primary)] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <GitHubStars repo="tensorboy/hawkeye" />
              <a
                href="https://github.com/tensorboy/hawkeye"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[var(--hawk-text-secondary)] hover:text-[var(--hawk-text-primary)] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <LanguageSelector currentLocale="zh" />
              <ThemeToggle />
              <Link
                href="https://github.com/tensorboy/hawkeye/releases"
                className="hawk-btn-accent flex items-center gap-2 !py-3 !px-5"
              >
                <Download className="w-4 h-4" />
                下载
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-[var(--hawk-text-primary)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[var(--hawk-surface)] border-t border-[var(--hawk-border)]"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {[
                { href: '#features', label: '功能' },
                { href: '#usecases', label: '场景' },
                { href: '#platforms', label: '平台' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center min-h-[44px] px-3 text-[var(--hawk-text-primary)] font-medium rounded-lg hover:bg-[var(--hawk-bg-secondary)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3">
                <span className="text-[var(--hawk-text-tertiary)] text-xs uppercase tracking-wider mb-2 block">语言</span>
                <LanguageSelectorMobile currentLocale="zh" />
              </div>
              <div className="flex items-center min-h-[44px] px-3">
                <span className="text-[var(--hawk-text-secondary)] text-sm mr-2">主题</span>
                <ThemeToggle />
              </div>
              <div className="pt-3 border-t border-[var(--hawk-border)] mt-3">
                <Link
                  href="https://github.com/tensorboy/hawkeye/releases"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hawk-btn-accent w-full flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  立即下载
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Mobile Bottom Tab Bar */}
      <nav aria-label="移动端底部导航" className="fixed bottom-0 left-0 right-0 md:hidden bg-[var(--hawk-surface)]/95 backdrop-blur-xl border-t border-[var(--hawk-border)] safe-area-pb z-50">
        <div className="flex justify-around items-center h-[49px]">
          {[
            { href: '#', id: 'home', icon: HomeIcon, label: '首页' },
            { href: '#features', id: 'features', icon: Sparkles, label: '功能' },
            { href: '#usecases', id: 'usecases', icon: Target, label: '场景' },
            { href: '#platforms', id: 'platforms', icon: Monitor, label: '平台' },
            { href: 'https://github.com/tensorboy/hawkeye', id: 'github', icon: Github, label: 'GitHub', external: true },
          ].map((item) => {
            const isActive = activeSection === item.id
            const IconComponent = item.icon
            return (
              <Link
                key={item.id}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`
                  flex flex-col items-center justify-center
                  min-w-[64px] min-h-[44px] transition-colors
                  ${isActive ? 'text-[var(--hawk-accent)]' : 'text-[var(--hawk-text-tertiary)]'}
                `}
              >
                <IconComponent className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] mt-0.5 font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Hero Section - Dramatic & Atmospheric */}
      <section id="main-content" ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" aria-labelledby="hero-heading">
        {/* Background Effects */}
        <div className="absolute inset-0 hawk-grid-bg" />
        <div className="absolute inset-0 hawk-noise" />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[var(--hawk-accent)] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[var(--hawk-blue)] rounded-full blur-[120px] opacity-10" />

        <motion.div
          style={prefersReducedMotion ? {} : { opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-4 relative z-10"
        >
          <motion.div
            variants={containerVariants}
            custom={prefersReducedMotion}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} custom={prefersReducedMotion} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--hawk-accent)]/10 border border-[var(--hawk-accent)]/20 text-[var(--hawk-accent)] text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                灵魂驱动 · 无需提示词 · 无需键鼠 · 开源 · 本地优先
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 id="hero-heading" variants={itemVariants} custom={prefersReducedMotion} className="mb-6">
              <span className="hawk-display-xl text-[var(--hawk-text-primary)] block">
                你的 AI 工作伙伴
              </span>
              <span className="hawk-display-xl hawk-gradient-text block mt-2">
                无需开口，它已懂你
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants} custom={prefersReducedMotion}
              className="hawk-body-lg text-[var(--hawk-text-secondary)] mb-10 max-w-2xl mx-auto"
            >
              无需写任何提示词，Hawkeye 主动感知你的工作上下文，
              <br className="hidden sm:block" />
              智能理解意图，主动建议下一步行动。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants} custom={prefersReducedMotion}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.a
                whileHover={hoverAnimation}
                whileTap={tapAnimation}
                href="https://github.com/tensorboy/hawkeye/releases"
                className="hawk-btn-accent flex items-center gap-3 text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                免费下载
                <ChevronDown className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={tapAnimation}
                whileTap={tapAnimation}
                href="#features"
                className="hawk-btn-ghost flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                了解工作原理
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants} custom={prefersReducedMotion}
              className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-[var(--hawk-text-tertiary)] mb-12"
            >
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                无需提示词
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                离线可用
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                100% 隐私保护
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                完全开源
              </span>
            </motion.div>

            {/* Hero Video - Autoplay */}
            <motion.div
              variants={itemVariants} custom={prefersReducedMotion}
              className="relative max-w-4xl mx-auto"
            >
              {/* Glow behind the video */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--hawk-accent)]/20 via-[var(--hawk-blue)]/20 to-[var(--hawk-accent)]/20 blur-3xl -z-10 scale-110" />

              <div className="hawk-border-gradient overflow-hidden">
                <div className="bg-[var(--hawk-surface)]">
                  {/* Window Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[var(--hawk-bg-secondary)] border-b border-[var(--hawk-border)]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 text-center text-sm text-[var(--hawk-text-tertiary)] font-medium">
                      Hawkeye — 实际演示
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[var(--hawk-accent)]">
                      <Activity className="w-3 h-3 animate-pulse" />
                      实时演示
                    </div>
                  </div>

                  {/* Video Player */}
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label={videoPlaying ? "暂停演示视频" : "播放演示视频"}
                    className="relative aspect-video bg-slate-900 cursor-pointer group"
                    onClick={() => {
                      if (videoRef.current) {
                        if (videoRef.current.muted) {
                          videoRef.current.muted = false
                        } else {
                          if (videoPlaying) {
                            videoRef.current.pause()
                            setVideoPlaying(false)
                          } else {
                            videoRef.current.play()
                            setVideoPlaying(true)
                          }
                        }
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        if (videoRef.current) {
                          if (videoRef.current.muted) {
                            videoRef.current.muted = false
                          } else {
                            if (videoPlaying) {
                              videoRef.current.pause()
                              setVideoPlaying(false)
                            } else {
                              videoRef.current.play()
                              setVideoPlaying(true)
                            }
                          }
                        }
                      }
                    }}
                  >
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      src="/video/hawkeye-demo-zh.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-label="Hawkeye产品演示视频"
                      onPlay={() => setVideoPlaying(true)}
                      onPause={() => setVideoPlaying(false)}
                    />
                    {/* Click to unmute hint */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                      点击开启声音
                    </div>
                    {/* Playing indicator */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-white text-xs font-medium">演示中</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - respects reduced motion */}
        {!prefersReducedMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          >
            <span className="text-xs text-[var(--hawk-text-tertiary)] font-medium">向下滚动</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-[var(--hawk-border)] flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-[var(--hawk-text-tertiary)] rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 border-y border-[var(--hawk-border)] bg-[var(--hawk-bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[var(--hawk-bg-primary)]">
        <div className="container mx-auto px-4">
          <motion.header
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[var(--hawk-accent)] bg-[var(--hawk-accent)]/10 rounded-full uppercase tracking-wider">
              用户评价
            </span>
            <h2 className="hawk-display-lg text-[var(--hawk-text-primary)]">
              用户们怎么说
            </h2>
          </motion.header>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
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
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
                className="hawk-card"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[var(--hawk-accent)] fill-[var(--hawk-accent)]" />
                  ))}
                </div>
                <p className="text-[var(--hawk-text-secondary)] mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
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

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 relative overflow-hidden" aria-labelledby="features-heading">
        <div className="absolute inset-0 hawk-grid-bg opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.header
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[var(--hawk-accent)] bg-[var(--hawk-accent)]/10 rounded-full uppercase tracking-wider">
              为什么无需提示词
            </span>
            <h2 id="features-heading" className="hawk-display-lg text-[var(--hawk-text-primary)] mb-4">
              无需提示词，直出结果
            </h2>
            <p className="hawk-body-lg text-[var(--hawk-text-secondary)] max-w-2xl mx-auto">
              你的天才 AI 队友，永远不需要指令
            </p>
          </motion.header>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto" role="list">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                role="listitem"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: prefersReducedMotion ? 0 : index * 0.15 }}
                whileHover={cardHoverAnimation}
                className="hawk-card group cursor-pointer relative overflow-hidden will-change-transform"
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
                <p className="text-sm text-[var(--hawk-text-tertiary)] mb-4 font-medium">{feature.subtitle}</p>
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

      {/* Use Cases Section */}
      <section id="usecases" className="py-20 md:py-32 bg-[var(--hawk-bg-secondary)]" aria-labelledby="usecases-heading">
        <div className="container mx-auto px-4">
          <motion.header
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[var(--hawk-accent)] bg-[var(--hawk-accent)]/10 rounded-full uppercase tracking-wider">
              应用场景
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
                  viewport={viewportOnce}
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

      {/* Platforms Section */}
      <section id="platforms" className="py-20 md:py-32 relative overflow-hidden" aria-labelledby="platforms-heading">
        <div className="absolute inset-0 hawk-grid-bg opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.header
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-[var(--hawk-accent)] bg-[var(--hawk-accent)]/10 rounded-full uppercase tracking-wider">
              支持平台
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
                viewport={viewportOnce}
                transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
                whileHover={tapAnimation}
                className="hawk-card text-center !p-6 md:!p-8 will-change-transform"
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

      {/* Privacy Section */}
      <section className="py-20 md:py-32 bg-[var(--hawk-bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="hawk-border-gradient overflow-hidden"
            >
              <div className="bg-[var(--hawk-surface)] p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="hawk-display-md text-[var(--hawk-text-primary)] mb-6">
                      隐私优先，安全设计
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        '所有数据本地处理，永不上传',
                        '支持 Ollama 本地 LLM',
                        '可选云端 AI（自带 API Key）',
                        '100% 开源透明可审计'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 min-h-[44px]">
                          <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-emerald-500" />
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[var(--hawk-bg-primary)] to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 hawk-noise" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--hawk-accent)] rounded-full blur-[200px] opacity-10" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
          >
            <h2 className="hawk-display-lg text-white mb-6">
              未来，无需提示词
            </h2>
            <p className="hawk-body-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              开源、本地优先、100% 隐私保护。你的 AI 工作伙伴，开箱即用。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={tapAnimation}
                whileTap={tapAnimation}
                href="https://github.com/tensorboy/hawkeye"
                className="hawk-btn-accent flex items-center justify-center gap-3"
              >
                <Github className="w-5 h-5" />
                在 GitHub 上加星
              </motion.a>
              <motion.a
                whileHover={tapAnimation}
                whileTap={tapAnimation}
                href="https://github.com/tensorboy/hawkeye/releases"
                className="hawk-btn-ghost !border-slate-700 !text-slate-300 hover:!bg-slate-800 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                立即下载
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 border-t border-slate-800" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="Hawkeye" width={32} height={32} className="w-8 h-8" />
                <span className="text-xl font-display font-bold text-white">Hawkeye</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                无需提示词的 AI 工作伙伴。自然工作，Hawkeye 主动帮助你。
              </p>
              {/* Email Subscribe */}
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="footer-email" className="sr-only">电子邮箱</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="你的邮箱地址"
                  autoComplete="email"
                  aria-describedby="subscribe-hint"
                  className="flex-1 px-4 min-h-[44px] bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[var(--hawk-accent)] focus:border-transparent transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 min-h-[44px] bg-[var(--hawk-accent)] text-slate-900 rounded-xl font-semibold hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-[var(--hawk-accent)] focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                >
                  订阅
                </button>
                <span id="subscribe-hint" className="sr-only">订阅我们的邮件通讯以获取最新更新</span>
              </form>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">产品</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-slate-400 hover:text-white transition-colors">功能</Link></li>
                <li><Link href="#usecases" className="text-slate-400 hover:text-white transition-colors">使用场景</Link></li>
                <li><Link href="#platforms" className="text-slate-400 hover:text-white transition-colors">多平台</Link></li>
                <li><Link href="/compare" className="text-slate-400 hover:text-white transition-colors">对比竞品</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">资源</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/tensorboy/hawkeye" className="text-slate-400 hover:text-white transition-colors">GitHub</a></li>
                <li><Link href="/changelog" className="text-slate-400 hover:text-white transition-colors">更新日志</Link></li>
                <li><Link href="/faq" className="text-slate-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">博客</Link></li>
              </ul>
              <h3 className="font-semibold text-white mb-4 mt-6">社区</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/tensorboy/hawkeye/discussions" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">讨论区</a></li>
                <li><a href="https://github.com/tensorboy/hawkeye/issues" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">提交问题</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">法律</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">隐私政策</Link></li>
                <li><Link href="/terms" className="text-slate-400 hover:text-white transition-colors">服务条款</Link></li>
              </ul>
              <h3 className="font-semibold text-white mb-4 mt-6">语言</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">English</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Hawkeye. MIT License. <span className="text-slate-600">v0.1.0</span>
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="https://github.com/tensorboy/hawkeye" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub" title="在 GitHub 上加星">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/tensorboy" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter" title="关注 Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/tensorboy/hawkeye/discussions" className="text-slate-400 hover:text-white transition-colors" aria-label="讨论区" title="加入讨论">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
