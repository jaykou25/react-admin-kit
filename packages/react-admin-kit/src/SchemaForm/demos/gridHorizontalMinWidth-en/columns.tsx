import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: 'User Name',
    dataIndex: 'username',
    colProps: { span: 24 },
    required: true,
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
    dataIndex: 'idNumber',
  },
];
