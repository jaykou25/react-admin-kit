import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '是否显示电话',
    dataIndex: 'showPhone',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: '是', value: 1 },
        { label: '否', value: 0 },
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
            title: '电话',
            dataIndex: 'phone',
          },
        ];
      } else {
        return [];
      }
    },
  },
];
