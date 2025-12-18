import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: 'Username',
    dataIndex: 'name',
  },
  {
    title: 'Department',
    dataIndex: 'deptId,deptName',
    valueType: 'treeSelect',
    fieldProps: {
      placeholder: 'Please select',
      labelInValue: true,
      options: [
        {
          value: '1',
          label: 'Company A',
          children: [
            { value: '2', label: 'Tech Dept' },
            { value: '3', label: 'Sales Dept' },
          ],
        },
      ],
    },
    renderText: (text, record) => record.deptName,
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

  // Only show in table
  {
    title: 'Member Level',
    dataIndex: 'gradeName',
    type: 'table',
  },

  // Only show in form
  {
    type: 'form',
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
  {
    valueType: 'option',
    title: 'Actions',
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => innerRef.current?.openModal('edit', record)}
      >
        Edit
      </LinkButton>,
    ],
  },
];
