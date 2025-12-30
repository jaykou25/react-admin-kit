import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: 'Index',
    valueType: 'index',
    width: 48,
  },
  {
    title: 'Username',
    dataIndex: 'username',
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
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Profession',
    dataIndex: 'profession',
  },
  {
    title: 'Hobby',
    dataIndex: 'hobby',
  },
  {
    title: 'Gender',
    dataIndex: 'sex',
    valueEnum: {
      Male: { text: 'Male' },
      Female: { text: 'Female' },
    },
  },
  {
    title: 'ID Number',
    dataIndex: 'idNumber',
    required: true,
  },
];
