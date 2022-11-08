import { ProTable } from 'react-admin-kit';
import { mockRequestForRenderText } from '../basic/apis';

import 'antd/dist/antd.min.css';

const columns = [
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
    <div style={{ display: 'flex' }}>
      <ProTable
        search={false}
        pagination={false}
        noPadding
        name="用户"
        columns={columns}
        request={mockRequestForRenderText}
        bordered
      />
    </div>
  );
};

export default RenderText;
