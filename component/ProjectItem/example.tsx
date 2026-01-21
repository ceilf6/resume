/**
 * ProjectItem 组件使用示例
 */
import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectItemExample: React.FC = () => {
    return (
        <div>
            {/* 示例1: no link */}
            <ProjectItem
                leftContent='(1) 美团'
                startYear={2025}
                startMonth={9}
                endYear={2026}
                endMonth={1}
                position='前端开发实习生'
                projectName='钱管家、基建组件库'
                techStack='React、Vue2、HTML5、CSS3、JavaScript、TypeScript'
                description='美团旧版钱管家系统状态管理混乱、框架设计不合理，且面临海外企业的使用需求，急需重构。同时美团财务前端正在构建一套更切合业务场景的基建组件库，提高代码复用率和安全性，减轻开发人员的负担'
                tasks={['',
                    '',
                    '']}
            />
            {/* 示例2: has link */}
            <ProjectItem
                leftContent='(2) 七牛'
                startYear={2025}
                startMonth={6}
                endYear={2025}
                endMonth={9}
                position='Web架构实习生'
                projectName='XBuilder'
                projectLink='https://github.com/ceilf6/Xbuilder'
                techStack='Vue3、HTML5、CSS3、JavaScript、TypeScript、XGO、Vite、npm、Git、Vercel'
                description='通过构建XBuilder平台的分享机制，提高平台的传播度，宣传XBuilder游戏编译器和XGO语言'
                tasks={['',
                    '',
                    '',
                    '']}
            />
        </div>
    )
};

export default ProjectItemExample;