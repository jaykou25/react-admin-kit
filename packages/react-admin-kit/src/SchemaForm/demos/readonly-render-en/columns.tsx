import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Hobbies',
    dataIndex: 'hobbies',
  },
  {
    valueType: 'dependency',
    name: ['name', 'hobbies'],
    columns: ({ name, hobbies }) => [
      {
        title: 'Render',
        readonly: true, // 👈
        render: (_, record) =>
          `ID: ${record.id || '-'}, Name: ${name || '-'}, Hobbies: ${
            hobbies || '-'
          }`,
      },
    ],
  },
];
