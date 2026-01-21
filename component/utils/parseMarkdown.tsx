/**
 * Markdown 解析工具函数
 * 支持的语法：
 * - **bold** -> <strong>
 * - *italic* -> <em>
 * - `code` -> <code>
 * - [text](url) -> <a>
 */

import React from 'react';

type Token = {
    type: 'text' | 'strong' | 'em' | 'code' | 'link';
    content: string;
    href?: string;
};

/**
 * 将 Markdown 文本解析为 Token 数组
 */
const tokenize = (text: string): Token[] => {
    const tokens: Token[] = [];
    // 匹配顺序：链接 > 粗体 > 斜体 > 行内代码
    const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`)/g;

    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        // 添加匹配前的普通文本
        if (match.index > lastIndex) {
            tokens.push({
                type: 'text',
                content: text.slice(lastIndex, match.index)
            });
        }

        // 判断匹配类型
        if (match[2] !== undefined && match[3] !== undefined) {
            // 链接 [text](url)
            tokens.push({
                type: 'link',
                content: match[2],
                href: match[3]
            });
        } else if (match[4] !== undefined) {
            // 粗体 **text**
            tokens.push({
                type: 'strong',
                content: match[4]
            });
        } else if (match[5] !== undefined) {
            // 斜体 *text*
            tokens.push({
                type: 'em',
                content: match[5]
            });
        } else if (match[6] !== undefined) {
            // 行内代码 `code`
            tokens.push({
                type: 'code',
                content: match[6]
            });
        }

        lastIndex = match.index + match[0].length;
    }

    // 添加剩余的普通文本
    if (lastIndex < text.length) {
        tokens.push({
            type: 'text',
            content: text.slice(lastIndex)
        });
    }

    return tokens;
};

/**
 * 将 Token 数组渲染为 React 节点
 */
const renderTokens = (tokens: Token[]): React.ReactNode => {
    return tokens.map((token, index) => {
        switch (token.type) {
            case 'strong':
                return <strong key={index}>{token.content}</strong>;
            case 'em':
                return <em key={index}>{token.content}</em>;
            case 'code':
                return <code key={index}>{token.content}</code>;
            case 'link':
                return (
                    <a key={index} href={token.href} target="_blank" rel="noopener noreferrer">
                        {token.content}
                    </a>
                );
            default:
                return <React.Fragment key={index}>{token.content}</React.Fragment>;
        }
    });
};

/**
 * 解析 Markdown 文本为 React 节点
 * @param text Markdown 格式的文本
 * @returns React 节点
 * @example
 * parseMarkdown("这是**粗体**和*斜体*")
 * // 返回: <>这是<strong>粗体</strong>和<em>斜体</em></>
 */
export const parseMarkdown = (text: string): React.ReactNode => {
    const tokens = tokenize(text);
    return renderTokens(tokens);
};

export default parseMarkdown;