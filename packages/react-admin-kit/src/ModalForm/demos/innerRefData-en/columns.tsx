import type { SelectProps } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: 'Employee',
    dataIndex: 'userId',
    valueType: 'select',
    fieldProps: (form, innerRef): SelectProps<any, any> => ({
      options: [
        {
          label: 'Employee 1',
          value: 'user1',
          userCode: 'c01',
          deptName: 'Department A',
          deptId: '1',
        },
        {
          label: 'Employee 2',
          value: 'user2',
          userCode: 'c02',
          deptName: 'Department B',
          deptId: '2',
        },
      ],
      onChange: (val, option) => {
        if (val) {
          innerRef.current?.setData({ deptId: option.deptId });
          form.setFieldsValue({ deptName: option.deptName });
        } else {
          innerRef.current?.setData({ deptId: undefined });
          form.setFieldsValue({ deptName: undefined });
        }
      },
    }),
  },
  {
    name: ['userId'],
    valueType: 'dependency',
    columns: ({ userId }) => {
      if (userId) {
        return [
          {
            title: 'Department',
            dataIndex: 'deptName',
            fieldProps: (form, innerRef): SelectProps<any, any> => {
              return {
                disabled: innerRef.current?.data.deptId === '1',
              };
            },
          },
        ];
      }

      return [];
    },
  },
];
