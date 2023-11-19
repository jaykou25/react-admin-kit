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
    dataIndex: 'chargePerson',
    valueType: 'select',
    fieldProps: {
      labelInValue: true,
      options: [
        { label: '负责人1', value: '1' },
        { label: '负责人2', value: '2' },
      ],
    },
  },
  {
    title: '电话',
    dataIndex: 'chargePhone',
  },
  {
    title: '自定义',
    dataIndex: 'mail',
    renderText: () => {
      console.log('renderText');
    },
    render: (dom, record, ...rest) => {
      if (record.mode === 'read') {
        return '📧' + record.value;
      }
      return dom;
    },
  },
];
