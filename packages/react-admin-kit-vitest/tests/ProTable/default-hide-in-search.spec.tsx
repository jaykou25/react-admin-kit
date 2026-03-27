import { render } from 'vitest-browser-react';
import ProTable from 'react-admin-kit/ProTable';
import { describe, expect, test } from 'vitest';

describe('ProTable defaultHideInSearch 集成测试', () => {
  test('默认为 false', async () => {
    const { container } = await render(
      <ProTable
        columns={[
          {
            title: 'titleTest',
            dataIndex: 'titleTest',
          },
        ]}
      />,
    );

    const searchForm = container.querySelector(
      '.ant-pro-query-filter-container',
    );
    expect(searchForm).toBeTruthy();

    const searchFormItems = container.querySelectorAll(
      '.ant-pro-query-filter-container .ant-form-item',
    );
    const titleTestField = Array.from(searchFormItems).find((item) =>
      item.textContent?.includes('titleTest'),
    );
    expect(titleTestField).toBeTruthy();
  });

  test('defaultHideInSearch 设为 true 时默认不上搜索区域', async () => {
    const { container } = await render(
      <ProTable
        defaultHideInSearch
        columns={[
          {
            title: 'titleTest',
            dataIndex: 'titleTest',
          },
        ]}
      />,
    );

    const searchForm = container.querySelector(
      '.ant-pro-query-filter-container',
    );
    expect(searchForm).toBeTruthy();

    const searchFormItems = container.querySelectorAll(
      '.ant-pro-query-filter-container .ant-form-item',
    );
    const titleTestField = Array.from(searchFormItems).find((item) =>
      item.textContent?.includes('titleTest'),
    );
    expect(titleTestField).toBeFalsy();
  });

  test('hideInSearch:false 的优先级高一点', async () => {
    const { container } = await render(
      <ProTable
        defaultHideInSearch
        columns={[
          {
            title: 'titleTest',
            dataIndex: 'titleTest',
            hideInSearch: false,
          },
        ]}
      />,
    );

    const searchForm = container.querySelector(
      '.ant-pro-query-filter-container',
    );
    expect(searchForm).toBeTruthy();

    const searchFormItems = container.querySelectorAll(
      '.ant-pro-query-filter-container .ant-form-item',
    );
    const titleTestField = Array.from(searchFormItems).find((item) =>
      item.textContent?.includes('titleTest'),
    );
    expect(titleTestField).toBeTruthy();
  });

  test('type: search 的优先级最高', async () => {
    const { container } = await render(
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
      />,
    );

    const searchForm = container.querySelector(
      '.ant-pro-query-filter-container',
    );
    expect(searchForm).toBeTruthy();

    const searchFormItems = container.querySelectorAll(
      '.ant-pro-query-filter-container .ant-form-item',
    );
    const titleTestField = Array.from(searchFormItems).find((item) =>
      item.textContent?.includes('titleTest'),
    );
    expect(titleTestField).toBeTruthy();
  });
});
