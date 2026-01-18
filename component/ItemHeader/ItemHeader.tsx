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
  /** 开始年份 */
  startYear: number;
  /** 开始月份 (1-12) */
  startMonth: number;
  /** 结束年份 */
  endYear: number;
  /** 结束月份 (1-12) */
  endMonth: number;
  /** 自定义类名 */
  className?: string;
}

/**
 * ItemHeader 组件
 * @example
 * <ItemHeader
 *   leftContent="上海大学 · 信息工程"
 *   startYear={2023}
 *   startMonth={7}
 *   endYear={2027}
 *   endMonth={6}
 * />
 * @example
 * <ItemHeader
 *   leftContent="(1) 美团"
 *   startYear={2025}
 *   startMonth={9}
 *   endYear={2026}
 *   endMonth={1}
 * />
 */
const ItemHeader: React.FC<ItemHeaderProps> = ({
  leftContent,
  startYear,
  startMonth,
  endYear,
  endMonth,
  className = ''
}) => {
  // 生成 ISO 8601 格式的 dateTime (YYYY-MM/YYYY-MM)
  const dateTime = `${startYear}-${String(startMonth).padStart(2, '0')}/${endYear}-${String(endMonth).padStart(2, '0')}`;

  // 生成中文显示文本
  const displayText = `${startYear} 年 ${startMonth} 月 - ${endYear} 年 ${endMonth} 月`;

  return (
    <div className={`item-header ${className}`.trim()}>
      <div className="item-header__left">{leftContent}</div>
      <time className="item-header__right" dateTime={dateTime}>
        {displayText}
      </time>
    </div>
  );
};

export default ItemHeader;
