export const columns = [
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
];
