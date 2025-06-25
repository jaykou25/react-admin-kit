import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: 'Basic Information',
    valueType: 'group',
    fieldProps: {
      // 👇You can pass Space props here, spacing is small👇
      size: 'small',
    },
    columns: [
      {
        title: 'Username',
        dataIndex: 'username',
        required: true,
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
      },
    ],
  },
  {
    valueType: 'divider',
  },
  {
    title: 'Additional Information',
    valueType: 'group',
    columns: [
      {
        title: 'Nickname',
        dataIndex: 'nickName',
        required: true,
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        valueType: 'select',
        fieldProps: {
          options: [
            {
              label: 'Male',
              value: 'Male',
            },
            {
              label: 'Female',
              value: 'Female',
            },
          ],
        },
      },
      {
        title: 'ID Number',
        dataIndex: 'idNumber',
      },
    ],
  },
];
