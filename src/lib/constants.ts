import {
  Scan,
  Brain,
  Shield,
  Cpu,
  FileText,
  Clipboard,
  FolderOpen,
  Mail,
  Globe,
  Zap,
  Lock,
  Layers,
  Monitor,
  Code2,
  Chrome,
  Eye,
} from 'lucide-react'
import type { Feature, UseCase, Stat, Platform, Testimonial, StatusCard, VideoChapter, NavItem } from './types'

/**
 * Main navigation items (Chinese)
 */
export const NAV_ITEMS: NavItem[] = [
  { href: '#features', label: '功能' },
  { href: '#usecases', label: '场景' },
  { href: '#platforms', label: '平台' },
]

/**
 * Main navigation items (English)
 */
export const NAV_ITEMS_EN: NavItem[] = [
  { href: '#features', label: 'Features' },
  { href: '#usecases', label: 'Use Cases' },
  { href: '#platforms', label: 'Platforms' },
]

/**
 * Features data (Chinese homepage)
 */
export const FEATURES: Feature[] = [
  {
    icon: Scan,
    title: 'Sees Everything',
    titleEn: '多模态感知',
    description: '屏幕、剪贴板、文件变化，全方位感知你的工作上下文',
    gradient: 'from-amber-500 to-orange-600',
    glow: 'rgba(245, 158, 11, 0.3)',
  },
  {
    icon: Brain,
    title: 'Thinks Ahead',
    titleEn: '主动推理',
    description: '无需输入提示词，自动理解意图，主动建议下一步行动',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59, 130, 246, 0.3)',
  },
  {
    icon: Shield,
    title: 'Stays Private',
    titleEn: '隐私安全',
    description: '100% 本地处理，数据永不离开设备，完全离线可用',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16, 185, 129, 0.3)',
  },
]

/**
 * Use cases data
 */
export const USE_CASES: UseCase[] = [
  {
    icon: Cpu,
    title: '问题诊断助手',
    description: '感知问题信息，智能建议解决方案',
    tag: 'Popular',
  },
  {
    icon: FileText,
    title: '文档智能整理',
    description: '自动按类型和日期整理下载文件',
    tag: 'Popular',
  },
  {
    icon: Clipboard,
    title: '剪贴板增强',
    description: '理解复制内容，建议下一步操作',
    tag: null,
  },
  {
    icon: FolderOpen,
    title: '项目文件追踪',
    description: '监控变化，自动生成变更报告',
    tag: null,
  },
  {
    icon: Mail,
    title: '邮件处理建议',
    description: '分析邮件，建议回复和待办事项',
    tag: null,
  },
  {
    icon: Globe,
    title: '网页信息提取',
    description: '自动识别关键信息并建议保存',
    tag: null,
  },
]

/**
 * Use cases data (English)
 */
export const USE_CASES_EN: UseCase[] = [
  {
    icon: Cpu,
    title: 'Problem Solving Assistant',
    description: 'Automatically detect issues on your screen and suggest solutions to save time',
    tag: '⭐️ Featured',
  },
  {
    icon: FileText,
    title: 'Auto File Organization',
    description: 'Monitor downloads folder and automatically organize files by type and date',
    tag: '⭐️ Featured',
  },
  {
    icon: Clipboard,
    title: 'Smart Clipboard',
    description: 'Understand clipboard content intent and suggest next actions',
    tag: null,
  },
  {
    icon: FolderOpen,
    title: 'Project Tracking',
    description: 'Monitor project file changes and auto-generate change reports',
    tag: null,
  },
  {
    icon: Mail,
    title: 'Email Processing',
    description: 'Analyze email content and suggest reply templates and todo items',
    tag: null,
  },
  {
    icon: Globe,
    title: 'Web Info Extraction',
    description: 'Auto-identify key information while browsing and suggest saving',
    tag: null,
  },
]

/**
 * Stats data (Chinese)
 */
export const STATS: Stat[] = [
  { value: '10x', label: '效率提升', icon: Zap },
  { value: '100%', label: '本地运行', icon: Lock },
  { value: '3', label: '平台支持', icon: Layers },
]

/**
 * Stats data (English)
 */
export const STATS_EN: Stat[] = [
  { value: '10x', label: 'Efficiency Boost', description: 'Compared to traditional workflows' },
  { value: '100%', label: 'Local Processing', description: 'Data never leaves your device' },
  { value: '3', label: 'Platforms', description: 'Desktop / VS Code / Chrome' },
]

/**
 * Platforms data
 */
export const PLATFORMS: Platform[] = [
  { icon: Monitor, name: '桌面应用', desc: 'macOS · Windows · Linux', gradient: 'from-slate-600 to-slate-800' },
  { icon: Code2, name: 'VS Code', desc: '编辑器深度集成', gradient: 'from-blue-600 to-indigo-700' },
  { icon: Chrome, name: 'Chrome', desc: '浏览器扩展', gradient: 'from-amber-500 to-orange-600' },
]

/**
 * Platforms data (English)
 */
export const PLATFORMS_EN: Platform[] = [
  { icon: Monitor, name: 'Desktop App', desc: 'macOS / Windows / Linux', gradient: 'from-blue-500 to-cyan-500' },
  { icon: Code2, name: 'VS Code', desc: 'Editor Extension', gradient: 'from-purple-500 to-pink-500' },
  { icon: Chrome, name: 'Chrome', desc: 'Browser Extension', gradient: 'from-orange-500 to-red-500' },
]

/**
 * Testimonials data (Chinese)
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: '终于有一个真正尊重隐私的 AI 助手了。所有数据都在本地处理，我可以放心地在工作中使用它。',
    author: '张明',
    role: '产品经理',
    avatar: 'Z',
  },
  {
    quote: 'Hawkeye 彻底改变了我的工作流程。它能自动识别我在做什么，并给出精准的建议，效率提升太明显了。',
    author: '李华',
    role: '自由职业者',
    avatar: 'L',
  },
  {
    quote: '作为一个开源项目，Hawkeye 的质量让我惊讶。社区活跃，更新频繁，功能越来越强大。',
    author: '王强',
    role: '创业者',
    avatar: 'W',
  },
]

/**
 * Testimonials data (English)
 */
export const TESTIMONIALS_EN: Testimonial[] = [
  {
    quote: "Finally, an AI assistant that truly respects privacy. All data is processed locally, and I can use it confidently at work.",
    author: 'Mike Chen',
    role: 'Product Manager',
    avatar: 'M',
  },
  {
    quote: "Hawkeye has completely transformed my workflow. It automatically understands what I'm doing and gives precise suggestions.",
    author: 'Sarah Lee',
    role: 'Freelancer',
    avatar: 'S',
  },
  {
    quote: "As an open source project, Hawkeye's quality is impressive. Active community, frequent updates, and getting more powerful.",
    author: 'David Wang',
    role: 'Entrepreneur',
    avatar: 'D',
  },
]

/**
 * Hero status cards data
 */
export const STATUS_CARDS: StatusCard[] = [
  { title: '屏幕感知', status: '正在分析...', color: 'amber', icon: Eye },
  { title: '文件监控', status: '检测到 3 个新文件', color: 'blue', icon: FolderOpen },
  { title: '剪贴板', status: '已捕获代码片段', color: 'teal', icon: Clipboard },
  { title: '任务建议', status: '生成了 5 个建议', color: 'orange', icon: Zap },
]

/**
 * Video chapters data
 */
export const VIDEO_CHAPTERS: VideoChapter[] = [
  { time: '0:00', label: '安装与设置' },
  { time: '0:45', label: '屏幕感知演示' },
  { time: '1:30', label: '任务自动化' },
]

/**
 * Video chapters data (English)
 */
export const VIDEO_CHAPTERS_EN: VideoChapter[] = [
  { time: '0:00', label: 'Installation' },
  { time: '0:45', label: 'Screen Perception' },
  { time: '1:30', label: 'Task Automation' },
]

/**
 * Privacy features list
 */
export const PRIVACY_FEATURES = [
  '所有数据本地处理，永不上传',
  '支持 Ollama 本地 LLM',
  '可选云端 AI（自带 API Key）',
  '100% 开源透明可审计',
]

/**
 * Privacy features list (English)
 */
export const PRIVACY_FEATURES_EN = [
  'All data processed locally, never uploaded',
  'Supports Ollama local LLM',
  'Optional cloud AI (Claude API)',
  '100% open source & transparent',
]

/**
 * GitHub repository URL
 */
export const GITHUB_REPO = 'tensorboy/hawkeye'
export const GITHUB_URL = `https://github.com/${GITHUB_REPO}`
export const GITHUB_RELEASES_URL = `${GITHUB_URL}/releases`

/**
 * Site URLs
 */
export const SITE_URL = 'https://hawkiyi.com'
