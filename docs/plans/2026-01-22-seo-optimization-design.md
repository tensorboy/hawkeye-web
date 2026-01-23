# Hawkeye SEO 优化设计方案

> 日期: 2026-01-22
> 状态: 已确认，待实施

## 1. 核心定位重塑

### 新品牌定位
```
Hawkeye - The Prompt-Free AI Coworker
```

### 核心价值主张（3 层递进）

| 层级 | 英文 | 中文 |
|------|------|------|
| 主打 | Prompt-Free AI | 无需提示词的 AI |
| 差异化 | Multimodal Coworker | 多模态协作伙伴 |
| 信任 | Local-First Privacy | 本地优先 · 隐私安全 |

### 新 Tagline
- 英文: `"Your AI coworker that just knows what to do."`
- 中文: `"懂你所想，无需开口"`

### 竞品对标词矩阵（SEO 用）
- Claude Cowork alternative
- Cursor alternative (for non-coders)
- Screenpipe + AI automation
- Rewind AI with task execution

---

## 2. SEO 配置优化 (seo.ts)

### 新 Title
```
Hawkeye - Prompt-Free AI Coworker | Multimodal Agent That Just Works
```

### 新 Description
```
英文:
Hawkeye is a prompt-free AI coworker that perceives your screen, understands
context, and takes action automatically. No typing prompts - just work naturally.
Open source, local-first, 100% private. Free Claude Cowork alternative.

中文:
Hawkeye 是无需提示词的 AI 协作伙伴，自动感知屏幕、理解上下文、主动执行任务。
不用打字输入指令，自然工作即可。开源免费，本地优先，100% 隐私安全。
```

### 新增核心关键词

#### 主打概念
- prompt-free AI
- no-prompt AI
- AI without prompts
- zero-prompt assistant
- proactive AI

#### Cowork 相关
- AI coworker
- AI teammate
- Claude Cowork alternative
- open source cowork
- AI collaboration

#### Multimodal
- multimodal AI agent
- vision AI assistant
- screen-aware AI
- context-aware AI

#### 场景词
- AI that watches your screen
- AI that understands context
- proactive AI assistant
- AI without typing

### JSON-LD Schema 更新

1. **更新 SoftwareApplication**
   - `applicationSubCategory`: "Prompt-Free AI Coworker"
   - 新增 keywords 字段

2. **新增 HowTo Schema**
   - "How to use Prompt-Free AI"
   - 步骤说明

3. **新增 VideoObject Schema**
   - 为演示视频准备

---

## 3. 落地页 Hero 区域重写

### 新 Hero 结构

```jsx
// Badge
<Badge>Prompt-Free · Open Source · Local-First</Badge>

// H1
<h1>
  <span className="en">Your AI Coworker That Just Knows</span>
  <span className="zh">无需开口，它已懂你</span>
</h1>

// Subtitle
<p>
  Stop typing prompts. Hawkeye watches your screen, understands your context,
  and proactively suggests actions. Like having a genius teammate who never
  needs instructions.
</p>
<p className="zh">
  不再输入提示词。Hawkeye 实时感知屏幕，理解上下文，主动建议下一步行动。
  就像一个永远不需要指示的天才队友。
</p>

// CTA
<Button primary>Try Prompt-Free AI →</Button>
<Button secondary>See How It Works</Button>

// Trust Badges
✓ Zero prompts needed
✓ Works offline
✓ 100% private
✓ Open source
```

### 核心特性重写

| 原版 | 新版 | 新描述 |
|------|------|--------|
| 屏幕感知 | **Sees Everything** | 多模态感知，屏幕+剪贴板+文件 |
| 智能推理 | **Thinks Ahead** | 主动推理，无需提示词 |
| 隐私优先 | **Stays Private** | 100% 本地，数据不离开设备 |

---

## 4. 新增 SEO 落地页

### 4.1 /compare/cowork - 竞品对比页

**Title:**
```
Hawkeye vs Claude Cowork vs Cursor - Which AI Coworker is Right for You?
```

**内容结构:**
1. Hero: "Compare Prompt-Free AI Tools"
2. 对比表格: Hawkeye / Claude Cowork / Cursor / Screenpipe
3. 对比维度:
   - Prompt-Free 能力
   - 价格
   - 隐私保护
   - 平台支持
   - 开源情况
4. 各产品详细分析
5. CTA: "Try the Only Prompt-Free Option"

**目标关键词:**
- Claude Cowork alternative
- Cursor alternative
- AI coworker comparison
- Screenpipe vs Hawkeye

### 4.2 /blog/what-is-prompt-free-ai - 概念教育页

**Title:**
```
What is Prompt-Free AI? The Future of Human-AI Interaction
```

**内容结构:**
1. 什么是 Prompt-Free AI（定义）
2. 为什么传统 AI 需要 prompts（痛点）
3. Prompt-Free 如何工作（技术原理简述）
4. Hawkeye 的 Prompt-Free 实现
5. FAQ

**目标关键词:**
- prompt-free AI
- no prompt AI
- AI without prompts
- proactive AI
- future of AI interaction

### 4.3 /use-cases/developers - 开发者场景页

**Title:**
```
Prompt-Free AI for Developers - Debug, Code, Ship Faster
```

**内容结构:**
1. 开发者痛点（打断心流、手动描述问题）
2. Hawkeye 如何帮助
   - 自动感知错误
   - 建议修复方案
   - 代码上下文理解
3. 与 Cursor/Copilot 的区别
4. 真实使用场景演示
5. 集成指南

**目标关键词:**
- AI coding assistant
- developer productivity
- AI pair programming
- AI debugging tool

### 4.4 /use-cases/everyone - 非开发者场景页

**Title:**
```
AI Coworker for Everyone - Not Just Developers
```

**内容结构:**
1. 强调 "不只是给程序员用"
2. 办公场景
   - 邮件处理
   - 文档整理
   - 会议记录
3. 学生场景
   - 笔记管理
   - 研究辅助
4. 创作者场景
   - 内容整理
   - 素材管理

**目标关键词:**
- AI assistant for non-coders
- AI for office work
- AI productivity tool
- AI for students

---

## 5. GitHub 优化

### Repository Description
```
🦅 Prompt-Free AI Coworker — Your screen-aware AI that just knows what to do.
No prompts needed. Open source, local-first, 100% private.
```

### Topics（标签）
```
prompt-free-ai
ai-coworker
multimodal-agent
screen-aware-ai
local-first
claude-cowork-alternative
cursor-alternative
ai-assistant
productivity
open-source
```

### README 结构

```markdown
# 🦅 Hawkeye - The Prompt-Free AI Coworker

> Your AI teammate that watches, understands, and acts — no prompts needed.

[![GitHub stars](badge)](link)
[![License](badge)](link)
[![Platform](badge)](link)

## ✨ Why Hawkeye?

| Traditional AI | Hawkeye |
|---------------|---------|
| You type prompts | It just knows |
| Reactive | Proactive |
| Text only | Multimodal (screen + clipboard + files) |
| Cloud required | 100% local |

## 🎯 Perfect For

- 👨‍💻 **Developers** — Auto-debug, code suggestions, error detection
- 📊 **Office Workers** — Email, docs, meeting notes
- 🎓 **Students** — Notes, research, study assistance
- 🎨 **Creators** — Content organization, asset management

## 🆚 How We Compare

| Feature | Hawkeye | Claude Cowork | Cursor | Screenpipe |
|---------|---------|---------------|--------|------------|
| Prompt-Free | ✅ | ❌ | ❌ | ❌ |
| Open Source | ✅ | ❌ | ❌ | ✅ |
| Local-First | ✅ | ❌ | ❌ | ✅ |
| Price | Free | Paid | Paid | Free |

[See full comparison →](https://hawkiyi.com/compare/cowork)

## 🚀 Quick Start

### Download
- [macOS](link)
- [Windows](link)
- [Linux](link)

### Or Build from Source
\`\`\`bash
git clone https://github.com/tensorboy/hawkeye
cd hawkeye
npm install && npm run build
\`\`\`

## 📖 Documentation

- [What is Prompt-Free AI?](https://hawkiyi.com/blog/what-is-prompt-free-ai)
- [Use Cases for Developers](https://hawkiyi.com/use-cases/developers)
- [Use Cases for Everyone](https://hawkiyi.com/use-cases/everyone)

## 🔒 Privacy

Your data **never leaves your device**. Hawkeye is:
- 100% local processing
- Zero cloud dependency
- Supports Ollama for local LLM
- Open source & auditable

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](link) for guidelines.

## 📄 License

MIT License - Free to use, modify, and distribute.
```

### 新增文件
- `COMPARISON.md` - 详细竞品对比文档

---

## 6. 实施优先级

| 优先级 | 任务 | 预计影响 |
|--------|------|----------|
| P0 | 更新 seo.ts 核心配置 | 立即生效 |
| P0 | 重写 Hero 区域 | 首屏转化提升 |
| P1 | 创建 /compare/cowork | 竞品流量获取 |
| P1 | 创建 /blog/what-is-prompt-free-ai | 概念教育 + SEO |
| P2 | 创建 use-cases 页面 | 场景覆盖 |
| P2 | 更新 GitHub README | GitHub 曝光 |

---

## 7. 成功指标

- [ ] Google 搜索 "prompt-free AI" 首页排名
- [ ] Google 搜索 "Claude Cowork alternative" 首页排名
- [ ] GitHub 周 Star 增长 > 100
- [ ] 落地页跳出率 < 50%
- [ ] 下载转化率 > 5%

---

## 参考资料

### 竞品分析来源
- [Claude-Cowork (GitHub)](https://github.com/DevAgentForge/Claude-Cowork)
- [Screenpipe (GitHub)](https://github.com/mediar-ai/screenpipe)
- [Mini-Agent (MiniMax)](https://github.com/MiniMax-AI/Mini-Agent)
- [OpenRecall](https://github.com/openrecall/openrecall)

### SEO 最佳实践
- 竞品替代词策略 (X alternative)
- 问题-解决方案内容框架
- JSON-LD 结构化数据
- 多语言 hreflang 支持
