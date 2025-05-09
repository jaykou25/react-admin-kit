import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '用户名',
    dataIndex: 'username',
    colProps: { span: 24 },
    formItemProps: {
      labelCol: { span: 3 },
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
      // labelCol可以在SchemaForm上整体设定
      labelCol: { span: 9 },
    },
  },
  {
    title: '昵称',
    formItemProps: {
      // labelCol已在SchemaForm上整体设定
    },
    dataIndex: 'nickName',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    formItemProps: {
      // labelCol已在SchemaForm上整体设定
    },
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '男', value: '男' },
        { label: '女', value: '女' },
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
