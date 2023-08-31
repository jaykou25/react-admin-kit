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
    title: '昵称',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '昵称为必填项',
        },
      ],
    },
    dataIndex: 'nickName',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    valueEnum: {
      男: { text: '男' },
      女: { text: '女' },
    },
  },
  {
    title: '身份证号',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '身份证为必填项',
        },
      ],
    },
    dataIndex: 'idNumber',
  },
];
