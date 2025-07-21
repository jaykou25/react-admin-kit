import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: 'Username',
    dataIndex: 'username',
    required: true,
  },
  {
    title: 'Is Member',
    dataIndex: 'isMember',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '0' },
      ],
    },
  },
  {
    valueType: 'dependency',
    name: ['isMember'],
    columns: ({ isMember }) => {
      if (isMember === '1') {
        return [
          {
            title: 'Member Level',
            dataIndex: 'grade',
          },
        ];
      }

      return [];
    },
  },
  {
    title: 'Extra Info (Read Only)',
    readonly: true,
    render: (_, record) => {
      return record.other || '-';
    },
  },
];
