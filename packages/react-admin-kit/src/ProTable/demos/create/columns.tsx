import type { TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '用户名',
    dataIndex: 'name',
    required: true,
  },
  {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
    hideInSearch: true,
  },
  {
    title: '性别',
    dataIndex: 'gender',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '男', value: 'male' },
        { label: '女', value: 'female' },
      ],
    },
  },

  // 用于搜索
  {
    title: '创建日期',
    dataIndex: 'createdAt',
    valueType: 'dateRange',
    transform: (vals) => {
      return {
        startTime: vals[0],
        endTime: vals[1],
      };
    },
    colSize: 2,
    type: 'search',
  },

  // 用于表格
  {
    title: '创建日期',
    dataIndex: 'createdAt',
    valueType: 'date',
    type: 'table',
  },
];
