export const businessColumns = [
  {
    title: '公司名',
    dataIndex: 'company',
    colProps: { span: 24 },
    formItemProps: {
      labelCol: { span: 3 },
      rules: [
        {
          required: true,
        },
      ],
    },
  },
  {
    title: '地址',
    dataIndex: 'address',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
  {
    title: '办理业务',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
    dataIndex: 'serviceName',
  },
];
