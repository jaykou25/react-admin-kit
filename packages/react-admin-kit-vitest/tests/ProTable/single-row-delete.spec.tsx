import { describe, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import ProTable from 'react-admin-kit/ProTable';

describe('默认的行删除行为', () => {
  test('默认在行上不显示删除', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
      />,
    );

    expect(getByText('删除')).not.toBeInTheDocument();
  });

  test('开启行上的删除', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    await expect(getByText('删除')).toBeInTheDocument();

    await getByText('删除').click();

    await getByText('OK').click();

    expect(mockDelFn).toHaveBeenCalled();
  });

  test('行删除时 loading 效果', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: (record, index) => {
          return {
            btnText: `删除${index}`,
          };
        },
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
        total: 2,
      }),
    );

    const mockDelFn = () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(true), 800);
      });

    const { getByText } = await render(
      <ProTable
        search={false}
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delPopconfirmProps={{
          getPopupContainer: (trigger) => trigger.parentNode as any,
        }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    const del0Btn = getByText('删除0');
    await expect(del0Btn).toBeInTheDocument();
    await expect(getByText('删除1')).toBeInTheDocument();

    await del0Btn.click();

    const confirmBtn = getByText('OK');
    expect(confirmBtn).toBeInTheDocument();
    await confirmBtn.click();

    console.log('debug del0Btn', del0Btn, del0Btn.element());

    await expect(del0Btn.element().parentNode).toHaveClass('ant-btn-loading');

    await expect(getByText('删除1').element().parentNode).not.toHaveClass(
      'ant-btn-loading',
    );
  });

  test('验证 enableDelete 为函数时的参数 - record (返回 false)', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: (record, index) => record.id !== 1,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
      />,
    );

    expect(getByText('删除')).not.toBeInTheDocument();
  });

  test('验证 enableDelete 为函数时的参数 - index (返回 false)', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: (record, index) => index !== 0,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
      />,
    );

    expect(getByText('删除')).not.toBeInTheDocument();
  });

  test('验证 enableDelete 为函数时的参数 - record (返回 true)', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: (record) => record.id === 1,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('删除')).toBeInTheDocument();
  });

  test('验证 enableDelete 为函数时参数 index (返回 true)', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: (record, index) => index === 0,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('删除')).toBeInTheDocument();
  });

  test('验证 enableDelete 为函数时 返回对象 disabled', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: (record, index) => ({ disabled: true }),
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('删除')).toBeInTheDocument();
    expect(getByText('删除').element().parentNode).toBeDisabled();
  });

  test('验证 enableDelete 为函数时 返回对象 visible', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: (record, index) => ({ visible: false }),
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('删除')).not.toBeInTheDocument();
  });

  test('验证 enableDelete 为函数时 返回对象 danger', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: (record, index) => ({ danger: true }),
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('删除')).toBeInTheDocument();
    expect(getByText('删除').element().parentNode).toHaveClass(
      'ant-btn-dangerous',
    );
  });

  test('验证 enableDelete 为函数时 返回对象 btnText', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: (record, index) => ({ btnText: '关闭' }),
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('关闭')).toBeInTheDocument();
  });

  test('验证 enableDelete 为函数时 返回对象 btnIndex', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: (record, index) => ({ btnIndex: 0 }),
        className: 'optionGroup',
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { container, getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('删除')).toBeInTheDocument();

    const spaceItems = container.querySelectorAll(
      '.optionGroup .ant-space-item',
    );
    expect(spaceItems[0].textContent).toBe('删除');
    expect(spaceItems[1].textContent).toBe('编辑');
  });
});

describe('删除权限 delPermission', () => {
  test('delPermission 函数返回 true', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delPermission={() => true}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('删除')).toBeInTheDocument();
  });

  test('delPermission 函数返回 false', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delPermission={() => false}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('删除')).not.toBeInTheDocument();
  });
});

describe('delPopconfirmProps', () => {
  test('delPopconfirmProps - title', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delConfirmType="popconfirm"
        delPopconfirmProps={{
          title: 'popconfirmTitleTest',
        }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('删除')).toBeInTheDocument();

    await getByText('删除').click();

    expect(getByText('popconfirmTitleTest')).toBeInTheDocument();
  });

  test('delPopconfirmProps - title 函数 record 参数', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        search={false}
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delConfirmType="popconfirm"
        delPopconfirmProps={{
          title: (record) => `popconfirmTitleTest${record.id}`,
        }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('删除')).toBeInTheDocument();

    await getByText('删除').click();

    expect(getByText('popconfirmTitleTest1')).toBeInTheDocument();
  });

  test('delPopconfirmProps - title 函数 index 参数', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delConfirmType="popconfirm"
        delPopconfirmProps={{
          title: (record, index) => `popconfirmTitleTest${index}`,
        }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('删除')).toBeInTheDocument();

    await getByText('删除').click();

    expect(getByText('popconfirmTitleTest0')).toBeInTheDocument();
  });

  test('delPopconfirmProps - description', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delConfirmType="popconfirm"
        delPopconfirmProps={{
          description: 'popconfirmDescTest',
        }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('删除')).toBeInTheDocument();

    await getByText('删除').click();

    expect(getByText('popconfirmDescTest')).toBeInTheDocument();
  });

  test('delPopconfirmProps - description 函数 record 参数', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delConfirmType="popconfirm"
        delPopconfirmProps={{
          description: (record) => `popconfirmDescTest${record.id}`,
        }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(getByText('删除')).toBeInTheDocument();

    await getByText('删除').click();

    expect(getByText('popconfirmDescTest1')).toBeInTheDocument();
  });

  test('delPopconfirmProps - description 函数 index 参数', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delConfirmType="popconfirm"
        delPopconfirmProps={{
          description: (record, index) => `popconfirmDescTest${index}`,
        }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    await getByText('删除').click();

    expect(getByText('popconfirmDescTest0')).toBeInTheDocument();
  });
});

describe('delModalConfirmProps', () => {
  test('delModalConfirmProps - title', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delConfirmType="modal"
        delModalConfirmProps={{
          title: 'modalTitleTest10',
        }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    await getByText('删除').click();

    expect(getByText('modalTitleTest10').length).toBeGreaterThan(0);
  });

  test('delModalConfirmProps - title 函数 record 参数', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delConfirmType="modal"
        delModalConfirmProps={{
          title: (record) => `modalTitleTest${record.id}`,
        }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    await getByText('删除').click();

    expect(getByText('modalTitleTest1').length).toBeGreaterThan(0);
  });

  test('delModalConfirmProps - title 函数 index 参数', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delConfirmType="modal"
        delModalConfirmProps={{
          title: (record, index) => `modalTitleTest${index}`,
        }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    await getByText('删除').click();

    expect(getByText('modalTitleTest0').length).toBeGreaterThan(0);
  });

  test('delModalConfirmProps - content', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delConfirmType="modal"
        delModalConfirmProps={{
          content: 'modalContentTest',
        }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    await getByText('删除').click();

    expect(getByText('modalContentTest').length).toBeGreaterThan(0);
  });

  test('delModalConfirmProps - content 函数 record 参数', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delConfirmType="modal"
        delModalConfirmProps={{
          content: (record) => `modalContentTest${record.id}`,
        }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    await getByText('删除').click();

    expect(getByText('modalContentTest1').length).toBeGreaterThan(0);
  });

  test('delModalConfirmProps - content 函数 index 参数', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delConfirmType="modal"
        delModalConfirmProps={{
          content: (record, index) => `modalContentTest${index}`,
        }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    await getByText('删除').click();

    expect(getByText('modalContentTest0').length).toBeGreaterThan(0);
  });
});

describe('delSuccessProps', () => {
  test('成功后的文字', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn(() => Promise.resolve(true));

    const { getByText } = await render(
      <ProTable
        search={false}
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delSuccessProps={{ content: 'delSuccessTest' }}
      />,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    await getByText('删除').click();

    expect(getByText('OK')).toBeInTheDocument();

    await getByText('OK').click();

    expect(getByText('delSuccessTest')).toBeInTheDocument();
  });

  test('不显示提示消息', async () => {
    const mockColumns: any = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        valueType: 'option',
        enableDelete: true,
        render: () => ['编辑'],
      },
    ];

    const mockRequest = vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
          },
        ],
        total: 1,
      }),
    );

    const mockDelFn = vi.fn();

    const { getByText } = await render(
      <ProTable
        columns={mockColumns}
        request={mockRequest}
        delFunction={mockDelFn}
        delSuccessProps={false}
      />,
    );

    await getByText('删除').click();
    await getByText('OK').click();
    expect(getByText('删除成功')).not.toBeInTheDocument();
  });
});
