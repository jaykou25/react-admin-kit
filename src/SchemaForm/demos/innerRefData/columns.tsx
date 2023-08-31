import type { SelectProps } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '员工',
    dataIndex: 'userId',
    valueType: 'select',
    fieldProps: (form, innerRef): SelectProps<any, any> => ({
      options: [
        {
          label: '员工1',
          value: 'user1',
          userCode: 'c01',
        },
        {
          label: '员工2',
          value: 'user2',
          userCode: 'c02',
        },
      ],
      onChange: (val, option) => {
        innerRef.current?.setData({ userCode: option.userCode });
      },
    }),
  },
  {
    title: '是否展示部门',
    dataIndex: 'showDept',
    valueType: 'radio',
    fieldProps: {
      options: [
        {
          label: '是',
          value: 1,
        },
        {
          label: '否',
          value: 0,
        },
      ],
    },
  },
  {
    name: ['showDept'],
    valueType: 'dependency',
    columns: ({ showDept }) => {
      if (showDept) {
        return [
          {
            title: '部门',
            dataIndex: 'deptId,deptName',
            valueType: 'select',
            fieldProps: (form, innerRef): SelectProps<any, any> => ({
              labelInValue: true,
              options: [
                {
                  label: '销售部',
                  value: '1',
                  deptCode: 'A',
                },
                {
                  label: '技术部',
                  value: '2',
                  deptCode: 'B',
                },
              ],
              onChange: (val, option) => {
                innerRef.current?.setData({ deptCode: option.deptCode });
              },
            }),
          },
        ];
      }

      return [];
    },
  },
];
