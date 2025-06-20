import type { SelectProps } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '员工',
    dataIndex: 'userId',
    valueType: 'select',
    fieldProps: (form, innerRef): SelectProps<any, any> => ({
      open: true,
      options: [
        {
          'data-testid': 'userOption1',
          label: '员工1',
          value: 'user1',
          userCode: 'c01',
          deptName: '部门A',
          deptId: '1',
        },
        {
          label: '员工2',
          value: 'user2',
          userCode: 'c02',
          deptName: '部门B',
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
            title: '部门',
            dataIndex: 'deptName',
            formItemProps: { style: { paddingTop: 86 } },
            fieldProps: (form, innerRef): SelectProps<any, any> => {
              return {
                // @ts-ignore
                ['data-testid']: 'deptInput',
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
