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
        colProps: { span: 24 },
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
        colProps: { span: 24 },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '电话为必填项',
            },
          ],
        },
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
        colProps: { span: 24 },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '昵称为必填项',
            },
          ],
        },
        dataIndex: 'nickName',
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
        colProps: { span: 24 },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '身份证为必填项',
            },
          ],
        },
      },
    ],
  },
];
