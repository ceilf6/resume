/**
 * ItemHeader 组件使用示例
 */

import React from 'react';
import ItemHeader from './ItemHeader';

const ItemHeaderExample: React.FC = () => {
  return (
    <ItemHeader
      leftContent="(1) 美团"
      rightContent="2025 年 9 月 - 2026 年 1 月"
    />
  );
};

export default ItemHeaderExample;
