/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Demo from './index';

describe('SettingProvider proTableSetting.search 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('1. 全局 search 配置应该生效', async () => {
    const { container } = render(<Demo />);

    // 等待表格数据加载
    await waitFor(() => {
      expect(container.querySelector('.ant-table')).toBeTruthy();

      // 验证搜索表单存在
      const searchForm = container.querySelector('.ant-pro-table-search');
      expect(searchForm).toBeTruthy();

      // 验证搜索表单默认展开 (defaultCollapsed: false)
      // 通过检查展开/收起按钮的文字来判断状态
      const collapseButton = container.querySelector(
        '.ant-pro-query-filter-collapse-button',
      );
      expect(collapseButton).toBeTruthy();
      // 文字是"收起"说明已展开，文字是"展开"说明没展开
      expect(collapseButton.textContent).toContain('收起');
    });
  });

  test('2. 组件级别 search 配置应该覆盖全局配置', async () => {
    const overrideSearchConfig = {
      defaultCollapsed: true,
      span: 8,
    };

    const { container } = render(<Demo search={overrideSearchConfig} />);

    // 等待表格数据加载
    await waitFor(() => {
      expect(container.querySelector('.ant-table')).toBeTruthy();

      // 验证搜索表单存在
      const searchForm = container.querySelector('.ant-pro-table-search');
      expect(searchForm).toBeTruthy();

      // 验证搜索表单被收起 (defaultCollapsed: true)
      // 通过检查展开/收起按钮的文字来判断状态
      const collapseButton = container.querySelector(
        '.ant-pro-query-filter-collapse-button',
      );
      expect(collapseButton).toBeTruthy();
      // 文字是"展开"说明没展开（被收起），文字是"收起"说明已展开
      expect(collapseButton.textContent).toContain('展开');
    });
  });

  test('3. 验证搜索表单的布局配置', async () => {
    const { container } = render(<Demo />);

    // 等待表格数据加载
    await waitFor(() => {
      expect(container.querySelector('.ant-table')).toBeTruthy();

      // 验证搜索表单相关的基础 DOM 结构
      expect(
        container.querySelector('.ant-pro-query-filter.ant-form'),
      ).toBeTruthy();
    });
  });

  test('4. 验证禁用搜索功能', async () => {
    const { container } = render(<Demo search={false} />);

    // 等待表格数据加载
    await waitFor(() => {
      expect(container.querySelector('.ant-table')).toBeTruthy();

      // 验证搜索表单不存在
      const searchForm = container.querySelector(
        '.ant-pro-query-filter.ant-form',
      );
      expect(searchForm).toBeFalsy();
    });
  });
});
