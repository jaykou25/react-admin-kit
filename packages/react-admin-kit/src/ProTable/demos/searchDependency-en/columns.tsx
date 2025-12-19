import { TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  // search section👇
  {
    type: 'search',
    title: 'User Type',
    dataIndex: 'userType',
    valueType: 'select',
    fieldProps: (form) => ({
      options: [
        {
          label: 'Regular User',
          value: '1',
          loginTime: '2024-8-1',
        },
        {
          label: 'Premium User',
          value: '2',
          loginTime: '2024-8-15',
        },
      ],
      onChange: (val, option) => {
        // Set values for search form
        if (val) {
          form.setFieldsValue({ loginTime: option.loginTime });
          if (val !== '2') {
            form.setFieldsValue({ minAmount: undefined });
          }
        } else {
          // Clear search form items
          form.setFieldsValue({ loginTime: undefined, minAmount: undefined });
        }
      },
    }),
  },
  {
    type: 'search',
    valueType: 'dependency',
    name: ['userType'],
    columns: ({ userType }) => {
      return [
        {
          title: 'Recharge Amount',
          dataIndex: 'minAmount',
          valueType: 'digit',
          fieldProps: {
            disabled: userType !== '2',
            min: 0,
          },
        },
      ];
    },
  },
  {
    type: 'search',
    title: 'Registration Time',
    dataIndex: 'loginTime',
  },
  // search section☝️

  {
    title: 'User',
    dataIndex: 'name',
  },
  {
    title: 'Nickname',
    dataIndex: 'nickName',
  },
];
