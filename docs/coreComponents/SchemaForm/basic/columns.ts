export const columns = [
  {
    title: '用户名',
    dataIndex: 'username',
    formItemProps: {
      rules: [
        {
          required: true,
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
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
    dataIndex: 'idNumber',
  },
];
