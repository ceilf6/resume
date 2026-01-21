import React from 'react';

/**
 * ItemHeader 组件
 * 用于展示工作/项目/教育经历的标题行
 * 左侧显示名称信息，右侧显示时间信息
 */

interface ItemHeaderProps {
    /** 左侧信息（如: 上海大学 · 信息工程 或 (1) 美团） */
    leftContent: string;
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
declare const ItemHeader: React.FC<ItemHeaderProps>;

/**
 * 区域块头部组件
 * 用于简历各个模块的标题展示，标题下方带有分隔线
 */

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
declare const SectionHeader: React.FC<SectionHeaderProps>;

/**
 * ProjectItem 组件
 * 用于展示项目/工作经历的完整信息
 * 基于 ItemHeader 封装，增加岗位、项目、技术栈、描述、主要工作等信息
 */

interface ProjectItemProps {
    /** 左侧信息（如: (1) 美团） */
    leftContent: string;
    /** 开始年份 */
    startYear: number;
    /** 开始月份 (1-12) */
    startMonth?: number;
    /** 开始日期 */
    startDate?: number;
    /** 结束年份 */
    endYear: number;
    /** 结束月份 (1-12) */
    endMonth?: number;
    /** 结束日期 */
    endDate?: number;
    /** 岗位名称 */
    position: string;
    /** 工作项目名称 */
    projectName: string;
    /** 工作项目链接（可选，有则用 a 标签） */
    projectLink?: string;
    /** 技术栈 */
    techStack: string;
    /** 项目描述 */
    description: string;
    /** 主要工作（字符串列表） */
    tasks: string[];
    /** 自定义类名 */
    className?: string;
}
declare const _default: React.FC<ProjectItemProps>;

export { ItemHeader, _default as ProjectItem, SectionHeader };
