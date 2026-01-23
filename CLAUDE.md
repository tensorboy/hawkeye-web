# Hawkeye Web 项目指南

## 构建验证规则（必须遵守）

**每次代码修改后，必须运行 `npm run build` 确保构建通过。**

```bash
npm run build
```

如果构建失败：
1. 立即修复 TypeScript 类型错误
2. 修复 ESLint 警告
3. 重新运行构建直到通过
4. 只有构建通过后才能提交代码

## 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **部署**: Vercel

## 项目结构

```
src/
├── app/           # 页面和路由
│   ├── page.tsx   # 中文首页
│   ├── en/        # 英文版
│   ├── compare/   # 竞品对比
│   └── ...
├── components/    # 可复用组件
└── lib/           # 工具函数和配置
```

## 开发规范

### 国际化
- 中文为默认语言 (/)
- 英文版在 /en 路径
- 修改导航时需同时更新两个版本

### 网络兼容性
- Google Fonts 使用国内 CDN 镜像 (fonts.loli.net)
- 外部 API 调用需添加超时和错误处理

### 代码修改检查清单

修改代码后，按顺序检查：

- [ ] TypeScript 类型正确
- [ ] 没有未使用的变量/导入
- [ ] 中英文版本同步更新
- [ ] `npm run build` 通过
- [ ] 本地预览正常

## 常用命令

```bash
npm run dev      # 启动开发服务器
npm run build    # 生产构建（必须通过）
npm run lint     # 代码检查
```

## Git 提交规范

```
feat: 新功能
fix: 修复问题
chore: 杂项更改
docs: 文档更新
```
