import { LinkButton } from 'react-admin-kit';
import type { ProColumnType } from 'react-admin-kit';

export const getColumns = (): ProColumnType[] => [
  {
    title: '用户名',
    dataIndex: 'name',
  },
  {
    title: '部门',
    dataIndex: 'deptId,deptName',
    valueType: 'select',
    fieldProps: (form, innerRef) => ({
      labelInValue: true,
      options: [
        {
          label: '销售部',
          value: '1',
          otherId: 'A',
        },
        {
          label: '技术部',
          value: '2',
          otherId: 'B',
        },
      ],
      onChange: (val, option) => {
        innerRef.current?.setData({ otherId: option.otherId });
      },
    }),
  },
  {
    title: '操作',
    valueType: 'option',
    enableDelete: true,
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton key={1} onClick={() => innerRef.current?.openModal('edit', record)}>
        编辑
      </LinkButton>,
    ],
  },
];
