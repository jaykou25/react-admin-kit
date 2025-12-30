/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Demo from './index';

describe('SettingProvider proTableSetting.size 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('1. 全局 size 配置应该生效', async () => {
    const { container } = render(<Demo />);

    // 等待表格数据加载
    await waitFor(() => {
      expect(container.querySelector('.ant-table')).toBeTruthy();

      // 验证表格应用了 small 尺寸的 CSS 类名
      const table = container.querySelector('.ant-table');
      expect(table).toHaveClass('ant-table-small');
    });
  });

  test('2. 组件级别 size 配置应该覆盖全局配置', async () => {
    const { container } = render(<Demo size="large" />);

    // 等待表格数据加载
    await waitFor(() => {
      expect(container.querySelector('.ant-table')).toBeTruthy();

      // 验证表格应用了 large 尺寸的 CSS 类名，而不是全局的 small
      const table = container.querySelector('.ant-table');
      expect(table).not.toHaveClass('ant-table-middle');
      expect(table).not.toHaveClass('ant-table-small');
    });
  });

  test('3. 验证不同 size 值的 DOM 表现', async () => {
    // 测试 middle 尺寸
    const { container: middleContainer } = render(<Demo size="middle" />);

    await waitFor(() => {
      expect(middleContainer.querySelector('.ant-table')).toBeTruthy();

      const middleTable = middleContainer.querySelector('.ant-table');
      expect(middleTable).toHaveClass('ant-table-middle');
      expect(middleTable).not.toHaveClass('ant-table-small');
    });
  });
});
