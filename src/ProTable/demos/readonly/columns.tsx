import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '用户名',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '用户名为必填项',
        },
      ],
    },
  },
  {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    hideInSearch: true,
  },
  {
    title: '是否会员',
    dataIndex: 'isMember',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' },
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
            title: '会员等级',
            dataIndex: 'grade',
          },
        ];
      }

      return [];
    },
  },
  {
    title: '操作',
    valueType: 'option',
    enableDelete: true,
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => innerRef.current?.openModal('read', record)}
      >
        查看
      </LinkButton>,
    ],
  },
];
