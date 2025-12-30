import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: 'Extra Info',
    dataIndex: 'extra',
    type: 'form',
  },
  {
    title: 'Username',
    dataIndex: 'name',
    required: true,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Actions',
    valueType: 'option',
    enableDelete: true,
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
