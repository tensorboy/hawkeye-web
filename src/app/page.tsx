'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
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
  Users,
  Star,
  TrendingUp,
  Menu,
  X,
  ChevronDown,
  FileText,
  Clipboard,
  FolderOpen,
  Mail,
  MessageSquare,

  ExternalLink,
  Play
} from 'lucide-react'
import Link from 'next/link'
import { GitHubStars } from '@/components/GitHubStars'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageSelector, LanguageSelectorMobile } from '@/components/LanguageSelector'
import { LifeTreeSection } from '@/components/sections/LifeTreeSection'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const shouldReduceMotion = useReducedMotion()

  // Prevent hydration mismatch by only using motion values after mount
  const prefersReducedMotion = mounted ? shouldReduceMotion : true

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      icon: Eye,
      title: 'Intelligent Perception',
      description: 'Real-time analysis of screen content, clipboard, and file changes to understand your work context',
      badge: 'Free',
      badgeColor: 'bg-green-100 text-green-700'
    },
    {
      icon: Zap,
      title: 'Instant Suggestions',
      description: 'AI-powered actionable task suggestions with one-click execution',
      badge: 'Dynamic',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Shield,
      title: 'Local-First',
      description: 'All data processing happens locally, supports offline mode, privacy-secure',
      badge: 'Secure',
      badgeColor: 'bg-purple-100 text-purple-700'
    }
  ]

  const useCases = [
    {
      icon: Cpu,
      title: 'Problem Solving Assistant',
      description: 'Automatically detect issues on your screen and suggest solutions to save time',
      tag: '⭐️ Featured'
    },
    {
      icon: FileText,
      title: 'Auto File Organization',
      description: 'Monitor downloads folder and automatically organize files by type and date',
      tag: '⭐️ Featured'
    },
    {
      icon: Clipboard,
      title: 'Smart Clipboard',
      description: 'Understand clipboard content intent and suggest next actions',
      tag: null
    },
    {
      icon: FolderOpen,
      title: 'Project Tracking',
      description: 'Monitor project file changes and auto-generate change reports',
      tag: null
    },
    {
      icon: Mail,
      title: 'Email Processing',
      description: 'Analyze email content and suggest reply templates and todo items',
      tag: null
    },
    {
      icon: Globe,
      title: 'Web Info Extraction',
      description: 'Auto-identify key information while browsing and suggest saving',
      tag: null
    }
  ]

  const stats = [
    { value: '10x', label: 'Efficiency Boost', description: 'Compared to traditional workflows' },
    { value: '100%', label: 'Local Processing', description: 'Data never leaves your device' },
    { value: '3', label: 'Platforms', description: 'Desktop / VS Code / Chrome' },
  ]

  const platforms = [
    { icon: Monitor, name: 'Desktop App', desc: 'macOS / Windows / Linux', color: 'from-blue-500 to-cyan-500' },
    { icon: Code2, name: 'VS Code', desc: 'Editor Extension', color: 'from-purple-500 to-pink-500' },
    { icon: Chrome, name: 'Chrome', desc: 'Browser Extension', color: 'from-orange-500 to-red-500' },
  ]

  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-b from-orange-50/50 via-white to-white dark:from-[var(--hawk-bg-primary)] dark:via-[var(--hawk-bg-primary)] dark:to-[var(--hawk-bg-primary)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/85 backdrop-blur-md border-b border-gray-100 dark:border-[var(--hawk-border)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 min-h-[44px]">
              <Image src="/logo.png" alt="Hawkeye" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold text-gray-900 dark:text-[var(--hawk-text-primary)]">Hawkeye</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-gray-600 dark:text-[var(--hawk-text-secondary)] hover:text-gray-900 dark:hover:text-[var(--hawk-text-primary)] transition-colors py-3 px-2">
                Features
              </Link>
              <Link href="#usecases" className="text-gray-600 dark:text-[var(--hawk-text-secondary)] hover:text-gray-900 dark:hover:text-[var(--hawk-text-primary)] transition-colors py-3 px-2">
                Use Cases
              </Link>
              <Link href="#platforms" className="text-gray-600 dark:text-[var(--hawk-text-secondary)] hover:text-gray-900 dark:hover:text-[var(--hawk-text-primary)] transition-colors py-3 px-2">
                Platforms
              </Link>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageSelector currentLocale="en" />
              <ThemeToggle />
              <GitHubStars repo="tensorboy/hawkeye" />
              <Link
                href="https://github.com/tensorboy/hawkeye/releases"
                className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Download
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-900 dark:text-[var(--hawk-text-primary)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-[var(--hawk-bg-primary)] border-t border-gray-100 dark:border-[var(--hawk-border)] py-4"
          >
            <div className="container mx-auto px-4 flex flex-col gap-2">
              <Link href="#features" className="text-gray-600 dark:text-[var(--hawk-text-secondary)] hover:text-gray-900 dark:hover:text-[var(--hawk-text-primary)] py-3 min-h-[44px] flex items-center">Features</Link>
              <Link href="#usecases" className="text-gray-600 dark:text-[var(--hawk-text-secondary)] hover:text-gray-900 dark:hover:text-[var(--hawk-text-primary)] py-3 min-h-[44px] flex items-center">Use Cases</Link>
              <Link href="#platforms" className="text-gray-600 dark:text-[var(--hawk-text-secondary)] hover:text-gray-900 dark:hover:text-[var(--hawk-text-primary)] py-3 min-h-[44px] flex items-center">Platforms</Link>
              <div className="py-2">
                <span className="text-gray-400 dark:text-[var(--hawk-text-tertiary)] text-xs uppercase tracking-wider mb-2 block">Language</span>
                <LanguageSelectorMobile currentLocale="en" />
              </div>
              <div className="flex items-center py-3 min-h-[44px]">
                <span className="text-gray-600 dark:text-[var(--hawk-text-secondary)] text-sm mr-2">Theme</span>
                <ThemeToggle />
              </div>
              <hr className="border-gray-100 dark:border-[var(--hawk-border)]" />
              <Link
                href="https://github.com/tensorboy/hawkeye/releases"
                className="px-4 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-center min-h-[44px] flex items-center justify-center"
              >
                Download
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Life Tree Section */}
      <LifeTreeSection prefersReducedMotion={!!prefersReducedMotion} />

      {/* Hero Section */}
      <section className="pt-16 md:pt-32 pb-12 md:pb-20 relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Positioning Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Soul Driven · Prompt-Free · Keyboard & Mouse Free · Open Source · Local First
              </span>
            </div>

            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-[var(--hawk-text-primary)] tracking-tight">
              <span className="block">Hawkeye</span>
              <span className="block text-2xl sm:text-3xl md:text-5xl mt-2 font-normal text-gray-700 dark:text-[var(--hawk-text-secondary)]">
                AI-Powered 10x Productivity
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-[var(--hawk-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
              From perception to action — A <strong className="text-gray-900 dark:text-[var(--hawk-text-primary)]">local-first AI assistant</strong> that
              automatically observes your work environment, understands intent, and proactively helps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/tensorboy/hawkeye/releases"
                className="inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-4 rounded-xl font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for Mac
                <ChevronDown className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/tensorboy/hawkeye"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-[var(--hawk-text-secondary)] hover:text-gray-900 dark:hover:text-[var(--hawk-text-primary)] font-medium text-lg transition-colors"
              >
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-8 text-sm text-gray-500 dark:text-[var(--hawk-text-tertiary)]"
            >
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-500" />
                No Credit Card
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-500" />
                Works Offline
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-500" />
                Data Stays Local
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-500" />
                Open Source
              </span>
            </motion.div>
          </motion.div>

          {/* Hero Video - Autoplay */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[var(--hawk-bg-tertiary)] dark:to-[var(--hawk-bg-secondary)] rounded-2xl p-1 shadow-2xl">
              <div className="bg-white dark:bg-[var(--hawk-bg-primary)] rounded-xl overflow-hidden">
                <div className="bg-gray-100 dark:bg-[var(--hawk-bg-secondary)] px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-500 dark:text-[var(--hawk-text-tertiary)]">Hawkeye — Live Demo</div>
                </div>
                <div
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
                >
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="/video/hawkeye-demo-zh.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onPlay={() => setVideoPlaying(true)}
                    onPause={() => setVideoPlaying(false)}
                  />
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to unmute
                  </div>
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white text-xs font-medium">Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-[var(--hawk-bg-primary)] border-y border-gray-100 dark:border-[var(--hawk-border)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-[var(--hawk-text-primary)] mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-gray-700 dark:text-[var(--hawk-text-secondary)]">{stat.label}</div>
                <div className="text-sm text-gray-500 dark:text-[var(--hawk-text-tertiary)] mt-1">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50/30 to-white dark:from-[var(--hawk-bg-secondary)] dark:to-[var(--hawk-bg-primary)]">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-gray-500 dark:text-[var(--hawk-text-tertiary)] uppercase tracking-wide">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-[var(--hawk-text-primary)] mt-2">
              What Users Are Saying
            </h2>
          </motion.header>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "Finally, an AI assistant that truly respects privacy. All data is processed locally, and I can use it confidently at work.",
                author: "Mike Chen",
                role: "Product Manager",
                avatar: "M"
              },
              {
                quote: "Hawkeye has completely transformed my workflow. It automatically understands what I'm doing and gives precise suggestions.",
                author: "Sarah Lee",
                role: "Freelancer",
                avatar: "S"
              },
              {
                quote: "As an open source project, Hawkeye's quality is impressive. Active community, frequent updates, and getting more powerful.",
                author: "David Wang",
                role: "Entrepreneur",
                avatar: "D"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-[var(--hawk-surface)] rounded-2xl p-6 border border-gray-100 dark:border-[var(--hawk-border)] shadow-sm dark:shadow-none"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-[var(--hawk-text-secondary)] mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-[var(--hawk-text-primary)]">{testimonial.author}</div>
                    <div className="text-sm text-gray-500 dark:text-[var(--hawk-text-tertiary)]">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white dark:bg-[var(--hawk-bg-primary)]" aria-labelledby="features-heading">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="features-heading" className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-[var(--hawk-text-primary)] mb-4">
              Build Your Workflow, Your Way
            </h2>
            <p className="text-lg text-gray-600 dark:text-[var(--hawk-text-secondary)] max-w-2xl mx-auto">
              Intelligent, Secure, Fully Controllable
            </p>
          </motion.header>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">Free & Open Source</span>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">Dynamic Perception</span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium">Local-First</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-orange-50/50 to-white dark:from-[var(--hawk-bg-secondary)] dark:to-[var(--hawk-surface)] rounded-2xl p-8 border border-gray-100 dark:border-[var(--hawk-border)] hover:shadow-xl hover:border-orange-200 dark:hover:border-amber-500/30 transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-white dark:bg-[var(--hawk-bg-secondary)] shadow-sm border border-gray-100 dark:border-[var(--hawk-border)] flex items-center justify-center mb-6 group-hover:shadow-md group-hover:border-orange-200 dark:group-hover:border-amber-500/30 transition-all">
                  <feature.icon className="w-7 h-7 text-gray-700 dark:text-[var(--hawk-text-secondary)] group-hover:text-orange-600 dark:group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-[var(--hawk-text-primary)] mb-2 group-hover:text-orange-600 dark:group-hover:text-amber-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 dark:text-[var(--hawk-text-secondary)]">{feature.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-orange-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="usecases" className="py-24 bg-gradient-to-b from-white to-orange-50/30 dark:from-[var(--hawk-bg-primary)] dark:to-[var(--hawk-bg-secondary)]" aria-labelledby="usecases-heading">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-gray-500 dark:text-[var(--hawk-text-tertiary)] uppercase tracking-wide">Use Cases</span>
            <h2 id="usecases-heading" className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-[var(--hawk-text-primary)] mt-2 mb-4">
              Real Scenarios, Real Results
            </h2>
            <p className="text-lg text-gray-600 dark:text-[var(--hawk-text-secondary)] max-w-2xl mx-auto">
              See how Hawkeye helps with your daily tasks
            </p>
          </motion.header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.article
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-[var(--hawk-surface)] rounded-xl p-6 border border-gray-100 dark:border-[var(--hawk-border)] hover:shadow-lg dark:hover:shadow-none hover:border-gray-200 dark:hover:border-[var(--hawk-accent)] transition-all cursor-pointer group"
              >
                {useCase.tag && (
                  <span className="inline-block px-2 py-1 bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 text-xs font-medium rounded mb-3">
                    {useCase.tag}
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-[var(--hawk-bg-secondary)] flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 dark:group-hover:bg-[var(--hawk-bg-tertiary)] transition-colors">
                    <useCase.icon className="w-5 h-5 text-gray-600 dark:text-[var(--hawk-text-secondary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-[var(--hawk-text-primary)] mb-1 group-hover:text-primary-600 dark:group-hover:text-amber-400 transition-colors">{useCase.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-[var(--hawk-text-tertiary)]">{useCase.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-24 bg-white dark:bg-[var(--hawk-bg-primary)]" aria-labelledby="platforms-heading">
        <div className="container mx-auto px-4">
          <motion.header
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="platforms-heading" className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-[var(--hawk-text-primary)] mb-4">
              Multi-Platform Support
            </h2>
            <p className="text-lg text-gray-600 dark:text-[var(--hawk-text-secondary)] max-w-2xl mx-auto">
              Desktop app, VS Code extension, and Chrome extension in real-time sync
            </p>
          </motion.header>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-[var(--hawk-surface)] rounded-2xl p-8 border border-gray-200 dark:border-[var(--hawk-border)] hover:shadow-xl dark:hover:shadow-none transition-all text-center"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-[var(--hawk-text-primary)] mb-2">{platform.name}</h3>
                <p className="text-gray-500 dark:text-[var(--hawk-text-tertiary)]">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-[var(--hawk-bg-primary)] dark:to-[var(--hawk-bg-secondary)]" aria-labelledby="privacy-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[var(--hawk-surface)] rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-[var(--hawk-border)] shadow-lg dark:shadow-none"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h2 id="privacy-heading" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-[var(--hawk-text-primary)] mb-6">
                    Privacy-First, Secure by Design
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-[var(--hawk-text-secondary)]">All data processed locally, never uploaded</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-[var(--hawk-text-secondary)]">Supports Ollama local LLM</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-[var(--hawk-text-secondary)]">Optional cloud AI (Claude API)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-[var(--hawk-text-secondary)]">100% open source & transparent</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="cta-heading" className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Open Source · Free · Local-First
            </h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
              Hawkeye is open source. Self-host and use your own API keys or local models.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/tensorboy/hawkeye"
              className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
              Try on GitHub
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 border-t border-gray-800" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Hawkeye" width={32} height={32} className="w-8 h-8" />
                <span className="text-xl font-bold text-white">Hawkeye</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                AI-powered 10x productivity for everyone. Local-first, privacy-secure, free and open source.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#usecases" className="text-gray-400 hover:text-white transition-colors">Use Cases</Link></li>
                <li><Link href="#platforms" className="text-gray-400 hover:text-white transition-colors">Platforms</Link></li>
                <li><Link href="/compare" className="text-gray-400 hover:text-white transition-colors">Compare</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/tensorboy/hawkeye" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="https://github.com/tensorboy/hawkeye" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                <li><Link href="/changelog" className="text-gray-400 hover:text-white transition-colors">Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Anureka Inc. MIT License.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="/zh" className="text-gray-400 hover:text-white text-sm">中文</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
