'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

export function Footer() {
  return (
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
              Your prompt-free AI coworker. No typing needed — just work naturally and let Hawkeye help.
            </p>
            {/* Email Subscribe */}
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">电子邮箱</label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
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
          <nav aria-label="产品链接">
            <h3 className="font-semibold text-white mb-4">产品</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-slate-400 hover:text-white transition-colors">功能</Link></li>
              <li><Link href="#usecases" className="text-slate-400 hover:text-white transition-colors">使用场景</Link></li>
              <li><Link href="#platforms" className="text-slate-400 hover:text-white transition-colors">多平台</Link></li>
              <li><Link href="/compare" className="text-slate-400 hover:text-white transition-colors">对比竞品</Link></li>
            </ul>
          </nav>

          <nav aria-label="资源链接">
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
          </nav>

          <nav aria-label="法律链接">
            <h3 className="font-semibold text-white mb-4">法律</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">隐私政策</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-white transition-colors">服务条款</Link></li>
            </ul>
            <h3 className="font-semibold text-white mb-4 mt-6">语言</h3>
            <ul className="space-y-2">
              <li><Link href="/en" className="text-slate-400 hover:text-white transition-colors">English</Link></li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Hawkeye. MIT License. <span className="text-slate-600">v0.1.0</span>
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="https://github.com/tensorboy/hawkeye" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub" title="Star on GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/tensorboy" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter" title="Follow on Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/tensorboy/hawkeye/discussions" className="text-slate-400 hover:text-white transition-colors" aria-label="Discussions" title="Join Discussions">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
