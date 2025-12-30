import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '用户名',
    dataIndex: 'username',
    colProps: { span: 24 },
    required: true,
  },
  {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: '男', value: '男' },
        { label: '女', value: '女' },
        { label: '其它', value: '其它' },
      ],
    },
  },
  {
    title: '身份证号',
    colProps: { span: 16 },
    dataIndex: 'idNumber',
  },
];
