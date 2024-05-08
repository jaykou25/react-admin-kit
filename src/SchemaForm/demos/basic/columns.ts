import type { FormColumnType } from 'react-admin-kit/SchemaForm/types';
import Placeholder from '../placeholder';

export const columns: FormColumnType[] = [
  {
    title: '用户名',
    dataIndex: 'username',
    fieldProps: {
      Placeholder: '请输入用户名'
    },
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
  {
    title: '性别',
    dataIndex: 'sex',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '男', value: '男' },
        { label: '女', value: '女' },
      ],
    },
  },
];
