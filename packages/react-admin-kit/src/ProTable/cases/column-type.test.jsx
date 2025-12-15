/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProTable from '../index';

describe('ProTable 列 type 行为 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("type='search' 时只出现在搜索区域", async () => {
    const TestComponent = () => (
      <ProTable
        columns={[
          {
            title: 'searchCol',
            dataIndex: 'searchCol',
            type: 'search',
          },
        ]}
      />
    );

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      const searchForm = container.querySelector(
        '.ant-pro-query-filter-container',
      );
      expect(searchForm).toBeTruthy();

      const searchFormItems = container.querySelectorAll(
        '.ant-pro-query-filter-container .ant-form-item',
      );
      const foundInSearch = Array.from(searchFormItems).find((item) =>
        item.textContent?.includes('searchCol'),
      );
      expect(foundInSearch).toBeTruthy();

      const tableHeader = container.querySelector('.ant-table-thead');
      const foundInTable = tableHeader?.textContent?.includes('searchCol');
      expect(foundInTable).toBeFalsy();
    });
  });

  test("type='table' 时只出现在表格头部，不在搜索或表单中", async () => {
    const TestComponent = () => (
      <ProTable
        columns={[
          {
            title: 'tableCol',
            dataIndex: 'tableCol',
            type: 'table',
          },
        ]}
      />
    );

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      const tableHeader = container.querySelector('.ant-table-thead');
      expect(tableHeader).toBeTruthy();
      const foundInTable = tableHeader?.textContent?.includes('tableCol');
      expect(foundInTable).toBeTruthy();

      const searchFormItems = container.querySelectorAll(
        '.ant-pro-query-filter-container .ant-form-item',
      );
      const foundInSearch = Array.from(searchFormItems).find((item) =>
        item.textContent?.includes('tableCol'),
      );
      expect(foundInSearch).toBeFalsy();
    });
  });

  test("type='form' 时只出现在表单（非搜索表单）中", async () => {
    const innerRef = React.createRef();

    const TestComponent = () => (
      <ProTable
        innerRef={innerRef}
        columns={[
          {
            title: 'formCol',
            dataIndex: 'formCol',
            type: 'form',
          },
        ]}
        modalFormProps={{
          getContainer: false,
        }}
      />
    );

    const { container } = render(<TestComponent />);

    // 等待 innerRef 注入
    await waitFor(() => {
      expect(innerRef.current).toBeTruthy();
    });

    // 打开 modal，使 form 渲染到 DOM
    await innerRef.current.openModal();

    await waitFor(() => {
      expect(document.querySelector('.ant-modal')).toBeTruthy();

      const searchFormItems = container.querySelectorAll(
        '.ant-pro-query-filter-container .ant-form-item',
      );
      const foundInSearch = Array.from(searchFormItems).find((item) =>
        item.textContent?.includes('formCol'),
      );
      expect(foundInSearch).toBeFalsy();

      const tableHeader = container.querySelector('.ant-table-thead');
      const foundInTable = tableHeader?.textContent?.includes('formCol');
      expect(foundInTable).toBeFalsy();

      const otherFormItems = Array.from(
        container.querySelectorAll('.ant-modal-content .ant-form-item'),
      );
      const foundInForm = otherFormItems.find((item) =>
        item.textContent?.includes('formCol'),
      );
      expect(foundInForm).toBeTruthy();
    });
  });
});
