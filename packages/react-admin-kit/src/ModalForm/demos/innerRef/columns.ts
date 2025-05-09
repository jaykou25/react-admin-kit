import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '用户名',
    dataIndex: 'username',
    required: true,
  },
  {
    title: '电话',
    dataIndex: 'phone',
    required: true,
  },
];
