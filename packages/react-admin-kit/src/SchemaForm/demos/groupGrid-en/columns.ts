import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: 'Basic Information',
    valueType: 'group',
    columns: [
      {
        title: 'Username',
        dataIndex: 'username',
        required: true,

        // 👇This is set for the inner item👇
        colProps: { span: 24 },
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        required: true,

        // 👇This is set for the inner item👇
        colProps: { span: 24 },
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
        required: true,
        dataIndex: 'nickName',
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

        // 👇This is set for the inner item👇
        colProps: { span: 12 },
      },
      {
        title: 'ID Number',
        dataIndex: 'idNumber',
        required: true,

        // 👇This is set for the inner item👇
        colProps: { span: 12 },
      },
    ],
  },
];
