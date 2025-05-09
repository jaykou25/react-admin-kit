import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '基本信息',
    valueType: 'group',
    fieldProps: {
      // 👇可以传入Space的属性, 这里间距是small👇
      size: 'small',
    },
    columns: [
      {
        title: '用户名',
        dataIndex: 'username',
        required: true,
      },
      {
        title: '电话',
        dataIndex: 'phone',
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
        dataIndex: 'nickName',
        required: true,
      },
      {
        title: '性别',
        dataIndex: 'sex',
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
      },
      {
        title: '身份证号',
        dataIndex: 'idNumber',
      },
    ],
  },
];
