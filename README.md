# Hawkiyi.com 🦅

<p align="center">
  <img src="./public/logo.png" alt="Hawkeye Logo" width="200" height="200" style="border-radius: 20%;" />
</p>

<p align="center">
  <strong>Hawkeye 项目官方网站</strong>
</p>

<p align="center">
  <a href="https://hawkiyi.com">
    <img src="https://img.shields.io/badge/website-hawkiyi.com-blue?style=flat-square" alt="Website" />
  </a>
  <a href="https://github.com/tensorboy/hawkeye/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License" />
  </a>
  <a href="https://nextjs.org">
    <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square" alt="Next.js" />
  </a>
  <a href="https://vercel.com">
    <img src="https://img.shields.io/badge/deployed%20on-Vercel-black?style=flat-square" alt="Vercel" />
  </a>
</p>

---

## 关于 | About

这是 [Hawkeye](https://github.com/tensorboy/hawkeye) 项目的官方介绍网站，用于展示项目特性、下载链接和文档。

Hawkeye 是一款 **Prompt-Free AI 协作助手**，无需手动输入指令，AI 自动理解你的工作上下文并提供智能协助。

## 预览 | Preview

🔗 **在线访问**: [https://hawkiyi.com](https://hawkiyi.com)

## 功能页面 | Pages

| 页面 | 路径 | 描述 |
|------|------|------|
| 首页 | `/` | 产品介绍（中文） |
| 英文版 | `/en` | 产品介绍（英文） |
| 功能特性 | `/features` | 详细功能介绍 |
| 使用场景 | `/use-cases` | 不同用户场景 |
| 竞品对比 | `/compare` | 与其他工具对比 |
| 更新日志 | `/changelog` | 版本更新记录 |
| 博客 | `/blog` | 技术文章 |
| FAQ | `/faq` | 常见问题 |
| 隐私政策 | `/privacy` | 隐私条款 |
| 服务条款 | `/terms` | 使用条款 |

## 技术栈 | Tech Stack

| 技术 | 版本 | 用途 |
|------|------|------|
| [Next.js](https://nextjs.org) | 15 | React 框架 (Turbopack) |
| [React](https://react.dev) | 19 | UI 库 |
| [TypeScript](https://typescriptlang.org) | 5.7 | 类型安全 |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | 样式框架 |
| [Framer Motion](https://framer.com/motion) | 12 | 动画库 |
| [Vercel](https://vercel.com) | - | 部署平台 |

## 项目结构 | Project Structure

```
hawkiyi-web/
├── src/
│   ├── app/              # 页面路由 (App Router)
│   │   ├── page.tsx      # 中文首页
│   │   ├── en/           # 英文版页面
│   │   ├── blog/         # 博客文章
│   │   ├── compare/      # 竞品对比
│   │   ├── features/     # 功能介绍
│   │   ├── use-cases/    # 使用场景
│   │   └── ...
│   ├── components/       # 可复用组件
│   ├── lib/              # 工具函数和配置
│   └── styles/           # 全局样式
├── public/               # 静态资源
└── package.json
```

## 开发 | Development

### 环境要求 | Prerequisites

- Node.js 18+
- pnpm（推荐）或 npm

### 本地运行 | Local Setup

```bash
# 克隆仓库
git clone https://github.com/tensorboy/hawkiyi-web.git
cd hawkiyi-web

# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务
pnpm start

# 代码检查
pnpm lint
```

访问 http://localhost:3000 查看效果。

### 环境变量 | Environment Variables

目前项目不需要配置环境变量。如有需要，创建 `.env.local` 文件：

```bash
# 示例
NEXT_PUBLIC_SITE_URL=https://hawkiyi.com
```

## 部署 | Deployment

网站自动部署到 Vercel：

- 推送到 `main` 分支 → 自动部署生产环境
- 创建 PR → 自动生成预览链接

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tensorboy/hawkiyi-web)

## 贡献 | Contributing

欢迎贡献代码！请查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解详情。

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feat/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feat/amazing-feature`)
5. 创建 Pull Request

## 相关链接 | Related Links

- 🦅 [Hawkeye 主仓库](https://github.com/tensorboy/hawkeye)
- 📦 [Chrome 扩展](https://github.com/tensorboy/hawkeye/tree/main/packages/chrome-extension)
- 🖥️ [桌面应用](https://github.com/tensorboy/hawkeye/tree/main/packages/desktop)
- 💻 [VS Code 扩展](https://github.com/tensorboy/hawkeye/tree/main/packages/vscode-extension)

## License

MIT © [tensorboy](https://github.com/tensorboy)
