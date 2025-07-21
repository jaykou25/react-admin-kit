import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: 'Show Phone',
    dataIndex: 'showPhone',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
      ],
    },
  },
  {
    valueType: 'dependency',
    name: ['showPhone'],
    columns: ({ showPhone }) => {
      if (showPhone) {
        return [
          {
            title: 'Phone',
            dataIndex: 'phone',
          },
        ];
      } else {
        return [];
      }
    },
  },
];
