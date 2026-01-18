/**
 * ItemHeader 组件使用示例
 */

import React from 'react';
import ItemHeader from './ItemHeader';

const ItemHeaderExample: React.FC = () => {
  return (
    <div>
      {/* 教育背景示例 */}
      <ItemHeader
        leftContent="上海大学 · 信息工程"
        startYear={2023}
        startMonth={7}
        endYear={2027}
        endMonth={6}
      />

      {/* 工作经历示例 */}
      <ItemHeader
        leftContent="(1) 美团 · 前端工程师"
        startYear={2025}
        startMonth={9}
        endYear={2026}
        endMonth={1}
      />
    </div>
  );
};

export default ItemHeaderExample;
