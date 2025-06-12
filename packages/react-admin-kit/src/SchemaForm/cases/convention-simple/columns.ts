import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '用户',
    dataIndex: 'userId,userName',
    valueType: 'select',
    fieldProps: {
      labelInValue: true,
      options: [
        { label: 'Jack', value: '1' },
        { label: 'Jennifer', value: '2' },
      ],
    },
  },
];
