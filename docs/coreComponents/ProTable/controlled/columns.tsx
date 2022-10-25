import { LinkButton } from 'react-admin-kit';
import type { ProColumnType } from 'react-admin-kit';

export const getColumns = (): ProColumnType[] => [
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
    title: '出生日期',
    dataIndex: 'birthday',
    valueType: 'date',
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
