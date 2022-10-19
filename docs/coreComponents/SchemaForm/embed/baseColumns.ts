export const getBaseColumns = () => {
  return [
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
    },
    {
      title: '昵称',
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
        // 3 / 16 = 0.1875
        labelCol: { flex: '0 0 18.75%' },
      },
      dataIndex: 'idNumber',
      renderFormItem: (_, { defaultRender }, form) => {
        const serviceName = form.getFieldValue(['business', 'serviceName']);
        if (serviceName == '1') {
          return false;
        }

        return defaultRender();
      },
    },
  ];
};
