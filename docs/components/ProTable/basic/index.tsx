import { ProTable, LinkButton } from 'react-admin-kit';
import { useRef } from 'react';

import { Button, FormInstance, message } from 'antd';

import 'antd/dist/antd.min.css';

export const columns = [
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
  },
  {
    title: '操作',
    valueType: 'option',
    enableDelete: true,
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton onClick={() => innerRef.current?.openModal('edit', record)}>编辑</LinkButton>,
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

  return (
    <div>
      <ProTable
        name="用户"
        columns={columns}
        innerRef={innerRef}
        actionRef={actionRef}
        request={mockRequest}
        onFinish={onFinish}
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
      />
    </div>
  );
};

export default Basic;
