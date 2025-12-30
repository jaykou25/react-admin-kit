import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: 'User',
    dataIndex: 'username',
    fieldProps: {
      placeholder: 'please enter user name',
    },
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
    },
  },
];
