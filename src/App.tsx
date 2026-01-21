import React from 'react'

import SectionHeader from '../component/SectionHeader'
import ItemHeader from '../component/ItemHeader'
import ProjectItem from '../component/ProjectItem'
// 直接从 ../component 导入的还是打包文件
// import { SectionHeader, ItemHeader, ProjectItem } from '../component'
// 相对路径迭代，否则等检验还需要发包
// import { SectionHeader, ItemHeader, ProjectItem } from '@ceilf6/resume-components'

const App: React.FC = () => {
  return (
    <main className="page">
      {/* 顶部信息 */}
      <header>
        <h1>王景宏</h1>
        <address className="contact">
          <dl>
            {/* Github地址（important） */}
            <strong className="important">
              <div className="row">
                <dt>GitHub:</dt>
                <dd>
                  <a href="https://github.com/ceilf6">github.com/ceilf6</a>
                </dd>
              </div>
            </strong>
            {/* 基本信息 */}
            <div className="row">
              <dt>电话:</dt>
              <dd>
                19857907795
                {/* <a href="tel:+8619857907795">19857907795</a> */}
              </dd>
              <dt>邮箱:</dt>
              <dd>
                3506456886@qq.com
                {/* <a href="mailto:3506456886@qq.com">3506456886@qq.com</a> */}
              </dd>
              <dt>求职方向:</dt>
              <dd>大前端开发+AI应用</dd>
              <dt>年龄:</dt>
              <dd>21</dd>
              <dt>性别:</dt>
              <dd>男</dd>
            </div>
            {/* 博客链接 */}
            <strong>
              <div className="row">
                <dt>Blog:</dt>
                <dd>
                  <a href="https://blog.csdn.net/2301_78856868">
                    blog.csdn.net/2301_78856868
                  </a>
                </dd>
              </div>
            </strong>
          </dl>
        </address>
      </header>

      {/* 中部内容区域 */}
      <div>
        {/* 教育背景 */}
        <section className='education'>
          <SectionHeader title="教育背景" />
          <ItemHeader
            leftContent="上海大学(211) · 信息工程"
            startYear={2023}
            startMonth={7}
            endYear={2027}
            endMonth={6}
          />
        </section>

        {/* 专业技能 */}
        <section className='skills'>
          <SectionHeader title="专业技能" />
          {/* 专业技能列表 */}
          <ul>
            <li>熟悉 HTML5, CSS3, JavaScript, TypeScript, Python, C++</li>
            <li>了解 Vue, React 中 UI 和数据的桥接逻辑</li>
          </ul>
        </section>

        {/* 工作经历 */}
        <section className='experience'>
          <SectionHeader title="工作经历" />
          {/* 经历1: 美团 */}
          <div>
            <ProjectItem
              leftContent='(1) 美团'
              startYear={2025}
              startMonth={9}
              endYear={2026}
              endMonth={1}
              position='**前端开发实习生**'
              projectName='**钱管家、基建组件库**'
              techStack='**React、Vue2、HTML5、CSS3、JavaScript、TypeScript**'
              description='美团旧版钱管家系统状态管理混乱、框架设计不合理，且面临海外企业的使用需求，急需重构。同时美团财务前端正在构建一套更切合业务场景的基建组件库，提高代码复用率和安全性，减轻开发人员的负担'
              tasks={['从逻辑优化的基础出发，将钱管家原先 Vue2 框架的 PC 和移动端 i 站**双端**一并重构为 React，双端间通过business 层优化代码的复用率与可拓展性。原先组件模块间耦合度极高，经过重构后完全解藕，并通过胶水层进行拼接，使得代码强健且可拓展。重构后将核心业务模块中 10+页面平均 LCP 从 3.0s 优化至 1.5s（↓50%），显著提升首屏内容可见速度；将页面 CLS 从 0.05 降至 0.01（↓80%），减少布局偏移并提升视觉稳定性；将核心页面 INP 从~100ms 优化至~50ms（↓50%），显著改善交互响应速度。',
                '迭代使用美团组件库的**新组件**，进行定制化开发，并和基建组一同优化组件库，例如表单相关通过优化 useForm 提升渲染性能等',
                '学习KMP分层共享策略、通过monorepo架构统一了系统多端，同时基于SDD规范设计国际化改造方案，接入i18n平台SDK，并通过MCP实现多端硬编码文案的自动化替换，完成钱管家全域、多端语言动态化支持']}
            />
          </div>
          {/* 经历2: 七牛 */}
          <div>
            <ProjectItem
              leftContent='(2) 七牛'
              startYear={2025}
              startMonth={6}
              endYear={2025}
              endMonth={9}
              position='**Web架构实习生**'
              projectName='**XBuilder**'
              projectLink='https://github.com/ceilf6/Xbuilder'
              techStack='**Vue3、HTML5、CSS3、JavaScript、TypeScript、XGO、Vite、npm、Git、Vercel**'
              description='通过构建XBuilder平台的分享机制，提高平台的传播度，宣传XBuilder游戏编译器和XGO语言'
              tasks={['负责模块设计与接口设计，实现代码的低耦合与强健',
                '架构和编写了海报组件，通过组件反向暴露方法实现嵌入截屏、项目信息与渲染DOM节点的统一管理',
                '架构和编写了截屏分享和录屏分享组件，通过模态框统一管理组件状态，优化了父子组件通信',
                '串联逻辑，丝滑实现自动暂停、继续、截屏、录屏等，如Record录屏业务实体的从前端到云端、后端']}
            />
          </div>
        </section>

        {/* 荣誉获奖 */}
        <section className="accessory">
          <SectionHeader title="荣誉获奖" />
          {/* 附属信息列表 */}
          <ul>
            <li>天梯程序设计赛<strong>国家级二等奖</strong></li>
            <li>睿抗开发者大赛<strong>国家级二等奖</strong></li>
            <li>字节工程训练营证书</li>
            <li>腾讯优秀开源证书</li>
            <li>腾讯大前端工程营证书</li>
            <li>Datawhale优秀Agent开发者</li>
            <li>百度之星<strong>金奖</strong></li>
            <li>码蹄杯程序设计大赛<strong>金奖</strong></li>
            <li>美国数学建模大赛H奖</li>
            <li>CSP证书</li>
            <li>从0到1<strong>国家级项目</strong>负责人</li>
            <li>上海大学<strong>优秀学生</strong></li>
            <li>上海大学<strong>科创奖学金</strong></li>
            <li>学院四佳学生</li>
            <li>最受欢迎学习委员</li>
            <li>英语、法语都支持工作交流</li>
          </ul>
        </section>
      </div>

      {/* 底部区域 - 附带链接 */}
      <footer>
        <address className="row">
          <pre>
            附件链接:{' '}
            <a href="https://resume-awards.vercel.app/">
              resume-awards.vercel.app/
            </a>
            {'  '}
            简历链接:{' '}
            <a href="https://ceilf6.github.io/resume/">
              ceilf6.github.io/resume/
            </a>
          </pre>
        </address>
      </footer>
    </main>
  )
}

export default App
