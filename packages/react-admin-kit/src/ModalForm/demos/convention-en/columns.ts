import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: 'Username',
    dataIndex: 'name',
  },
  {
    title: 'Department',
    dataIndex: 'deptId,deptName',
    valueType: 'treeSelect',
    width: 'sm',
    fieldProps: {
      placeholder: 'Please select',
      labelInValue: true,
      options: [
        {
          value: '1',
          label: 'Company A',
          children: [
            { value: '2', label: 'Tech Department' },
            { value: '3', label: 'Sales Department' },
          ],
        },
      ],
    },
  },
  {
    title: 'Member',
    dataIndex: 'isMember',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: 'No', value: 0 },
        { label: 'Yes', value: 1 },
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
            title: 'Member Level',
            dataIndex: 'gradeId,gradeName',
            valueType: 'select',
            fieldProps: {
              labelInValue: true,
              options: [
                { value: '1', label: 'Grade A' },
                { value: '2', label: 'Grade B' },
              ],
            },
          },
        ];
      }

      return [];
    },
  },
];
