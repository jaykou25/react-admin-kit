import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '用户',
    dataIndex: 'userId,userName',
    valueType: 'select',
    fieldProps: {
      labelInValue: true,
      options: [
        { label: '张三', value: '1' },
        { label: '李四', value: '2' },
      ],
    },
  },
];
