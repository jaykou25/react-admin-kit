import { LinkButton, type TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  /* Search area */
  {
    type: 'search',
    title: 'Time Range',
    dataIndex: 'search1',
    valueType: 'dateRange',
    transform: (val) => ({ range: val.join(',') }),
  },
  {
    type: 'search',
    title: 'Search Two',
    dataIndex: 'search2',
  },
  {
    type: 'search',
    title: 'Search Three',
    dataIndex: 'search3',
    search: false, // Extreme example, this property will be overridden
    hideInSearch: true, // Extreme example, this property will be overridden
  },
  /* Search area↑ */

  /* Form area */
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    /* Only show in form */
    type: 'form',
    title: 'Password',
    dataIndex: 'password',
    required: true,
  },
  {
    /* Only show in table */
    type: 'table',
    title: 'Create Date',
    dataIndex: 'createTime',
    valueType: 'date',
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
