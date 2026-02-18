/**
 * ItemHeader 组件
 * 用于展示工作/项目/教育经历的标题行
 * 左侧显示名称信息，右侧显示时间信息
 */

import React from "react";
import "./ItemHeader.css";

interface ItemHeaderProps {
  /** 左侧信息（如: 上海大学(211) 或 (1) 美团） */
  leftContent: string;
  /** 居中信息（如: 信息工程、软件工程师） */
  midContent?: string;
  /** 开始年份 */
  startYear: number;
  /** 开始月份 (1-12) */
  startMonth?: number;
  /** 开始日期 (不同月份范围不同) */
  startDate?: number;
  /** 结束年份 */
  endYear: number;
  /** 结束月份 (1-12) */
  endMonth?: number;
  /** 结束日期 (不同月份范围不同) */
  endDate?: number;
  /** 自定义类名 */
  className?: string;
}

/**
 * ItemHeader 组件
 * @example
 * // 只有年份
 * <ItemHeader
 *   leftContent="项目经历"
 *   startYear={2023}
 *   endYear={2024}
 * />
 * @example
 * // 年份 + 月份
 * <ItemHeader
 *   leftContent="上海大学 · 信息工程"
 *   startYear={2023}
 *   startMonth={7}
 *   endYear={2027}
 *   endMonth={6}
 * />
 * @example
 * // 年份 + 月份 + 日期
 * <ItemHeader
 *   leftContent="(1) 美团"
 *   startYear={2025}
 *   startMonth={9}
 *   startDate={1}
 *   endYear={2026}
 *   endMonth={1}
 *   endDate={15}
 * />
 */
const ItemHeader: React.FC<ItemHeaderProps> = ({
  leftContent,
  midContent,
  startYear,
  startMonth,
  startDate,
  endYear,
  endMonth,
  endDate,
  className = "",
}) => {
  // 生成 ISO 8601 格式的 dateTime
  const formatDateTime = () => {
    let start = `${startYear}`;
    let end = `${endYear}`;

    if (startMonth !== undefined) {
      start += `-${String(startMonth).padStart(2, "0")}`;
      if (startDate !== undefined) {
        start += `-${String(startDate).padStart(2, "0")}`;
      }
    }

    if (endMonth !== undefined) {
      end += `-${String(endMonth).padStart(2, "0")}`;
      if (endDate !== undefined) {
        end += `-${String(endDate).padStart(2, "0")}`;
      }
    }

    return `${start}/${end}`;
  };

  // 生成中文显示文本
  const formatDisplayText = () => {
    let start = `${startYear} 年`;
    let end = `${endYear} 年`;

    if (startMonth !== undefined) {
      start += ` ${startMonth} 月`;
      if (startDate !== undefined) {
        start += ` ${startDate} 日`;
      }
    }

    if (endMonth !== undefined) {
      end += ` ${endMonth} 月`;
      if (endDate !== undefined) {
        end += ` ${endDate} 日`;
      }
    }

    return `${start} - ${end}`;
  };

  const dateTime = formatDateTime();
  const displayText = formatDisplayText();

  return (
    <div className={`item-header ${className}`.trim()}>
      <h3 className="item-header__left">{leftContent}</h3>
      {midContent && <span className="item-header__mid">{midContent}</span>}
      <time className="item-header__right" dateTime={dateTime}>
        {displayText}
      </time>
    </div>
  );
};

export default ItemHeader;
