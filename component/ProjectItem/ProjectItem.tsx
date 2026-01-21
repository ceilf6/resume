/**
 * ProjectItem 组件
 * 用于展示项目/工作经历的完整信息
 * 基于 ItemHeader 封装，增加岗位、项目、技术栈、描述、主要工作等信息
 */

import React from 'react';
import ItemHeader from '../ItemHeader/ItemHeader';
import { useMarkdown } from '../MarkdownContext';
import './ProjectItem.css';

/*
考虑到一个标准项目对外展示的信息，强制必填
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

/**
 * ProjectItem 组件
 * @example
 * <ProjectItem
 *   leftContent="(1) 美团"
 *   startYear={2025}
 *   startMonth={9}
 *   endYear={2026}
 *   endMonth={1}
 *   position="前端开发实习生"
 *   projectName="美团外卖商家端"
 *   projectLink="https://example.com"
 *   techStack="React + TypeScript + Vite"
 *   description="负责商家端的前端开发工作"
 *   tasks={[
 *     "完成了 XX 功能的开发",
 *     "优化了 YY 模块的性能",
 *     "重构了 ZZ 组件"
 *   ]}
 * />
 */
const ProjectItem: React.FC<ProjectItemProps> = ({
  leftContent,
  startYear,
  startMonth,
  startDate,
  endYear,
  endMonth,
  endDate,
  position,
  projectName,
  projectLink,
  techStack,
  description,
  tasks,
  className = ''
}) => {
  const { parse } = useMarkdown();

  return (
    <article className={`project-item ${className}`.trim()}>
      {/* 头部: 公司/项目名称 + 时间 */}
      <ItemHeader
        leftContent={leftContent}
        startYear={startYear}
        startMonth={startMonth}
        startDate={startDate}
        endYear={endYear}
        endMonth={endMonth}
        endDate={endDate}
      />

      {/* 详细信息 */}
      <dl className="project-item__details">
        {/* 岗位名称 */}
        <div className="project-item__row">
          <dt>岗位: </dt>
          <dd>{position}</dd>
        </div>

        {/* 工作项目 */}
        <div className="project-item__row">
          <dt>工作项目: </dt>
          <dd>
            {projectLink ? (
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                {projectName}
              </a>
            ) : (
              projectName
            )}
          </dd>
        </div>

        {/* 技术栈 */}
        <div className="project-item__row">
          <dt>技术栈: </dt>
          <dd>{techStack}</dd>
        </div>

        {/* 项目描述 */}
        <div className="project-item__row">
          <dt>项目描述: </dt>
          <dd>{parse(description)}</dd>
        </div>
      </dl>

      {/* 主要工作 */}
      <section className="project-item__tasks">
        <h4 className="project-item__tasks-title">主要工作: </h4>
        <ol className="project-item__tasks-list">
          {tasks.map((task, index) => (
            <li key={index}>{parse(task)}</li>
          ))}
        </ol>
      </section>
    </article>
  );
};

export default ProjectItem;
