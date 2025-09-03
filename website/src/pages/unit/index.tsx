import {
  clearSelectCache,
  LinkButton,
  FormUpload,
  SchemaForm,
  ProTable,
} from 'react-admin-kit';

import type { TableColumnType } from 'react-admin-kit';
import { useState } from 'react';

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

const UnitTest = () => {
  const [files, setFiles] = useState([]);
  return (
    <>
      <div>
        <ProTable
          rowSelection={{}}
          columns={mockColumns}
          request={() => Promise.resolve({ data: [{ id: 1 }, { id: 2 }] })}
          rowKey={(record) => record.id + 'hi'}
          // rowKey={'id'}
          delFunction={() =>
            new Promise((re) => {
              setTimeout(() => {
                re(true);
              }, 4000);
            })
          }
          tableAlertOption={{
            delPopconfirmProps: {
              title: 'popconfirmTitleTest',
            },
          }}
        />
      </div>
    </>
  );
};

export default UnitTest;
