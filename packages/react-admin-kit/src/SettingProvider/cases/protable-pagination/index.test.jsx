/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Demo from './index';

describe('SettingProvider proTableSetting.pagination 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('1. 全局 pagination 配置应该生效', async () => {
    const { container } = render(<Demo />);

    // 等待表格数据加载
    await waitFor(() => {
      expect(container.querySelector('.ant-table')).toBeTruthy();

      // 验证分页组件存在
      const pagination = container.querySelector('.ant-pagination');
      expect(pagination).toBeTruthy();

      // 验证 showSizeChanger 配置生效 - 页面大小选择器存在
      const sizeChanger = container.querySelector(
        '.ant-pagination-options-size-changer',
      );
      expect(sizeChanger).toBeTruthy();

      // 验证 showQuickJumper 配置生效 - 快速跳转输入框存在
      const quickJumper = container.querySelector(
        '.ant-pagination-options-quick-jumper',
      );
      expect(quickJumper).toBeTruthy();
    });
  });

  test('2. 组件级别 pagination 配置应该覆盖全局配置', async () => {
    const overridePaginationConfig = {
      pageSize: 5,
      showSizeChanger: false,
      showQuickJumper: false,
    };

    const { container } = render(
      <Demo pagination={overridePaginationConfig} />,
    );

    // 等待表格数据加载
    await waitFor(() => {
      expect(container.querySelector('.ant-table')).toBeTruthy();

      // 验证分页组件存在
      const pagination = container.querySelector('.ant-pagination');
      expect(pagination).toBeTruthy();

      // 验证 showSizeChanger 被覆盖 - 页面大小选择器不存在
      const sizeChanger = container.querySelector(
        '.ant-pagination-options-size-changer',
      );
      expect(sizeChanger).toBeFalsy();

      // 验证 showQuickJumper 被覆盖 - 快速跳转输入框不存在
      const quickJumper = container.querySelector(
        '.ant-pagination-options-quick-jumper',
      );
      expect(quickJumper).toBeFalsy();
    });
  });

  test('3. 验证 pagination 相关 DOM 元素和类名', async () => {
    const { container } = render(<Demo />);

    // 等待表格数据加载
    await waitFor(() => {
      expect(container.querySelector('.ant-table')).toBeTruthy();

      // 验证分页容器类名
      expect(container.querySelector('.ant-pagination')).toBeTruthy();

      // 验证分页项存在
      expect(container.querySelector('.ant-pagination-item')).toBeTruthy();

      // 验证分页选项容器存在
      expect(container.querySelector('.ant-pagination-options')).toBeTruthy();
    });
  });

  test('4. 验证 pageSize 配置是否正确应用', async () => {
    const { container } = render(<Demo />);

    // 等待表格数据加载
    await waitFor(() => {
      expect(container.querySelector('.ant-table')).toBeTruthy();

      // 验证表格行数符合 pageSize 配置 (pageSize: 3)
      const tableRows = container.querySelectorAll('.ant-table-tbody tr');
      expect(tableRows.length).toBe(3);

      // 验证分页显示正确的总数信息
      const paginationTotal = container.querySelector(
        '.ant-pagination-total-text',
      );
      if (paginationTotal) {
        expect(paginationTotal.textContent).toContain('6');
      }
    });
  });
});
