import type { SelectProps } from 'antd';
import { LinkButton, type TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  /** 表格部分 */
  {
    title: '序号',
    valueType: 'index',
  },
  {
    type: 'table',
    title: '员工',
    dataIndex: 'userName',
  },
  {
    type: 'table',
    title: '部门',
    dataIndex: 'deptName',
  },

  /** 表单部分 */
  {
    type: 'form',
    title: '员工',
    dataIndex: 'userId',
    valueType: 'select',
    fieldProps: (form, innerRef): SelectProps<any, any> => ({
      options: [
        {
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
    type: 'form',
    name: ['userId'],
    valueType: 'dependency',
    columns: ({ userId }) => {
      if (userId) {
        return [
          {
            title: '部门',
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
    title: '操作',
    valueType: 'option',
    render: (text, record, i, a, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => {
          innerRef.current?.setData({ deptId: record.deptId });
          innerRef.current?.openModal('edit', record);
        }}
      >
        编辑
      </LinkButton>,
      <LinkButton
        key={2}
        onClick={() => {
          innerRef.current?.openModal('read', record);
        }}
      >
        查看
      </LinkButton>,
    ],
  },
];
