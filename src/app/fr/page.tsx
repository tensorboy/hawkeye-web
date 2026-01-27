'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Download, Github, Chrome, Monitor, Code2, Cpu, Menu, X,
  FileText, Clipboard, FolderOpen, Mail, Twitter, Scan, Brain, Shield,
  Check, Sparkles, Star, ChevronDown, ExternalLink, Globe, Play
} from 'lucide-react'
import Link from 'next/link'
import { GitHubStars } from '@/components/GitHubStars'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageSelector, LanguageSelectorMobile } from '@/components/LanguageSelector'
import { getTranslations } from '@/lib/i18n'

const t = getTranslations('fr')

export default function HomeFR() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const prefersReducedMotion = mounted ? shouldReduceMotion : true

  useEffect(() => { setMounted(true) }, [])

  const navItems = [
    { href: '#features', label: t.nav.features },
    { href: '#usecases', label: t.nav.useCases },
    { href: '#platforms', label: t.nav.platforms },
  ]

  const features = [
    { icon: Scan, title: t.features.items.sees.title, titleZh: t.features.items.sees.titleZh, description: t.features.items.sees.description, gradient: 'from-amber-500 to-orange-600' },
    { icon: Brain, title: t.features.items.thinks.title, titleZh: t.features.items.thinks.titleZh, description: t.features.items.thinks.description, gradient: 'from-blue-500 to-cyan-500' },
    { icon: Shield, title: t.features.items.private.title, titleZh: t.features.items.private.titleZh, description: t.features.items.private.description, gradient: 'from-emerald-500 to-teal-500' },
  ]

  const useCases = [
    { icon: Cpu, title: t.useCases.items.diagnosis.title, description: t.useCases.items.diagnosis.description, tag: t.useCases.popular },
    { icon: FileText, title: t.useCases.items.docs.title, description: t.useCases.items.docs.description, tag: t.useCases.popular },
    { icon: Clipboard, title: t.useCases.items.clipboard.title, description: t.useCases.items.clipboard.description, tag: null },
    { icon: FolderOpen, title: t.useCases.items.project.title, description: t.useCases.items.project.description, tag: null },
    { icon: Mail, title: t.useCases.items.email.title, description: t.useCases.items.email.description, tag: null },
    { icon: Globe, title: t.useCases.items.web.title, description: t.useCases.items.web.description, tag: null },
  ]

  const platforms = [
    { icon: Monitor, title: t.platforms.items.macos.title, description: t.platforms.items.macos.description, status: t.platforms.items.macos.status },
    { icon: Monitor, title: t.platforms.items.windows.title, description: t.platforms.items.windows.description, status: t.platforms.items.windows.status },
    { icon: Chrome, title: t.platforms.items.chrome.title, description: t.platforms.items.chrome.description, status: t.platforms.items.chrome.status },
    { icon: Code2, title: t.platforms.items.vscode.title, description: t.platforms.items.vscode.description, status: t.platforms.items.vscode.status },
  ]

  return (
    <div className="min-h-screen bg-[var(--hawk-bg-primary)]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--hawk-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--hawk-border)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/fr" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Hawkeye" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold text-[var(--hawk-text-primary)]">Hawkeye</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (<Link key={item.href} href={item.href} className="text-[var(--hawk-text-secondary)] hover:text-[var(--hawk-text-primary)] transition-colors">{item.label}</Link>))}
            </div>
            <div className="hidden md:flex items-center gap-3">
              <GitHubStars repo="tensorboy/hawkeye" />
              <LanguageSelector currentLocale="fr" />
              <ThemeToggle />
              <Link href="https://github.com/tensorboy/hawkeye/releases" className="hawk-btn-accent text-sm"><Download className="w-4 h-4 mr-2" />{t.nav.download}</Link>
            </div>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
          </div>
        </div>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-[var(--hawk-bg-primary)] border-t border-[var(--hawk-border)] p-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (<Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="py-3 px-3 text-[var(--hawk-text-primary)] rounded-lg hover:bg-[var(--hawk-bg-secondary)]">{item.label}</Link>))}
              <div className="py-2 px-3"><span className="text-[var(--hawk-text-tertiary)] text-xs uppercase tracking-wider mb-2 block">Langue</span><LanguageSelectorMobile currentLocale="fr" /></div>
              <div className="flex items-center py-3 px-3"><span className="text-[var(--hawk-text-secondary)] text-sm mr-2">{t.nav.theme}</span><ThemeToggle /></div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--hawk-accent)]/10 text-[var(--hawk-accent)] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {t.hero.badge}
          </motion.div>
          <motion.h1 initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="hawk-display-xl text-[var(--hawk-text-primary)] mb-6">{t.hero.title}<br /><span className="hawk-gradient-text">{t.hero.titleHighlight}</span></motion.h1>
          <motion.p initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-[var(--hawk-text-secondary)] mb-8 max-w-2xl mx-auto">{t.hero.subtitle}</motion.p>
          <motion.div initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://github.com/tensorboy/hawkeye/releases" className="hawk-btn-accent inline-flex items-center justify-center gap-2"><Download className="w-5 h-5" />{t.hero.cta.download}<ChevronDown className="w-4 h-4" /></Link>
            <Link href="https://github.com/tensorboy/hawkeye" className="hawk-btn-ghost inline-flex items-center justify-center gap-2"><Github className="w-5 h-5" />{t.hero.cta.github}<ExternalLink className="w-4 h-4" /></Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div initial={prefersReducedMotion ? {} : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-8 text-sm text-[var(--hawk-text-secondary)]">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />{t.trustBadges.noCreditCard}</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />{t.trustBadges.worksOffline}</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />{t.trustBadges.dataStaysLocal}</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />{t.trustBadges.openSource}</span>
          </motion.div>
        </div>

        {/* Hero Video - Autoplay */}
        <motion.div initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-16 max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-b from-[var(--hawk-bg-tertiary)] to-[var(--hawk-bg-secondary)] rounded-2xl p-1 shadow-2xl">
            <div className="bg-[var(--hawk-bg-primary)] rounded-xl overflow-hidden">
              <div className="bg-[var(--hawk-bg-secondary)] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
                <div className="flex-1 text-center text-sm text-[var(--hawk-text-secondary)]">Hawkeye — Démo en Direct</div>
              </div>
              <div className="relative aspect-video bg-slate-900 cursor-pointer group" onClick={() => { if (videoRef.current) { if (videoRef.current.muted) { videoRef.current.muted = false } else { if (videoPlaying) { videoRef.current.pause(); setVideoPlaying(false) } else { videoRef.current.play(); setVideoPlaying(true) } } } }}>
                <video ref={videoRef} className="w-full h-full object-cover" src="/video/hawkeye-demo-zh.mp4" autoPlay muted loop playsInline onPlay={() => setVideoPlaying(true)} onPause={() => setVideoPlaying(false)} />
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Cliquez pour activer le son
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-white text-xs font-medium">Démo</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--hawk-bg-primary)] border-y border-[var(--hawk-border)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--hawk-text-primary)] mb-2">{t.stats.efficiency.value}</div>
              <div className="text-lg font-medium text-[var(--hawk-text-primary)]">{t.stats.efficiency.label}</div>
              <div className="text-sm text-[var(--hawk-text-secondary)] mt-1">{t.stats.efficiency.description}</div>
            </motion.div>
            <motion.div initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--hawk-text-primary)] mb-2">{t.stats.local.value}</div>
              <div className="text-lg font-medium text-[var(--hawk-text-primary)]">{t.stats.local.label}</div>
              <div className="text-sm text-[var(--hawk-text-secondary)] mt-1">{t.stats.local.description}</div>
            </motion.div>
            <motion.div initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--hawk-text-primary)] mb-2">{t.stats.platforms.value}</div>
              <div className="text-lg font-medium text-[var(--hawk-text-primary)]">{t.stats.platforms.label}</div>
              <div className="text-sm text-[var(--hawk-text-secondary)] mt-1">{t.stats.platforms.description}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[var(--hawk-bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.header initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="hawk-display-md text-[var(--hawk-text-primary)]">{t.testimonials.title}</h2>
          </motion.header>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.testimonials.items.map((testimonial, index) => (
              <motion.div key={testimonial.author} initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="hawk-card">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />))}</div>
                <p className="text-[var(--hawk-text-secondary)] mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-semibold">{testimonial.avatar}</div>
                  <div><div className="font-semibold text-[var(--hawk-text-primary)]">{testimonial.author}</div><div className="text-sm text-[var(--hawk-text-secondary)]">{testimonial.role}</div></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-[var(--hawk-bg-primary)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16"><h2 className="hawk-display-md text-[var(--hawk-text-primary)] mb-4">{t.features.title}</h2><p className="text-lg text-[var(--hawk-text-secondary)]">{t.features.subtitle}</p></div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="hawk-card text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6`}><feature.icon className="w-8 h-8 text-white" /></div>
                <h3 className="text-xl font-bold text-[var(--hawk-text-primary)] mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--hawk-accent)] mb-3">{feature.titleZh}</p>
                <p className="text-[var(--hawk-text-secondary)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="usecases" className="py-20 px-4 bg-[var(--hawk-bg-secondary)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16"><h2 className="hawk-display-md text-[var(--hawk-text-primary)] mb-4">{t.useCases.title}</h2><p className="text-lg text-[var(--hawk-text-secondary)]">{t.useCases.subtitle}</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div key={index} initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="hawk-card flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[var(--hawk-bg-primary)]"><useCase.icon className="w-6 h-6 text-[var(--hawk-accent)]" /></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1"><h3 className="font-semibold text-[var(--hawk-text-primary)]">{useCase.title}</h3>{useCase.tag && (<span className="text-xs px-2 py-0.5 rounded-full bg-[var(--hawk-accent)]/10 text-[var(--hawk-accent)]">{useCase.tag}</span>)}</div>
                  <p className="text-sm text-[var(--hawk-text-secondary)]">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 px-4 bg-[var(--hawk-bg-primary)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16"><h2 className="hawk-display-md text-[var(--hawk-text-primary)] mb-4">{t.platforms.title}</h2><p className="text-lg text-[var(--hawk-text-secondary)]">{t.platforms.subtitle}</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div key={index} initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="hawk-card text-center">
                <platform.icon className="w-12 h-12 mx-auto mb-4 text-[var(--hawk-accent)]" />
                <h3 className="font-semibold text-[var(--hawk-text-primary)] mb-2">{platform.title}</h3>
                <p className="text-sm text-[var(--hawk-text-secondary)] mb-3">{platform.description}</p>
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--hawk-bg-tertiary)] text-[var(--hawk-text-tertiary)]">{platform.status}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 bg-[var(--hawk-bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="hawk-card p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0"><Shield className="w-10 h-10 text-white" /></div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--hawk-text-primary)] mb-6">{t.privacy.title}</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-[var(--hawk-text-secondary)]">{t.privacy.items.localProcessing}</span></div>
                    <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-[var(--hawk-text-secondary)]">{t.privacy.items.ollamaSupport}</span></div>
                    <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-[var(--hawk-text-secondary)]">{t.privacy.items.optionalCloud}</span></div>
                    <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-[var(--hawk-text-secondary)]">{t.privacy.items.openSource}</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[var(--hawk-bg-primary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="hawk-display-md text-[var(--hawk-text-primary)] mb-4">{t.cta.title}</h2>
          <p className="text-lg text-[var(--hawk-text-secondary)] mb-8">{t.cta.subtitle}</p>
          <Link href="https://github.com/tensorboy/hawkeye/releases" className="hawk-btn-accent inline-flex items-center gap-2"><Download className="w-5 h-5" />{t.cta.button}</Link>
          <p className="text-sm text-[var(--hawk-text-tertiary)] mt-4">{t.cta.note}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4"><Image src="/logo.png" alt="Hawkeye" width={32} height={32} /><span className="text-xl font-bold">Hawkeye</span></div>
              <p className="text-gray-400 mb-6 max-w-sm">{t.hero.subtitle}</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">{t.footer.product}</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors">{t.footer.features}</Link></li>
                <li><Link href="#usecases" className="text-gray-400 hover:text-white transition-colors">{t.footer.useCases}</Link></li>
                <li><Link href="#platforms" className="text-gray-400 hover:text-white transition-colors">{t.footer.platforms}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">{t.footer.resources}</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/tensorboy/hawkeye" className="text-gray-400 hover:text-white transition-colors">{t.footer.documentation}</a></li>
                <li><a href="https://github.com/tensorboy/hawkeye" className="text-gray-400 hover:text-white transition-colors">{t.footer.github}</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">{t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="/zh" className="text-gray-400 hover:text-white text-sm">中文</Link>
              <Link href="/" className="text-gray-400 hover:text-white text-sm">English</Link>
              <a href="https://github.com/tensorboy/hawkeye" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://twitter.com/tensorboy" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
