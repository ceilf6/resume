# Resume Component Library

> 可抽离 ceilf6/resume 的美观、优雅、精炼的简历组件库

一个基于 React + TypeScript 构建的简历组件库，提供语义化、可复用的简历组件。

## 特性

- **语义化 HTML**：使用 `<article>`、`<section>`、`<time>`、`<dl>` 等语义标签
- **TypeScript 支持**：完整的类型定义，提供良好的开发体验
- **Markdown 解析**：内置 `withMarkdown` HOC，自动解析 `**粗体**`、`*斜体*`、`` `代码` ``、`[链接](url)` 等语法
- **打印优化**：针对 PDF 导出优化样式，支持 A4 纸张
- **BEM 命名**：CSS 采用 BEM 命名规范，避免样式冲突

## 安装

```bash
# 将 component 目录复制到你的项目中
cp -r component your-project/
```

## 快速开始

```tsx
import { SectionHeader, ItemHeader, ProjectItem } from './component';

function Resume() {
  return (
    <main className="page">
      <SectionHeader title="工作经历" />
      <ProjectItem
        leftContent="(1) 美团"
        startYear={2025}
        startMonth={9}
        endYear={2026}
        endMonth={1}
        position="前端开发实习生"
        projectName="钱管家"
        techStack="React、TypeScript"
        description="负责**核心业务**模块开发"
        tasks={[
          "将 LCP 从 3.0s 优化至 **1.5s（↓50%）**",
          "重构组件，提升*代码复用率*"
        ]}
      />
    </main>
  );
}
```

## 组件列表

### SectionHeader

区域标题组件，用于简历各模块的标题展示。

```tsx
<SectionHeader title="教育背景" />
```

**Props**

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| title | string | ✅ | 区域标题 |
| className | string | - | 自定义类名 |

---

### ItemHeader

条目标题组件，左侧显示名称，右侧显示时间。

```tsx
<ItemHeader
  leftContent="上海大学 · 信息工程"
  startYear={2023}
  startMonth={7}
  endYear={2027}
  endMonth={6}
/>
```

**Props**

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| leftContent | string | ✅ | 左侧名称信息 |
| startYear | number | ✅ | 开始年份 |
| startMonth | number | - | 开始月份 (1-12) |
| startDate | number | - | 开始日期 |
| endYear | number | ✅ | 结束年份 |
| endMonth | number | - | 结束月份 (1-12) |
| endDate | number | - | 结束日期 |
| className | string | - | 自定义类名 |

**时间格式示例**

```tsx
// 只有年份 -> "2023 年 - 2024 年"
<ItemHeader leftContent="项目" startYear={2023} endYear={2024} />

// 年月 -> "2023 年 7 月 - 2027 年 6 月"
<ItemHeader leftContent="项目" startYear={2023} startMonth={7} endYear={2027} endMonth={6} />

// 年月日 -> "2023 年 7 月 1 日 - 2027 年 6 月 30 日"
<ItemHeader leftContent="项目" startYear={2023} startMonth={7} startDate={1} endYear={2027} endMonth={6} endDate={30} />
```

---

### ProjectItem

项目/工作经历组件，基于 ItemHeader 封装，展示完整的项目信息。

```tsx
<ProjectItem
  leftContent="(1) 美团"
  startYear={2025}
  startMonth={9}
  endYear={2026}
  endMonth={1}
  position="前端开发实习生"
  projectName="钱管家"
  projectLink="https://example.com"
  techStack="React、TypeScript、Vite"
  description="负责商家端的前端开发工作"
  tasks={[
    "完成了 XX 功能的开发",
    "优化了 YY 模块的性能"
  ]}
/>
```

**Props**

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| leftContent | string | ✅ | 公司/项目名称 |
| startYear | number | ✅ | 开始年份 |
| startMonth | number | - | 开始月份 |
| endYear | number | ✅ | 结束年份 |
| endMonth | number | - | 结束月份 |
| position | string | ✅ | 岗位名称 |
| projectName | string | ✅ | 项目名称 |
| projectLink | string | - | 项目链接（有则渲染为 `<a>` 标签） |
| techStack | string | ✅ | 技术栈 |
| description | string | ✅ | 项目描述（支持 Markdown） |
| tasks | string[] | ✅ | 主要工作列表（支持 Markdown） |
| className | string | - | 自定义类名 |

---

## 工具函数

### withMarkdown

HOC 高阶组件，自动对组件的 string props 进行 Markdown 解析。

```tsx
import { withMarkdown } from './component';

// 包装组件，自动解析 Markdown
export default withMarkdown(MyComponent);

// 额外排除某些 props
export default withMarkdown(MyComponent, { exclude: ['position'] });

// 仅解析指定的 props
export default withMarkdown(MyComponent, { only: ['description', 'tasks'] });
```

**支持的 Markdown 语法**

| 语法 | 渲染结果 | 示例 |
|------|---------|------|
| `**text**` | `<strong>` | **粗体** |
| `*text*` | `<em>` | *斜体* |
| `` `code` `` | `<code>` | `代码` |
| `[text](url)` | `<a>` | 链接 |

**自动排除规则**

以下 props 不会被解析：
- 默认排除：`className`、`id`、`href`、`src`、`alt`、`title` 等
- 后缀排除：以 `Link`、`Url`、`Href`、`Id`、`Class`、`Key`、`Ref` 结尾的 props

---

### parseMarkdown

独立的 Markdown 解析函数，可单独使用。

```tsx
import { parseMarkdown } from './component';

const node = parseMarkdown("这是**粗体**和*斜体*");
// 返回: <>这是<strong>粗体</strong>和<em>斜体</em></>
```

---

## 目录结构

```
component/
├── SectionHeader/          # 区域标题组件
│   ├── SectionHeader.tsx
│   ├── SectionHeader.css
│   └── index.ts
├── ItemHeader/             # 条目标题组件
│   ├── ItemHeader.tsx
│   ├── ItemHeader.css
│   └── index.ts
├── ProjectItem/            # 项目经历组件
│   ├── ProjectItem.tsx
│   ├── ProjectItem.css
│   └── index.ts
├── utils/                  # 工具函数
│   ├── parseMarkdown.tsx   # Markdown 解析
│   ├── withMarkdown.tsx    # HOC 高阶组件
│   └── index.ts
├── index.ts                # 统一导出
└── README.md
```

## 样式定制

组件使用 BEM 命名规范，可通过覆盖 CSS 类名自定义样式：

```css
/* 自定义区域标题样式 */
.section-header__title {
  color: #1E40AF;
  font-size: 16pt;
}

/* 自定义分隔线样式 */
.section-header__divider {
  background: linear-gradient(to right, #1E40AF, transparent);
}
```

## License

MIT