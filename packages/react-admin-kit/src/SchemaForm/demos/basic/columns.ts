import type { FormColumnType } from 'react-admin-kit';

export const columns: FormColumnType[] = [
  {
    title: '用户名',
    dataIndex: 'username',
    fieldProps: {
      placeholder: '请输入用户名',
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
    dataIndex: 'gender',
    valueType: 'radio',
    fieldProps: {
      options: [
        { label: '男', value: '男' },
        { label: '女', value: '女' },
        { label: '其它', value: '其它' },
      ],
    },
  },
];
