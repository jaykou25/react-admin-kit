import { render } from 'vitest-browser-react';
import ProTable from 'react-admin-kit/ProTable';
import { describe, expect, test } from 'vitest';

describe('ProTable 列 type 行为 集成测试', () => {
  test("type='search' 时只出现在搜索区域", async () => {
    const { container } = await render(
      <ProTable
        columns={[
          {
            title: 'searchCol',
            dataIndex: 'searchCol',
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
    const foundInSearch = Array.from(searchFormItems).find((item) =>
      item.textContent?.includes('searchCol'),
    );
    expect(foundInSearch).toBeTruthy();

    const tableHeader = container.querySelector('.ant-table-thead');
    const foundInTable = tableHeader?.textContent?.includes('searchCol');
    expect(foundInTable).toBeFalsy();
  });

  test("type='table' 时只出现在表格头部，不在搜索或表单中", async () => {
    const { container } = await render(
      <ProTable
        columns={[
          {
            title: 'tableCol',
            dataIndex: 'tableCol',
            type: 'table',
          },
        ]}
      />,
    );

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

  test("type='form' 时只出现在表单（非搜索表单）中", async () => {
    const innerRef = { current: null as any };

    const { container, getByTestId, getByText } = await render(
      <ProTable
        innerRef={innerRef}
        toolbar={{
          actions: [
            <button
              data-testid="open-modal-btn"
              onClick={() => innerRef.current?.openModal()}
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
      />,
    );

    const openBtn = getByTestId('open-modal-btn');
    await openBtn.click();

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

    await expect(getByText('新增')).toBeInTheDocument();
    await expect(getByText('formCol')).toBeInTheDocument();
  });
});
