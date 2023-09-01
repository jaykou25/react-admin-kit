import type { TableColumnType } from 'react-admin-kit';
import { ProTable } from 'react-admin-kit';
import { mockRequestForRenderText } from './apis';

const columns: TableColumnType[] = [
  {
    title: '用户名',
    dataIndex: 'name',
    ellipsis: true,
    copyable: true,
    width: 100,
    render: (dom) => {
      return (
        <div>
          <span style={{ marginRight: '3px' }}>👨</span>
          {dom}
        </div>
      );
    },
  },
  {
    title: '电话',
    dataIndex: 'phone',
    copyable: true,
    renderText: (text) => {
      return '+86 ' + text;
    },
  },
];

const RenderText = () => {
  return (
    <ProTable
      search={false}
      pagination={false}
      noPadding
      columns={columns}
      request={mockRequestForRenderText}
      bordered
    />
  );
};

export default RenderText;
