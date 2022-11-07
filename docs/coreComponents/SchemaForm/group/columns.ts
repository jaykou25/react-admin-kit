export const columns = [
  {
    title: '基本信息',
    valueType: 'group',
    fieldProps: {
      // 👇可以传入Space的属性, 这里间距是small👇
      size: 'small',
    },
    columns: [
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
    ],
  },
  {
    valueType: 'divider',
  },
  {
    title: '额外信息',
    valueType: 'group',
    columns: [
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
    ],
  },
];
