import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '序号',
    valueType: 'index',
    width: 48,
  },
  {
    title: '用户名',
    dataIndex: 'username',
    required: true,
  },
  {
    title: '电话',
    dataIndex: 'phone',
    required: true,
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    valueType: 'radio',
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
    required: true,
  },
];
