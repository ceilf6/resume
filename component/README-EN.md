# Resume Component Library

> A beautiful, elegant, and refined resume component library extracted from `ceilf6/resume`

[中文文档](./README.md)

A resume component library built with **React + TypeScript**, providing semantic, reusable components optimized for print and PDF export.

📦 npm: https://www.npmjs.com/package/@ceilf6/resume-components
🔖 Latest version: v0.1.12

---

## Features

- **Semantic HTML**: Uses semantic tags like `<article>`, `<section>`, `<time>`, `<dl>`
- **TypeScript Support**: Complete type definitions for excellent developer experience
- **Markdown Parsing**: Built-in `withMarkdown` HOC for automatic Markdown syntax parsing
- **Print Optimized**: Styles optimized for PDF / A4 printing
- **BEM Naming Convention**: CSS uses BEM naming to avoid style conflicts

---

## Installation

```bash
npm install @ceilf6/resume-components
# or
pnpm add @ceilf6/resume-components
# or
yarn add @ceilf6/resume-components
```

## Quick Start

```tsx
import {
  SectionHeader,
  ItemHeader,
  ProjectItem,
} from '@ceilf6/resume-components';

function Resume() {
  return (
    <main className="page">
      <SectionHeader title="Work Experience" />

      <ProjectItem
        leftContent="(1) Meituan"
        startYear={2025}
        startMonth={9}
        endYear={2026}
        endMonth={1}
        position="Frontend Development Intern"
        projectName="Money Manager"
        techStack="React, TypeScript"
        description="Responsible for **core business** module development"
        tasks={[
          "Optimized LCP from 3.0s to **1.5s (↓50%)**",
          "Refactored components to improve *code reusability*",
        ]}
      />
    </main>
  );
}
```

## Component List

### SectionHeader

Section title component for displaying headers of resume sections.

```tsx
<SectionHeader title="Education" />
```

**Props**

| Property | Type | Required | Description |
|------|------|------|------|
| title | string | ✅ | Section title |
| className | string | - | Custom class name |

---

### ItemHeader

Item header component that displays name on the left and time on the right.

```tsx
<ItemHeader
  leftContent="Shanghai University · Information Engineering"
  startYear={2023}
  startMonth={7}
  endYear={2027}
  endMonth={6}
/>
```

**Props**

| Property | Type | Required | Description |
|------|------|------|------|
| leftContent | string | ✅ | Left-side name information |
| startYear | number | ✅ | Start year |
| startMonth | number | - | Start month (1-12) |
| startDate | number | - | Start date |
| endYear | number | ✅ | End year |
| endMonth | number | - | End month (1-12) |
| endDate | number | - | End date |
| className | string | - | Custom class name |

**Time Format Examples**

```tsx
// Year only -> "2023 - 2024"
<ItemHeader leftContent="Project" startYear={2023} endYear={2024} />

// Year and month -> "July 2023 - June 2027"
<ItemHeader leftContent="Project" startYear={2023} startMonth={7} endYear={2027} endMonth={6} />

// Year, month, and date -> "July 1, 2023 - June 30, 2027"
<ItemHeader leftContent="Project" startYear={2023} startMonth={7} startDate={1} endYear={2027} endMonth={6} endDate={30} />
```

---

### ProjectItem

Project/work experience component built on ItemHeader that displays complete project information.

```tsx
<ProjectItem
  leftContent="(1) Meituan"
  startYear={2025}
  startMonth={9}
  endYear={2026}
  endMonth={1}
  position="Frontend Development Intern"
  projectName="Money Manager"
  projectLink="https://example.com"
  techStack="React, TypeScript, Vite"
  description="Responsible for frontend development of the merchant platform"
  tasks={[
    "Completed development of XX feature",
    "Optimized performance of YY module"
  ]}
/>
```

**Props**

| Property | Type | Required | Description |
|------|------|------|------|
| leftContent | string | ✅ | Company/project name |
| startYear | number | ✅ | Start year |
| startMonth | number | - | Start month |
| endYear | number | ✅ | End year |
| endMonth | number | - | End month |
| position | string | ✅ | Position title |
| projectName | string | ✅ | Project name |
| projectLink | string | - | Project link (renders as `<a>` tag if provided) |
| techStack | string | ✅ | Technology stack |
| description | string | ✅ | Project description (supports Markdown) |
| tasks | string[] | ✅ | List of main tasks (supports Markdown) |
| className | string | - | Custom class name |

---

## Utility Functions

### withMarkdown

HOC (Higher Order Component) that automatically parses Markdown in string props.

```tsx
import { withMarkdown } from './component';

// Wrap component to automatically parse Markdown
export default withMarkdown(MyComponent);

// Exclude specific props from parsing
export default withMarkdown(MyComponent, { exclude: ['position'] });

// Only parse specified props
export default withMarkdown(MyComponent, { only: ['description', 'tasks'] });
```

**Supported Markdown Syntax**

| Syntax | Rendered As | Example |
|------|---------|------|
| `**text**` | `<strong>` | **bold** |
| `*text*` | `<em>` | *italic* |
| `` `code` `` | `<code>` | `code` |
| `[text](url)` | `<a>` | link |

**Auto-Exclusion Rules**

The following props are not parsed:
- Default exclusions: `className`, `id`, `href`, `src`, `alt`, `title`, etc.
- Suffix exclusions: props ending with `Link`, `Url`, `Href`, `Id`, `Class`, `Key`, `Ref`

---

### parseMarkdown

Standalone Markdown parsing function that can be used independently.

```tsx
import { parseMarkdown } from './component';

const node = parseMarkdown("This is **bold** and *italic*");
// Returns: <>This is<strong>bold</strong>and<em>italic</em></>
```

---

## Directory Structure

```
component/
├── SectionHeader/          # Section title component
│   ├── SectionHeader.tsx
│   ├── SectionHeader.css
│   └── index.ts
├── ItemHeader/             # Item header component
│   ├── ItemHeader.tsx
│   ├── ItemHeader.css
│   └── index.ts
├── ProjectItem/            # Project experience component
│   ├── ProjectItem.tsx
│   ├── ProjectItem.css
│   └── index.ts
├── utils/                  # Utility functions
│   ├── parseMarkdown.tsx   # Markdown parsing
│   ├── withMarkdown.tsx    # HOC higher order component
│   └── index.ts
├── index.ts                # Unified export
└── README.md
```

## Style Customization

Components use BEM naming convention. You can customize styles by overriding CSS class names:

```css
/* Custom section title styles */
.section-header__title {
  color: #1E40AF;
  font-size: 16pt;
}

/* Custom divider styles */
.section-header__divider {
  background: linear-gradient(to right, #1E40AF, transparent);
}
```
