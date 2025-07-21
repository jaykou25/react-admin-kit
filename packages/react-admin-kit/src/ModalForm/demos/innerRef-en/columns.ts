import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: 'Username',
    dataIndex: 'username',
    required: true,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    required: true,
  },
];
