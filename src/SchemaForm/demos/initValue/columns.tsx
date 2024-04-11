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
    render: (text) => {
      console.log('text', text, typeof text);
      if (text === undefined || text === '') return '-';

      return text ? '是' : '否';
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
            dataIndex: 'user,userName',
            valueType: 'select',
            fieldProps: {
              labelInValue: true,
              options: [
                { label: '用户1', value: '1' },
                { label: '用户2', value: '2' },
                { label: '用户3', value: '3' },
              ],
            },
          },
        ];
      } else {
        return [];
      }
    },
  },
];
