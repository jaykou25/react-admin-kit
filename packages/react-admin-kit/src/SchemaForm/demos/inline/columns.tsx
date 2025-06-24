import { Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    dataIndex: 'username',
    fieldProps: {
      placeholder: 'Username',
      prefix: <UserOutlined />,
    },
  },
  {
    dataIndex: 'password',
    fieldProps: {
      placeholder: 'Password',
      prefix: <LockOutlined />,
    },
  },
  {
    dataIndex: 'none',
    renderFormItem(item, config, form, innerRef) {
      return (
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      );
    },
  },
];
