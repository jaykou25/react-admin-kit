import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '用户名',
    dataIndex: 'name',
    required: true,
  },
  {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    title: '操作',
    valueType: 'option',
    enableDelete: () => ({ danger: true }),
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => innerRef.current?.openModal('edit', record)}
      >
        编辑
      </LinkButton>,
    ],
  },
];
