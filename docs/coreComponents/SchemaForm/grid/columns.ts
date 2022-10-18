export const columns = [
  {
    title: '用户名',
    dataIndex: 'username',
    colProps: { span: 24 },
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
    formItemProps: {},
    valueEnum: {
      男: { text: '男' },
      女: { text: '女' },
    },
  },
  {
    title: '身份证号',
    colProps: { span: 16 },
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
