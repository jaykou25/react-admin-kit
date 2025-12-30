import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '是否显示用户',
    dataIndex: 'showUser',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '是', value: 1 },
        { label: '否', value: 0 },
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
            title: '用户',
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
