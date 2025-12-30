import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: 'Show User',
    dataIndex: 'showUser',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
      ],
    },
  },
  {
    valueType: 'dependency',
    name: ['showUser'],
    columns: ({ showUser }) => {
      if (showUser) {
        return [
          {
            title: 'User',
            dataIndex: 'user',
            valueType: 'select',
            fieldProps: {
              options: [{ label: 'Jack', value: '1' }],
            },
          },
        ];
      } else {
        return [];
      }
    },
  },
];
