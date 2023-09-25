import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    type: 'form',
    title: '父菜单id',
    dataIndex: 'parentId',
  },
  {
    title: '按钮名称',
    dataIndex: 'name',
    required: true,
  },
  {
    title: '权限标识',
    dataIndex: 'code',
  },
  {
    type: 'table',
    hideInSearch: true,
    title: '创建日期',
    dataIndex: 'createTime',
    valueType: 'date',
  },
  {
    title: '操作',
    valueType: 'option',
    enableDelete: true,
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
