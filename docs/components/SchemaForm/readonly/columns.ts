export const columns = [
  {
    title: '联系人',
    dataIndex: 'name',
    readonly: true,
  },
  {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    valueEnum: {
      男: { text: '男' },
      女: { text: '女' },
    },
  },
];
