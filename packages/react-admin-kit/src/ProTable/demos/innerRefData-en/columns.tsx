import type { SelectProps } from 'antd';
import { LinkButton, type TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  /** Table section */
  {
    title: 'Index',
    valueType: 'index',
  },
  {
    type: 'table',
    title: 'Employee',
    dataIndex: 'userName',
  },
  {
    type: 'table',
    title: 'Department',
    dataIndex: 'deptName',
  },

  /** Form section */
  {
    type: 'form',
    title: 'Employee',
    dataIndex: 'userId',
    valueType: 'select',
    fieldProps: (form, innerRef): SelectProps<any, any> => ({
      options: [
        {
          label: 'Employee 1',
          value: 'user1',
          userCode: 'c01',
          deptName: 'Dept A',
          deptId: '1',
        },
        {
          label: 'Employee 2',
          value: 'user2',
          userCode: 'c02',
          deptName: 'Dept B',
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
    type: 'form',
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
  {
    title: 'Actions',
    valueType: 'option',
    render: (text, record, i, a, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => {
          innerRef.current?.setData({ deptId: record.deptId });
          innerRef.current?.openModal('edit', record);
        }}
      >
        Edit
      </LinkButton>,
      <LinkButton
        key={2}
        onClick={() => {
          innerRef.current?.openModal('read', record);
        }}
      >
        View
      </LinkButton>,
    ],
  },
];
