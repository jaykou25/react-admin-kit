import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: 'Username',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'Username is required',
        },
      ],
    },
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
    title: 'Is Member',
    dataIndex: 'isMember',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '0' },
      ],
    },
  },
  {
    valueType: 'dependency',
    type: 'form',
    name: ['isMember'],
    columns: ({ isMember }) => {
      if (isMember === '1') {
        return [
          {
            title: 'Member Level',
            dataIndex: 'grade',
          },
        ];
      }

      return [];
    },
  },
  {
    title: 'Actions',
    valueType: 'option',
    enableDelete: true,
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => innerRef.current?.openModal('read', record)}
      >
        View
      </LinkButton>,
    ],
  },
];
