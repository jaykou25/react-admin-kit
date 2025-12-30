/**
 * @jest-environment jsdom
 */
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProTable from '../index';

describe('ProTable defaultHideInSearch 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('默认为 false', async () => {
    const TestComponent = () => {
      return (
        <ProTable
          columns={[
            {
              title: 'titleTest',
              dataIndex: 'titleTest',
            },
          ]}
        />
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

  test('defaultHideInSearch 设为 true 时默认不上搜索区域', async () => {
    const TestComponent = () => {
      return (
        <ProTable
          defaultHideInSearch
          columns={[
            {
              title: 'titleTest',
              dataIndex: 'titleTest',
            },
          ]}
        />
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

  test('hideInSearch:false 的优先级高一点', async () => {
    const TestComponent = () => {
      return (
        <ProTable
          defaultHideInSearch
          columns={[
            {
              title: 'titleTest',
              dataIndex: 'titleTest',
              hideInSearch: false,
            },
          ]}
        />
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

  test('type: search 的优先级最高', async () => {
    const TestComponent = () => {
      return (
        <ProTable
          defaultHideInSearch
          columns={[
            {
              title: 'titleTest',
              dataIndex: 'titleTest',
              hideInSearch: true,
              type: 'search',
            },
          ]}
        />
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
});
