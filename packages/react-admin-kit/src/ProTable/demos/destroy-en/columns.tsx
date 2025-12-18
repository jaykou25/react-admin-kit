import { LinkButton, TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
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
    title: 'Nickname',
    dataIndex: 'nickname',
    hideInSearch: true,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
    },
  },

  // for search
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    valueType: 'dateRange',
    colSize: 2,
    type: 'search',
    transform: (vals) => {
      return {
        startTime: vals[0],
        endTime: vals[1],
      };
    },
  },

  // for table
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    valueType: 'date',
    type: 'table',
  },
  {
    title: 'Actions',
    valueType: 'option',
    enableDelete: () => ({
      danger: true,
    }),
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
