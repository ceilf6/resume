/**
 * ItemHeader 组件
 * 用于展示工作/项目/教育经历的标题行
 * 左侧显示名称信息，右侧显示时间信息
 */

import React from 'react';
import './ItemHeader.css';

interface ItemHeaderProps {
  /** 左侧信息（如：上海大学 · 信息工程 或 (1) 美团） */
  leftContent: string;
  /** 右侧时间信息（如：2023 年 7 月 – 2027 年 6 月） */
  rightContent: string;
  /** 自定义类名 */
  className?: string;
}

/**
 * ItemHeader 组件
 * @example
 * <ItemHeader
 *   leftContent="上海大学 · 信息工程"
 *   rightContent="2023 年 7 月 – 2027 年 6 月"
 * />
 * @example
 * <ItemHeader
 *   leftContent="(1) 美团"
 *   rightContent="2022 年 1 月 – 2023 年 12 月"
 * />
 */
const ItemHeader: React.FC<ItemHeaderProps> = ({
  leftContent,
  rightContent,
  className = ''
}) => {
  return (
    <div className={`item-header ${className}`.trim()}>
      <div className="item-header__left">{leftContent}</div>
      <div className="item-header__right">{rightContent}</div>
    </div>
  );
};

export default ItemHeader;
