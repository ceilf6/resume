/**
 * 区域块头部组件
 * 用于简历各个模块的标题展示，标题下方带有分隔线
 */

import React from 'react';
import './section-header.css';

interface SectionHeaderProps {
  /** 区域标题文本 */
  title: string;
  /** 自定义类名 */
  className?: string;
}

/**
 * SectionHeader 组件
 * @example
 * <SectionHeader title="教育背景" />
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  className = ''
}) => {
  return (
    <div className={`section-header ${className}`.trim()}>
      <h2 className="section-header__title">{title}</h2>
      <div className="section-header__divider" aria-hidden="true" />
    </div>
  );
};

export default SectionHeader;