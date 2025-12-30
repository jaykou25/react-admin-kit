import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '基本信息',
    valueType: 'group',
    columns: [
      {
        title: '用户名',
        dataIndex: 'username',
        required: true,

        // 👇这是设置给里层的👇
        colProps: { span: 24 },
      },
      {
        title: '电话',
        dataIndex: 'phone',
        required: true,

        // 👇这是设置给里层的👇
        colProps: { span: 24 },
      },
    ],
  },
  {
    valueType: 'divider',
  },
  {
    title: '额外信息',
    valueType: 'group',
    columns: [
      {
        title: '昵称',
        required: true,
        dataIndex: 'nickName',
      },
      {
        title: '性别',
        dataIndex: 'gender',
        valueType: 'select',
        fieldProps: {
          options: [
            {
              label: '男',
              value: '男',
            },
            {
              label: '女',
              value: '女',
            },
          ],
        },

        // 👇这是设置给里层的👇
        colProps: { span: 12 },
      },
      {
        title: '身份证号',
        dataIndex: 'idNumber',
        required: true,

        // 👇这是设置给里层的👇
        colProps: { span: 12 },
      },
    ],
  },
];
