import type { TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: 'date',
    dataIndex: 'date',
    valueType: 'date',
  },
  {
    title: 'dateTime',
    dataIndex: 'dateTime',
    valueType: 'dateTime',
  },
  {
    title: 'dateRange',
    dataIndex: 'dateRange',
    valueType: 'dateRange',
  },
  {
    title: '金额',
    dataIndex: 'money',
    valueType: 'money',
  },
];
