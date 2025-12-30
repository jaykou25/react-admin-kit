import type { FormColumnType } from 'react-admin-kit/SchemaForm/types';

export const columns: FormColumnType[] = [
  {
    title: '用户名',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
];
