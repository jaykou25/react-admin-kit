import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: 'User Name',
    dataIndex: 'username',
    colProps: { span: 24 },
    required: true,
    formItemProps: {
      labelCol: { flex: '0 0 12.5%' }, // 3 / 24 = 0.125
    },
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Nickname',
    dataIndex: 'nickName',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
    },
  },
  {
    title: 'ID Card',
    colProps: { span: 16 },
    formItemProps: {
      // 3 / 16 = 0.1875
      labelCol: { flex: '0 0 18.75%' },
    },
    dataIndex: 'idNumber',
  },
];
