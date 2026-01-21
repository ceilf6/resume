/**
 * Markdown 解析上下文
 * 提供全局的 Markdown 解析能力，组件库内部自动使用
 */

import React, { createContext, useContext, useMemo } from 'react';
import { parseMarkdown } from '../utils';

interface MarkdownContextValue {
  /** 是否启用 Markdown 解析 */
  enabled: boolean;
  /** 解析函数 */
  parse: (text: string) => React.ReactNode;
}

const MarkdownContext = createContext<MarkdownContextValue>({
  enabled: true,
  parse: parseMarkdown
});

interface MarkdownProviderProps {
  /** 是否启用 Markdown 解析，默认 true */
  enabled?: boolean;
  children: React.ReactNode;
}

/**
 * Markdown 解析 Provider
 * 在应用顶层使用，为所有组件提供 Markdown 解析能力
 * @example
 * <MarkdownProvider>
 *   <App />
 * </MarkdownProvider>
 * @example
 * // 禁用 Markdown 解析
 * <MarkdownProvider enabled={false}>
 *   <App />
 * </MarkdownProvider>
 */
export const MarkdownProvider: React.FC<MarkdownProviderProps> = ({
  enabled = true,
  children
}) => {
  const value = useMemo<MarkdownContextValue>(() => ({
    enabled,
    parse: enabled ? parseMarkdown : (text) => text
  }), [enabled]);

  return (
    <MarkdownContext.Provider value={value}>
      {children}
    </MarkdownContext.Provider>
  );
};

/**
 * 获取 Markdown 解析函数的 Hook
 * 组件库内部使用
 * @example
 * const { parse } = useMarkdown();
 * return <dd>{parse(description)}</dd>;
 */
export const useMarkdown = () => {
  return useContext(MarkdownContext);
};

export default MarkdownContext;
