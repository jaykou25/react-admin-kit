import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '用户名',
    dataIndex: 'username',
    required: true,
  },
  {
    title: '是否会员',
    dataIndex: 'isMember',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' },
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
            title: '会员等级',
            dataIndex: 'grade',
          },
        ];
      }

      return [];
    },
  },
  {
    title: '额外信息(只读)',
    readonly: true,
    render: (_, record) => {
      return record.other || '-';
    },
  },
];
