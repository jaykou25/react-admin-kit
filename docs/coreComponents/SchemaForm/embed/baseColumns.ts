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
      title: '出生日期',
      dataIndex: 'birthday',
      valueType: 'dateMonth',
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
      valueType: 'dependency',
      name: [['business', 'serviceName']],
      colProps: { span: 16 },
      columns: (values) => {
        const serviceName = values?.business?.serviceName;
        if (serviceName == 1) {
          return [];
        } else {
          return [
            {
              title: '身份证号',
              dataIndex: 'idNumber',
              formItemProps: {
                // 3 / 16 = 0.1875
                labelCol: { flex: '0 0 18.75%' },
              },
            },
          ];
        }
      },
    },
  ];
};
