import { LinkButton, type TableColumnType } from 'react-admin-kit';

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
    title: '性别',
    dataIndex: 'sex',
    formItemProps: {},
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
    valueType: 'option', // valueType 设为 option 代表是操作列
    render: (text, record, index, actionRef, innerRef) => [
      <LinkButton
        key={1}
        onClick={() => {
          console.log('editclick', innerRef);
          innerRef.current?.openModal('edit', record);
        }}
      >
        编辑
      </LinkButton>,
    ],
  },
];
