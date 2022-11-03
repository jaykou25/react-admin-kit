export const columns = [
  {
    title: '联系人',
    dataIndex: 'name',
  },
  {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    fieldProps: { hidden: true },
    render: () => '',
  },
  {
    title: '负责人',
    dataIndex: 'chargeName',
  },
  {
    title: '电话',
    dataIndex: 'chargePhone',
  },
  {
    title: '自定义',
    dataIndex: 'mail',
    render: (text, record) => {
      if (record.mode === 'read') {
        return '📧' + record.value;
      }
      return text;
    },
  },
];
