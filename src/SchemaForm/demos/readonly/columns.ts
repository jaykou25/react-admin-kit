import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
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
    render: () => null,
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
    render: (dom, record) => {
      if (record.mode === 'read') {
        return '📧' + record.value;
      }
      return dom;
    },
  },
];
