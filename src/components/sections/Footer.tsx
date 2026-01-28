'use client'

import Image from 'next/image'
import Link from 'next/link'

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
            <p className="text-slate-400 max-w-sm">
              Your prompt-free AI coworker. No typing needed — just work naturally and let Hawkeye help.
            </p>
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
            © {new Date().getFullYear()} Anureka Inc.. MIT License.
          </p>
        </div>
      </div>
    </footer>
  )
}
