/**
 * ItemHeader 组件使用示例
 */

import React from 'react';
import ItemHeader from './ItemHeader';
import SectionHeader from '../SectionHeader/SectionHeader';

const ItemHeaderExample: React.FC = () => {
  return (
    <div>
      <SectionHeader title="时间格式示例" />

      {/* 示例1: 只有年份 */}
      <h3>1. 只有年份</h3>
      <ItemHeader
        leftContent="某个长期项目"
        startYear={2023}
        endYear={2024}
      />
      <p>生成: 2023 年 - 2024 年</p>
      <p>dateTime: 2023/2024</p>

      {/* 示例2: 年份 + 月份 */}
      <h3>2. 年份 + 月份</h3>
      <ItemHeader
        leftContent="上海大学 · 信息工程"
        startYear={2023}
        startMonth={7}
        endYear={2027}
        endMonth={6}
      />
      <p>生成: 2023 年 7 月 - 2027 年 6 月</p>
      <p>dateTime: 2023-07/2027-06</p>

      {/* 示例3: 年份 + 月份 + 日期 */}
      <h3>3. 年份 + 月份 + 日期</h3>
      <ItemHeader
        leftContent="(1) 美团 · 前端工程师"
        startYear={2025}
        startMonth={9}
        startDate={1}
        endYear={2026}
        endMonth={1}
        endDate={15}
      />
      <p>生成: 2025 年 9 月 1 日 - 2026 年 1 月 15 日</p>
      <p>dateTime: 2025-09-01/2026-01-15</p>
    </div>
  );
};

export default ItemHeaderExample;
