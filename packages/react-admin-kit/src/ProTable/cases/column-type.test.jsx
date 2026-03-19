/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProTable from '../index';

describe('ProTable 列 type 行为 集成测试', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
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
        toolbar={{
          actions: [
            <button
              data-testid="open-modal-btn"
              onClick={() => innerRef.current.openModal()}
            >
              open
            </button>,
          ],
        }}
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

    fireEvent.click(screen.getByTestId('open-modal-btn'));

    await waitFor(() => {
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

      expect(screen.queryByText('新增')).toBeInTheDocument();
      expect(screen.queryByText('formCol')).toBeInTheDocument();
    });
  });
});
