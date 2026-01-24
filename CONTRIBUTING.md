# 贡献指南 | Contributing Guide

感谢你对 Hawkeye 网站项目的关注！我们欢迎各种形式的贡献。

Thank you for your interest in contributing to the Hawkeye website project!

## 目录 | Table of Contents

- [行为准则](#行为准则--code-of-conduct)
- [如何贡献](#如何贡献--how-to-contribute)
- [开发设置](#开发设置--development-setup)
- [代码规范](#代码规范--code-standards)
- [提交规范](#提交规范--commit-conventions)
- [Pull Request 流程](#pull-request-流程--pr-process)

## 行为准则 | Code of Conduct

请保持友善和尊重。我们希望为每个人创造一个包容的环境。

Please be kind and respectful. We aim to create an inclusive environment for everyone.

## 如何贡献 | How to Contribute

### 报告 Bug | Report Bugs

1. 在 [Issues](https://github.com/tensorboy/hawkeye/issues) 搜索是否已有相关问题
2. 如果没有，创建新 Issue 并包含：
   - 清晰的标题和描述
   - 复现步骤
   - 预期行为 vs 实际行为
   - 浏览器版本和操作系统

### 功能建议 | Feature Requests

欢迎提出新功能建议！请在 Issue 中详细描述：
- 功能的用途
- 实现方案（如果有）
- 相关截图或示例

### 代码贡献 | Code Contributions

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feat/your-feature`
3. 提交更改（见下方提交规范）
4. 推送到你的 Fork
5. 创建 Pull Request

## 开发设置 | Development Setup

### 环境要求 | Prerequisites

- Node.js 18+
- pnpm（推荐）或 npm

### 本地开发 | Local Development

```bash
# 克隆仓库
git clone https://github.com/YOUR_USERNAME/hawkiyi-web.git
cd hawkiyi-web

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 http://localhost:3000 查看效果。

### 构建验证 | Build Verification

**重要：每次代码修改后，必须确保构建通过！**

```bash
pnpm build
```

## 代码规范 | Code Standards

### 技术栈 | Tech Stack

- **Next.js 15** - App Router
- **TypeScript** - 严格类型检查
- **Tailwind CSS** - 样式
- **Framer Motion** - 动画

### 目录结构 | Project Structure

```
src/
├── app/           # 页面路由
│   ├── page.tsx   # 中文首页
│   ├── en/        # 英文版
│   └── ...
├── components/    # 可复用组件
├── lib/           # 工具函数
└── styles/        # 全局样式
```

### 编码规范 | Coding Guidelines

1. **TypeScript**：使用严格类型，避免 `any`
2. **组件**：使用函数组件和 Hooks
3. **样式**：优先使用 Tailwind CSS
4. **国际化**：修改内容时同步更新中英文版本
5. **网络兼容**：外部资源使用国内 CDN 镜像

### 代码检查 | Linting

```bash
pnpm lint
```

## 提交规范 | Commit Conventions

使用语义化提交信息：

```
<type>: <description>

[optional body]
```

### 类型 | Types

| 类型 | 描述 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug 修复 |
| `docs` | 文档更新 |
| `style` | 代码格式（不影响功能） |
| `refactor` | 代码重构 |
| `perf` | 性能优化 |
| `test` | 测试相关 |
| `chore` | 构建/工具变更 |

### 示例 | Examples

```bash
feat: 添加用户评价轮播组件
fix: 修复移动端导航栏闪烁问题
docs: 更新 README 安装说明
```

## Pull Request 流程 | PR Process

1. **标题**：简洁描述变更内容
2. **描述**：详细说明：
   - 解决的问题
   - 实现方案
   - 测试方法
   - 截图（如有 UI 变更）
3. **检查清单**：
   - [ ] 代码通过 `pnpm lint`
   - [ ] 构建通过 `pnpm build`
   - [ ] 中英文版本同步
   - [ ] 已在本地测试
4. **Review**：等待维护者审核

## 需要帮助？| Need Help?

- 查看 [Issues](https://github.com/tensorboy/hawkeye/issues)
- 阅读 [README](./README.md)
- 提出 [Discussion](https://github.com/tensorboy/hawkeye/discussions)

---

再次感谢你的贡献！

Thank you for contributing!
