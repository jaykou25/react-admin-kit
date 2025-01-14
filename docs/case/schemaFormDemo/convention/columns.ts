import type { FormColumnType } from 'react-admin-kit/SchemaForm/types';

export const columns: FormColumnType[] = [
  {
    title: '基本信息',
    valueType: 'group',
    columns: [
      {
        title: '用户名',
        dataIndex: 'name',
        fieldProps: {
          ['data-testid']: 'userNameInput',
        },
      },
      {
        title: '部门',
        dataIndex: 'deptId,deptName',
        valueType: 'treeSelect',
        width: 'sm',
        fieldProps: {
          placeholder: '请选择',
          labelInValue: true,
          'data-testid': 'deptTreeSelect',
          open: true,
          placement: 'topLeft',
          getPopupContainer: () => document.body,
          treeDefaultExpandAll: true,
          options: [
            {
              value: '1',
              label: 'A公司',
              children: [
                {
                  value: '2',
                  label: '技术部',
                  ['data-testid']: 'deptOptionTech',
                },
                {
                  value: '3',
                  label: '销售部',
                  ['data-testid']: 'deptOptionSale',
                },
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
            {
              label: '否',
              value: 0,
            },
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
                  'data-testid': 'gradeSelect',
                  labelInValue: true,
                  placement: 'topLeft',
                  open: true,
                  getPopupContainer: () => document.body,
                  options: [
                    {
                      value: '1',
                      label: 'A',
                      ['data-testid']: 'gradeOptionA',
                    },
                    {
                      value: '2',
                      label: 'B',
                      ['data-testid']: 'gradeOptionB',
                    },
                  ],
                },
              },
            ];
          }

          return [];
        },
      },
    ],
  },
];
