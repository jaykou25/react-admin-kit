/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SettingProvider, ProTable } from 'react-admin-kit';

describe('SettingProvider proTableSetting.defaultHideInSearch 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('1. 全局不设置默认为 false', async () => {
    const TestComponent = () => {
      return (
        <SettingProvider proTableSetting={{}}>
          <ProTable
            columns={[
              {
                title: 'titleTest',
                dataIndex: 'titleTest',
              },
            ]}
          />
        </SettingProvider>
      );
    };

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      // 验证搜索表单存在
      const searchForm = container.querySelector(
        '.ant-pro-query-filter-container',
      );
      expect(searchForm).toBeTruthy();

      // titleTest 应该出现在搜索区域
      const searchFormItems = container.querySelectorAll(
        '.ant-pro-query-filter-container .ant-form-item',
      );
      const titleTestField = Array.from(searchFormItems).find((item) =>
        item.textContent?.includes('titleTest'),
      );
      expect(titleTestField).toBeTruthy();
    });
  });

  test('2. 全局设置为 true', async () => {
    const TestComponent = () => {
      return (
        <SettingProvider proTableSetting={{ defaultHideInSearch: true }}>
          <ProTable
            columns={[
              {
                title: 'titleTest',
                dataIndex: 'titleTest',
              },
            ]}
          />
        </SettingProvider>
      );
    };

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      // 验证搜索表单存在但为空（没有搜索字段）
      const searchForm = container.querySelector(
        '.ant-pro-query-filter-container',
      );
      expect(searchForm).toBeTruthy();

      // titleTest 应该不出现在搜索区域
      const searchFormItems = container.querySelectorAll(
        '.ant-pro-query-filter-container .ant-form-item',
      );
      const titleTestField = Array.from(searchFormItems).find((item) =>
        item.textContent?.includes('titleTest'),
      );
      expect(titleTestField).toBeFalsy();
    });
  });

  test('3. 全局设置为 true, 组件为 false', async () => {
    const TestComponent = () => {
      return (
        <SettingProvider proTableSetting={{ defaultHideInSearch: true }}>
          <ProTable
            defaultHideInSearch={false}
            columns={[
              {
                title: 'titleTest',
                dataIndex: 'titleTest',
              },
            ]}
          />
        </SettingProvider>
      );
    };

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      // 验证搜索表单存在
      const searchForm = container.querySelector(
        '.ant-pro-query-filter-container',
      );
      expect(searchForm).toBeTruthy();

      // titleTest 应该出现在搜索区域
      const searchFormItems = container.querySelectorAll(
        '.ant-pro-query-filter-container .ant-form-item',
      );
      const titleTestField = Array.from(searchFormItems).find((item) =>
        item.textContent?.includes('titleTest'),
      );
      expect(titleTestField).toBeTruthy();
    });
  });

  test('4. 全局设置为 false, 组件为 true', async () => {
    const TestComponent = () => {
      return (
        <SettingProvider proTableSetting={{ defaultHideInSearch: false }}>
          <ProTable
            defaultHideInSearch
            columns={[
              {
                title: 'titleTest',
                dataIndex: 'titleTest',
              },
            ]}
          />
        </SettingProvider>
      );
    };

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      // 验证搜索表单存在但为空（没有搜索字段）
      const searchForm = container.querySelector(
        '.ant-pro-query-filter-container',
      );
      expect(searchForm).toBeTruthy();

      // titleTest 应该不出现在搜索区域
      const searchFormItems = container.querySelectorAll(
        '.ant-pro-query-filter-container .ant-form-item',
      );
      const titleTestField = Array.from(searchFormItems).find((item) =>
        item.textContent?.includes('titleTest'),
      );
      expect(titleTestField).toBeFalsy();
    });
  });
});
