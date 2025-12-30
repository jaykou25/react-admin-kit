import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '爱好',
    dataIndex: 'hobbies',
  },
  {
    valueType: 'dependency',
    name: ['name', 'hobbies'],
    columns: ({ name, hobbies }) => [
      {
        title: '自定义',
        readonly: true, // 👈
        render: (_, record) =>
          `ID: ${record.id || '-'}, 姓名: ${name || '-'}, 爱好: ${
            hobbies || '-'
          }`,
      },
    ],
  },
];
