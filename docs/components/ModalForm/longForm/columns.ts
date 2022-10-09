export const columns = [
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
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '职业',
    dataIndex: 'profession',
  },
  {
    title: '爱好',
    dataIndex: 'hobby',
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
