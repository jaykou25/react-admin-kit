import { LinkButton, type TableColumnType } from 'react-admin-kit';

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
  {
    title: '操作',
    valueType: 'option', // valueType 设为 option 代表是操作列
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => {
          innerRef.current?.openModal('edit', record);
        }}
      >
        编辑
      </LinkButton>,
    ],
  },
];
