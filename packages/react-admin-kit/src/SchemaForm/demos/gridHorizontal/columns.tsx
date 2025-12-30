import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '用户名',
    dataIndex: 'username',
    colProps: { span: 24 },
    required: true,
    formItemProps: {
      labelCol: { flex: '0 0 12.5%' }, // 3 / 24 = 0.125
    },
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
    formItemProps: {
      // 3 / 16 = 0.1875
      labelCol: { flex: '0 0 18.75%' },
    },
    dataIndex: 'idNumber',
  },
];
