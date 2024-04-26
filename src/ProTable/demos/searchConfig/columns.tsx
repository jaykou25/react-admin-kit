import type { TableColumnType } from 'react-admin-kit';
import { LinkButton } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  {
    title: '很长很长很长的用户名',
    dataIndex: 'name',
    required: true,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateRange',
    colSize: 2,
    transform: (val) => {
      return {
        start: val[0],
        end: val[1],
      };
    },
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    hideInSearch: true,
  },
  {
    title: '性别',
    dataIndex: 'sex',
    hideInSearch: true,
    valueEnum: {
      男: { text: '男' },
      女: { text: '女' },
    },
  },
  {
    title: '身份证号',
    dataIndex: 'idNumber',
    hideInSearch: true,
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
