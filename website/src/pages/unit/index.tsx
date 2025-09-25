import {
  clearSelectCache,
  LinkButton,
  FormUpload,
  SchemaForm,
  ProTable,
  BusinessSelectBuilder,
  ProForm,
} from 'react-admin-kit';

import type { TableColumnType } from 'react-admin-kit';
import { useState, useContext } from 'react';

// 标准列配置
export const mockColumns: TableColumnType[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    valueType: 'text',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    valueType: 'text',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    valueType: 'digit',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    valueType: 'text',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    valueType: 'select',
    valueEnum: {
      active: { text: '激活', status: 'Success' },
      inactive: { text: '未激活', status: 'Default' },
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    valueType: 'date',
  },
  {
    title: '操作',
    valueType: 'option',
    enableDelete: (record, index) => ({ btnText: `删除${index}` }),
    className: 'optionGroup',
    render: () => ['编辑'],
  },
];

const mockApi = async () => {
  return {
    data: [
      { id: 1, name: 'Cached Option 1' },
      { id: 2, name: 'Cached Option 2' },
    ],
    total: 2,
  };
};

const BusinessSelect = BusinessSelectBuilder({
  apis: [
    {
      type: 'type1',
      api: mockApi,
    },
  ],
});

const UnitTest = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div></div>
    </>
  );
};

export default UnitTest;
