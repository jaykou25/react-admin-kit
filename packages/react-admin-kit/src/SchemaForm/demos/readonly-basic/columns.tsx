import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: 'A1',
    dataIndex: 'a1',
    render: (_, record) => record.a1 + 'with ID: ' + record.id,
  },
  {
    title: 'A2',
    dataIndex: 'a2',
  },
  {
    render: () => null,
  },
  {
    title: 'B1',
    dataIndex: 'b1',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: 'option 1', value: 'b1-1' },
        { label: 'option 2', value: 'b1-2' },
      ],
    },
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
