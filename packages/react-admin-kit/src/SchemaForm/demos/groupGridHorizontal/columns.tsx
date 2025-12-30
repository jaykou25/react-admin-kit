import { Divider } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '基本信息',
    valueType: 'group',

    // 👇这是设置给外层的👇
    colProps: { span: 11 },
    columns: [
      {
        title: '用户名',
        dataIndex: 'username',
        required: true,
        colProps: { span: 24 },
      },
      {
        title: '电话',
        dataIndex: 'phone',
        required: true,
        colProps: { span: 24 },
      },
    ],
  },
  // 分隔符
  {
    renderFormItem: () => (
      <div style={{ textAlign: 'center' }}>
        <Divider type="vertical" style={{ height: '50px' }} />
      </div>
    ),
    fieldProps: { style: { width: '100%' } },

    // 👇这是设置给外层的👇
    colProps: { span: 2, style: { alignSelf: 'center' } },
  },
  {
    title: '额外信息',
    valueType: 'group',

    // 👇这是设置给外层的👇
    colProps: { span: 11 },
    columns: [
      {
        title: '昵称',
        dataIndex: 'nickName',
        required: true,
        colProps: { span: 24 },
      },
      {
        title: '性别',
        dataIndex: 'sex',
        colProps: { span: 24 },
        valueEnum: {
          男: { text: '男' },
          女: { text: '女' },
        },
      },
      {
        title: '身份证号',
        dataIndex: 'idNumber',
        required: true,
        colProps: { span: 24 },
      },
    ],
  },
];
