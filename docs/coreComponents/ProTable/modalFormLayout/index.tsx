import { ProTable, LinkButton } from 'react-admin-kit';
import { useRef } from 'react';

import { Button, message } from 'antd';
import type { MyProColumnType } from 'react-admin-kit';

import 'antd/dist/antd.min.css';

export const columns: MyProColumnType[] = [
  {
    title: '用户名',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '用户名为必填项',
        },
      ],
    },
  },
  {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    hideInSearch: true,
  },
  {
    title: '性别',
    dataIndex: 'sex',
    formItemProps: {},
    valueEnum: {
      男: { text: '男' },
      女: { text: '女' },
    },
  },
  {
    title: '身份证号',
    dataIndex: 'idNumber',
    hideInSearch: true,
  },
  {
    title: '操作',
    valueType: 'option',
    enableDelete: true,
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton key={1} onClick={() => innerRef.current?.openModal('edit', record)}>
        编辑
      </LinkButton>,
    ],
  },
];

export const FORM_TYPE_MAP = {
  new: '新增',
  edit: '编辑',
  read: '查看',
};

const Basic = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  const onFinish = (values: any, type) => {
    console.log({ values });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);

        message.success(FORM_TYPE_MAP[type] + '成功');
        actionRef.current?.reload();
      }, 1000);
    });
  };

  const mockRequest = () => {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            data: [
              { id: 1, name: 'Jack', phone: 133 },
              { id: 2, name: 'Tom', phone: 155 },
            ],
          }),
        1000,
      );
    });
  };

  const delFunction = (ids) => {
    console.log('delete ids', ids);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
        message.success('删除成功!');
        actionRef.current?.reload();
      }, 1000);
    });
  };

  return (
    <div>
      <ProTable
        name="用户"
        size="small"
        columns={columns}
        innerRef={innerRef}
        actionRef={actionRef}
        request={mockRequest}
        onFinish={onFinish}
        bordered
        toolbar={{
          actions: [
            <Button
              type="primary"
              onClick={() => {
                innerRef.current?.openModal();
              }}
            >
              新增
            </Button>,
          ],
        }}
        rowSelection={{}}
        delFunction={delFunction}
        modalProps={{ width: 680 }}
        formProps={{
          grid: true,
          rowProps: { gutter: [24, 0] },
          colProps: { span: 12 },
        }}
      />
    </div>
  );
};

export default Basic;
