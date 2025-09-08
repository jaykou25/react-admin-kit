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
    dataIndex: 'nickName',
    hideInSearch: true,
  },
  {
    title: 'Gender',
    dataIndex: 'sex',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
      ],
    },
  },
  {
    title: 'ID Number',
    dataIndex: 'idNumber',
    hideInSearch: true,
  },
  {
    title: 'Time Range',
    dataIndex: 'time',
    valueType: 'dateRange',
    transform: (vals) => {
      return {
        startTime: vals[0],
        endTime: vals[1],
      };
    },
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
