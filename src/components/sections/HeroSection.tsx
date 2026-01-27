'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import {
  Sparkles,
  ChevronDown,
  Check,
  Play,
  Activity,
} from 'lucide-react'

interface HeroSectionProps {
  prefersReducedMotion: boolean
  mounted: boolean
}

export function HeroSection({ prefersReducedMotion, mounted }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  }

  const handleVideoClick = () => {
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

  const handleVideoKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleVideoClick()
    }
  }

  return (
    <section
      id="main-content"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
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
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--hawk-accent)]/10 border border-[var(--hawk-accent)]/20 text-[var(--hawk-accent)] text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Soul Driven · Prompt-Free · Keyboard & Mouse Free · Open Source · Local First
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 id="hero-heading" variants={itemVariants} className="mb-6">
            <span className="hawk-display-xl text-[var(--hawk-text-primary)] block">
              Your AI Coworker
            </span>
            <span className="hawk-display-xl hawk-gradient-text block mt-2">
              That Just Knows
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="hawk-body-lg text-[var(--hawk-text-secondary)] mb-10 max-w-2xl mx-auto"
          >
            <strong className="text-[var(--hawk-text-primary)]">无需开口，它已懂你</strong> — Stop typing prompts.
            <br className="hidden sm:block" />
            Hawkeye watches your screen, understands context, and acts proactively.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              href="https://github.com/tensorboy/hawkeye/releases"
              className="hawk-btn-accent flex items-center gap-3 text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Try Prompt-Free AI
              <ChevronDown className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              href="#features"
              className="hawk-btn-ghost flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              See How It Works
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-[var(--hawk-text-tertiary)] mb-12"
          >
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500" />
              Zero prompts needed
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500" />
              Works offline
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500" />
              100% private
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500" />
              Open source
            </span>
          </motion.div>

          {/* Hero Video */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-4xl mx-auto"
          >
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
                    Hawkeye — See It In Action
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[var(--hawk-accent)]">
                    <Activity className="w-3 h-3 animate-pulse" />
                    Live Demo
                  </div>
                </div>

                {/* Video Player */}
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={videoPlaying ? "暂停演示视频" : "播放演示视频"}
                  className="relative aspect-video bg-slate-900 cursor-pointer group"
                  onClick={handleVideoClick}
                  onKeyDown={handleVideoKeyDown}
                >
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="/video/hawkeye-demo-zh.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label="Hawkeye 产品演示视频"
                    onPlay={() => setVideoPlaying(true)}
                    onPause={() => setVideoPlaying(false)}
                  />
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    点击开启声音
                  </div>
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white text-xs font-medium">Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
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
    </section>
  )
}
