import { Tag } from 'antd';
import type { TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '用户名',
    dataIndex: 'name',
    width: 80,
  },
  {
    title: '生日',
    dataIndex: 'birthday',
    valueType: 'date',
    width: 110,
  },
  {
    title: '性别',
    dataIndex: 'sex',
    valueType: 'select',
    valueEnum: {
      man: { text: '男' },
      woman: { text: '女' },
    },
    width: 80,
  },
  {
    title: '类型',
    dataIndex: 'type',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: '会员', value: '1' },
        { label: '非会员', value: '2' },
      ],
    },
    width: 80,
  },
  {
    title: '会员范围',
    dataIndex: 'range',
    valueType: 'dateRange',
    width: 130,
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: (text) => {
      if (text) {
        return <Tag color="success">开启</Tag>;
      }

      return <Tag>未开启</Tag>;
    },
    renderExport: (text) => {
      return text ? '开启' : '未开启';
    },
    width: 80,
  },
  {
    title: '创建日期',
    dataIndex: 'createTime',
    valueType: 'dateTime',
    width: 100,
  },
];
