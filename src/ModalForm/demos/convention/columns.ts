import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '用户名',
    dataIndex: 'name',
  },
  {
    title: '部门',
    dataIndex: 'deptId,deptName',
    valueType: 'treeSelect',
    width: 'sm',
    fieldProps: {
      placeholder: '请选择',
      labelInValue: true,
      options: [
        {
          value: '1',
          label: 'A公司',
          children: [
            { value: '2', label: '技术部' },
            { value: '3', label: '销售部' },
          ],
        },
      ],
    },
  },
  {
    title: '会员',
    dataIndex: 'isMember',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '否', value: 0 },
        { label: '是', value: 1 },
      ],
    },
  },
  {
    valueType: 'dependency',
    name: ['isMember'],
    columns: ({ isMember }) => {
      if (isMember) {
        return [
          {
            title: '会员等级',
            dataIndex: 'gradeId,gradeName',
            valueType: 'select',
            fieldProps: {
              labelInValue: true,
              options: [
                { value: '1', label: 'A' },
                { value: '2', label: 'B' },
              ],
            },
          },
        ];
      }

      return [];
    },
  },
];
