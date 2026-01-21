/**
 * withMarkdown HOC
 * 自动对组件的所有 string 类型 props 进行 Markdown 解析
 */

import React from 'react';
import { parseMarkdown } from './parseMarkdown';

/** 默认排除的 props（不进行 Markdown 解析） */
const DEFAULT_EXCLUDE: string[] = [
  'className',
  'id',
  'style',
  'href',
  'src',
  'alt',
  'title',
  'name',
  'type',
  'value',
  'placeholder',
  // 以 Link、Url、Id、Class、Key 结尾的 props
];

/** 判断 prop 是否应该排除 */
const shouldExclude = (key: string, excludeList: string[]): boolean => {
  // 精确匹配排除列表
  if (excludeList.includes(key)) return true;
  // 以特定后缀结尾的排除
  const excludeSuffixes = ['Link', 'Url', 'Href', 'Id', 'Class', 'Key', 'Ref'];
  return excludeSuffixes.some(suffix => key.endsWith(suffix));
};

interface WithMarkdownOptions {
  /** 额外排除的 props */
  exclude?: string[];
  /** 仅解析的 props（如果设置，则只解析这些） */
  only?: string[];
}

/**
 * 处理 props，对 string 类型自动解析 Markdown
 */
const parseProps = <P extends object>(
  props: P,
  options: WithMarkdownOptions = {}
): P => {
  const { exclude = [], only } = options;
  const excludeList = [...DEFAULT_EXCLUDE, ...exclude];
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(props)) {
    // 检查是否应该解析
    const shouldParse = only
      ? only.includes(key)  // only 模式：仅解析指定的
      : !shouldExclude(key, excludeList);  // 排除模式：排除指定的

    if (shouldParse && typeof value === 'string') {
      // string -> 解析 Markdown
      result[key] = parseMarkdown(value);
    } else if (shouldParse && Array.isArray(value)) {
      // 数组 -> 遍历处理每个元素
      result[key] = value.map(item =>
        typeof item === 'string' ? parseMarkdown(item) : item
      );
    } else {
      // 其他类型或排除的 props 保持不变
      result[key] = value;
    }
  }

  return result as P;
};

/**
 * HOC: 自动对组件的 string props 进行 Markdown 解析
 * @param Component 要包装的组件
 * @param options 配置选项
 * @example
 * // 默认排除 className、href 等
 * export default withMarkdown(ProjectItem);
 * @example
 * // 额外排除某些 props
 * export default withMarkdown(ProjectItem, { exclude: ['position'] });
 * @example
 * // 仅解析指定的 props
 * export default withMarkdown(ProjectItem, { only: ['description', 'tasks'] });
 */
export function withMarkdown<P extends object>(
  Component: React.ComponentType<P>,
  options: WithMarkdownOptions = {}
): React.FC<P> {
  const WrappedComponent: React.FC<P> = (props) => {
    const parsedProps = parseProps(props, options);
    return <Component {...parsedProps} />;
  };

  // 保留原组件名称，方便调试
  WrappedComponent.displayName = `withMarkdown(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
}

export default withMarkdown;
