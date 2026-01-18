/**
 * SectionHeader 组件使用示例
 */

import React from 'react';
import SectionHeader from './section-header';

const App: React.FC = () => {
  return (
    <main className="page">
      {/* 教育背景 */}
      <section>
        <SectionHeader title="教育背景" />
        {/* 教育内容... */}
      </section>

      {/* 专业技能 */}
      <section>
        <SectionHeader title="专业技能" />
        {/* 技能内容... */}
      </section>

      {/* 工作经历 */}
      <section>
        <SectionHeader title="工作经历" />
        {/* 工作内容... */}
      </section>

      {/* 荣誉获奖 */}
      <section>
        <SectionHeader title="荣誉获奖" />
        {/* 荣誉内容... */}
      </section>
    </main>
  );
};

export default App;
