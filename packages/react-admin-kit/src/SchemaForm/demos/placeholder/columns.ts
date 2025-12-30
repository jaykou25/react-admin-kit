import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: 'A1',
    dataIndex: 'a1',
  },
  {
    title: 'A2',
    dataIndex: 'a2',
  },
  {
    fieldProps: { style: { display: 'none' } },
  },
  {
    title: 'B1',
    dataIndex: 'b1',
  },
  {
    title: 'B2',
    dataIndex: 'b2',
  },
  {
    title: 'B3',
    dataIndex: 'b3',
  },
];
