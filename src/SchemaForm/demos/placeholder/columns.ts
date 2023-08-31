import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '联系人',
    dataIndex: 'name',
  },
  {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    fieldProps: { hidden: true },
  },
  {
    title: '负责人',
    dataIndex: 'chargeName',
  },
  {
    title: '电话',
    dataIndex: 'chargePhone',
  },
  {
    title: '邮箱',
    dataIndex: 'mail',
  },
];
