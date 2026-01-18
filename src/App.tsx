import React from 'react'
import { SectionHeader, ItemHeader } from '../component'

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
                <dt>GitHub: </dt>
                <dd>
                  <a href="https://github.com/ceilf6">github.com/ceilf6</a>
                </dd>
              </div>
            </strong>

            {/* 基本信息 */}
            <div className="row">
              <dt>电话: </dt>
              <dd>
                19857907795
                {/* <a href="tel:+8619857907795">19857907795</a> */}
              </dd>
              <dt>邮箱: </dt>
              <dd>
                3506456886@qq.com
                {/* <a href="mailto:3506456886@qq.com">3506456886@qq.com</a> */}
              </dd>
              <dt>求职方向: </dt>
              <dd>大前端开发+AI应用</dd>
              <dt>年龄: </dt>
              <dd>21</dd>
              <dt>性别: </dt>
              <dd>男</dd>
            </div>

            {/* 博客链接 */}
            <div className="row">
              <dt>Blog: </dt>
              <dd>
                <a href="https://blog.csdn.net/2301_78856868">
                  blog.csdn.net/2301_78856868
                </a>
              </dd>
            </div>
          </dl>
        </address>
      </header>

      {/* 中部内容区域 */}
      <div>
        {/* 教育背景 */}
        <section>
          <SectionHeader title="教育背景" />
          <ItemHeader
            leftContent="上海大学(211) · 信息工程"
            rightContent="2023 年 7 月 - 2027 年 6 月"
          />
        </section>

        {/* 专业技能 */}
        <section>
          <SectionHeader title="专业技能" />
        </section>

        {/* 工作经历 */}
        <section>
          <SectionHeader title="工作经历" />
          {/* 经历1: 美团 */}
          <div>
            <ItemHeader
              leftContent="(1) 美团"
              rightContent="2025 年 9 月 - 2026 年 1 月"
            />
          </div>
        </section>

        {/* 荣誉获奖 */}
        <section>
          <SectionHeader title="荣誉获奖" />
        </section>
      </div>

      {/* 底部区域 */}
      <footer>
        <address className="row">
          <pre>
            在线链接:{' '}
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
