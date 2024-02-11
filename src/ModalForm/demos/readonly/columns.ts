import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '用户名',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '用户名为必填项',
        },
      ],
    },
  },
  {
    title: '电话',
    dataIndex: 'phone',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '电话为必填项',
        },
      ],
    },
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
];
