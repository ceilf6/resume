import React from "react";

import SectionHeader from "../component/SectionHeader";
import ItemHeader from "../component/ItemHeader";
import ProjectItem from "../component/ProjectItem";
// 直接从 ../component 导入的还是打包文件
// import { SectionHeader, ItemHeader, ProjectItem } from '../component'
// 相对路径迭代，否则等检验还需要发包
// import { SectionHeader, ItemHeader, ProjectItem } from '@ceilf6/resume-components'

import { calcAge } from "../utils";

const App: React.FC = () => {
  return (
    <main className="page">
      {/* 顶部信息 */}
      <header>
        <h1>王景宏</h1>
        <address className="contact">
          <dl>
            {/* Github地址（important） */}
            <strong className="larger">
              <div className="row">
                <dt>GitHub:</dt>
                <dd>
                  <a href="https://github.com/ceilf6" target="_blank">
                    github.com/ceilf6
                  </a>
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
              <dd>AI应用+全栈开发</dd>
              <dt>年龄:</dt>
              <dd>{calcAge(2005, 5, 13)}</dd>
              <dt>性别:</dt>
              <dd>男</dd>
            </div>
            {/* 博客链接 */}
            <strong>
              <div className="row">
                <dt>Blog:</dt>
                <dd>
                  <a href="https://blog.csdn.net/2301_78856868" target="_blank">
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
        <section className="education">
          <SectionHeader title="教育背景" />
          <ItemHeader
            leftContent="上海大学(211)"
            midContent="信息工程"
            startYear={2023}
            startMonth={7}
            endYear={2027}
            endMonth={6}
          />
        </section>

        {/* 专业技能 */}
        <section className="skills">
          <SectionHeader title="专业技能" />
          {/* 专业技能列表 */}
          <ul>
            <li>
              持续关注并实践<strong> AI 应用开发</strong>，了解大模型底层{" "}
              {/* <strong> */}
              神经网络RNN、Transformer {/* </strong>  */}
              架构；熟悉 <strong>RAG、Skill、MCP</strong> 等基建；同时维护{" "}
              <a href="https://github.com/ceilf6/FrontAgent" target="_blank">
                <strong>前端智能体</strong>
              </a>{" "}
              等多个开源项目以及{" "}
              <a
                href="https://huggingface.co/ceilf6/frontagent-planner-7B-lora"
                target="_blank"
              >
                <strong>Claude 蒸馏了 Qwen 进行 SFT 的 LoRA 模型</strong>
              </a>
            </li>
            <li>
              通过不断探寻更优的<strong>研发范式</strong>，提高与 AI
              合作的效率与质量，例如 <strong>Harness、SDD、Wiki</strong>{" "}
              等智能体工程化实践
            </li>
            <li>
              熟练使用 <strong>HTML5</strong> {/* className="text-[1.05em]" */}
              进行语义化开发；熟悉 <strong>CSS</strong>{" "}
              样式设置，理解视觉格式化模型、块级格式化上下文
            </li>
            <li>
              理解原型链、期约异步、作用域链、this 指向、闭包、垃圾回收等{" "}
              <strong>JS</strong> 核心原理，此外熟悉{" "}
              <strong>TS、C++、Python</strong> 语言
            </li>
            <li>
              熟悉 <strong>浏览器</strong>{" "}
              组成、渲染流程、事件循环、缓存、离线存储、资源提示词
            </li>
            <li>
              熟悉
              AJAX、跨域、cookie、TCP、各版本HTTP、SSL、HTTPS、CSRF、XSS、DNS、WebSocket等{" "}
              <strong>网络</strong> 知识
            </li>
            <li>
              熟悉 <strong>React</strong>{" "}
              的JSX、组件状态、HOC、Ref转发、上下文等基本概念，及其整体架构和渲染流程。有{" "}
              <strong>RN</strong> 开发经验
            </li>
            <li>
              熟悉 <strong>Vue</strong>{" "}
              的模版、组件对象配置、通信、实例属性、路由插件、组合式API、响应化实现原理、Vuex
            </li>
            <li>
              熟悉模块化、包管理器、Less、打包优化等 <strong>工程化</strong>{" "}
              开发
            </li>
            <li>
              了解后端 <strong>NodeJS</strong>{" "}
              的生命周期以及Net、HTTP、文件等模块
            </li>
          </ul>
        </section>

        {/* 工作经历 */}
        <section className="experience">
          <SectionHeader title="工作经历" />
          {/* 经历1: 美团 */}
          <div>
            <ProjectItem
              leftContent="(1) 美团"
              startYear={2025}
              startMonth={9}
              endYear={2026}
              endMonth={5}
              midContent="软件开发(实习)"
              // position="**前端开发实习生**"
              projectName="**美团APP到店页面、“钱管家”等多个内部平台、基建组件库**"
              techStack="**React、React Native、Vue2、HTML5、CSS3、JavaScript、TypeScript**"
              description="1. 团队正在全速 AI 化；2. 美团APP到店页面的长期维护和功能拓展；3. 旧版钱管家系统状态管理混乱、框架设计不合理，急需重构；4. 美团内部正在构建一套更切合业务场景的基建组件库"
              tasks={[
                "通过构建团队知识库、智能体等方式帮助团队进行 **AI 提效转型**，分享 Claude Code 源码、Skill、MCP、Claw 等内容，提升团队 AI 认知",
                "维护和拓展美团APP的到店页面，熟悉包发布、Git Flow、联调测试等开发、上线流程",
                // "从逻辑优化的基础出发，
                "将钱管家从原先 Vue2 框架重构为 React，并通过分层共享策略优化多端之间的代码复用率与可拓展性",
                // 的 PC 和移动端 i 站**双端**一并
                // 。原先组件模块间耦合度极高，经过重构后完全解藕，并通过胶水层进行适配，使得代码强健且可拓展。", // 重构后将核心业务模块中 10+页面平均 LCP 从 3.0s 优化至 1.5s（↓50%），显著提升首屏内容可见速度；将页面 CLS 从 0.05 降至 0.01（↓80%），减少布局偏移并提升视觉稳定性；将核心页面 INP 从~100ms 优化至~50ms（↓50%），显著改善交互响应速度。",
                // "迭代使用美团组件库的**新组件**，进行定制化开发，并和基建组一同优化组件库，例如表单相关通过优化 useForm 提升渲染性能等",
                // "学习KMP分层共享策略，同时基于SDD规范设计国际化改造方案，接入i18n平台SDK，并通过MCP实现多端硬编码文案的自动化替换，完成钱管家全域、多端语言动态化支持",
                // 、通过monorepo架构统一了系统多端，
              ]}
            />
          </div>
          {/* 经历2: 七牛 */}
          <div>
            <ProjectItem
              leftContent="(2) 七牛云"
              startYear={2025}
              startMonth={6}
              endYear={2025}
              endMonth={9}
              midContent="软件开发(实习)"
              // position="**Web架构实习生**"
              projectName="**XBuilder**"
              projectLink="https://github.com/ceilf6/Xbuilder"
              techStack="**Vue3、HTML5、CSS3、JavaScript、TypeScript、XGO、Vite、npm、Git、Vercel**"
              description="通过构建 XBuilder 平台的分享机制，提高平台的传播度，宣传游戏编译器和 XGO 语言"
              tasks={[
                // "负责模块设计与接口设计，实现代码的低耦合与强健",
                "架构和编写了海报组件，实现项目信息与渲染 DOM 节点的统一管理",
                "通过录屏组件打通页面视频从站内文件到第三方的链路",
                // 通过组件反向暴露方法实现嵌入截屏
                // "架构和编写了截屏分享和录屏分享组件，通过模态框统一管理组件状态，优化了父子组件通信",
              ]}
            />
          </div>
        </section>

        {/* 荣誉获奖 */}
        <section className="accessory">
          <SectionHeader title="荣誉获奖" />
          {/* 附属信息列表 */}
          <ul>
            <li>
              天梯程序设计赛<strong>国家级二等奖</strong>
            </li>
            <li>
              睿抗开发者大赛<strong>国家级二等奖</strong>
            </li>
            <li>字节工程训练营证书</li>
            <li>腾讯优秀开源证书</li>
            <li>腾讯大前端工程营证书</li>
            <li>Datawhale优秀Agent开发者</li>
            <li>
              百度之星<strong>金奖</strong>
            </li>
            <li>
              码蹄杯程序设计大赛<strong>金奖</strong>
            </li>
            <li>美国数学建模大赛H奖</li>
            <li>CSP证书</li>
            <li>
              从0到1<strong>国家级项目</strong>负责人
            </li>
            <li>
              上海大学<strong>优秀学生</strong>
            </li>
            <li>
              上海大学<strong>科创奖学金</strong>
            </li>
            <li>学院四佳学生</li>
            <li>最受欢迎学习委员</li>
            <li>英语、法语都支持工作交流</li>
          </ul>
        </section>
      </div>

      {/* 底部区域 - 附带链接 */}
      <footer>
        <address className="row">
          <cite>
            <pre>
              附件链接:{" "}
              <a href="https://ceilf6.github.io/ceilf6/" target="_blank">
                <strong>ceilf6.github.io/ceilf6/</strong>
              </a>
            </pre>
          </cite>
        </address>
      </footer>
    </main>
  );
};

export default App;
