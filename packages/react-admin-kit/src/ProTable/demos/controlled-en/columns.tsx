import { Popconfirm } from 'antd';
import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (handleDel: any): TableColumnType[] => [
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
    title: 'Birth Date',
    dataIndex: 'birthday',
    valueType: 'date',
  },

  {
    title: 'Gender',
    dataIndex: 'sex',
    formItemProps: {},
    valueEnum: {
      Male: { text: 'Male' },
      Female: { text: 'Female' },
    },
  },
  {
    title: 'ID Number',
    dataIndex: 'idNumber',
    hideInSearch: true,
  },
  {
    title: 'Actions',
    valueType: 'option',
    enableDelete: () => ({ danger: true }),
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
