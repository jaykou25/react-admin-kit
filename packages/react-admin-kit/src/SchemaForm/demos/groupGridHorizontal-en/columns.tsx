import { Divider } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: 'Basic Information',
    valueType: 'group',

    // 👇This is set for the outer container👇
    colProps: { span: 11 },
    columns: [
      {
        title: 'Username',
        dataIndex: 'username',
        required: true,
        colProps: { span: 24 },
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        required: true,
        colProps: { span: 24 },
      },
    ],
  },
  // Divider
  {
    renderFormItem: () => (
      <div style={{ textAlign: 'center' }}>
        <Divider type="vertical" style={{ height: '50px' }} />
      </div>
    ),
    fieldProps: { style: { width: '100%' } },

    // 👇This is set for the outer container👇
    colProps: { span: 2, style: { alignSelf: 'center' } },
  },
  {
    title: 'Additional Information',
    valueType: 'group',

    // 👇This is set for the outer container👇
    colProps: { span: 11 },
    columns: [
      {
        title: 'Nickname',
        dataIndex: 'nickName',
        required: true,
        colProps: { span: 24 },
      },
      {
        title: 'Gender',
        dataIndex: 'sex',
        colProps: { span: 24 },
        valueEnum: {
          Male: { text: 'Male' },
          Female: { text: 'Female' },
        },
      },
      {
        title: 'ID Number',
        dataIndex: 'idNumber',
        required: true,
        colProps: { span: 24 },
      },
    ],
  },
];
