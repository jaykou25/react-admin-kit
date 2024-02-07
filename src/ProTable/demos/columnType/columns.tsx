import { LinkButton, type TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  /* 搜索区域 */
  {
    type: 'search',
    title: '时间范围',
    dataIndex: 'search1',
    valueType: 'dateRange',
    transform: (val) => ({ range: val.join(',') }),
  },
  {
    type: 'search',
    title: '搜索二',
    dataIndex: 'search2',
  },
  {
    type: 'search',
    title: '搜索三',
    dataIndex: 'search3',
    search: false, // 极端例子, 该属性会被覆盖
    hideInSearch: true, // 极端例子, 该属性会被覆盖
  },
  /* 搜索区域↑ */

  /* 表单区域 */
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    /* 只在表单中显示 */
    type: 'form',
    title: '密码',
    dataIndex: 'password',
    required: true,
  },
  {
    /* 只在表格中显示 */
    type: 'table',
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
