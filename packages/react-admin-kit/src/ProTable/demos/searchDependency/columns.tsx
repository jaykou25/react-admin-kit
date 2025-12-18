import { LinkButton, TableColumnType } from 'react-admin-kit';

export const getColumns = (): TableColumnType[] => [
  // search 部分👇
  {
    type: 'search',
    title: '用户类型',
    dataIndex: 'userType',
    valueType: 'select',
    fieldProps: (form) => ({
      options: [
        {
          label: '一般用户',
          value: '1',
          loginTime: '2024-8-1',
        },
        {
          label: '充值用户',
          value: '2',
          loginTime: '2024-8-15',
        },
      ],
      onChange: (val, option) => {
        // 给查询表单赋值
        if (val) {
          form.setFieldsValue({ loginTime: option.loginTime });
          if (val !== '2') {
            form.setFieldsValue({ minAmount: undefined });
          }
        } else {
          // 清空查询表单项
          form.setFieldsValue({ loginTime: undefined, minAmount: undefined });
        }
      },
    }),
  },
  {
    type: 'search',
    valueType: 'dependency',
    name: ['userType'],
    columns: ({ userType }) => {
      return [
        {
          title: '充值金额',
          dataIndex: 'minAmount',
          valueType: 'digit',
          fieldProps: {
            disabled: userType !== '2',
            min: 0,
          },
        },
      ];
    },
  },
  {
    type: 'search',
    title: '注册时间',
    dataIndex: 'loginTime',
  },
  // search 部分☝️

  {
    title: '用户',
    dataIndex: 'name',
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
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
  {
    title: '身份证号',
    dataIndex: 'idNumber',
  },
  {
    title: '时间范围',
    dataIndex: 'time',
    valueType: 'dateRange',
    transform: (vals) => {
      return {
        startTime: vals[0],
        endTime: vals[1],
      };
    },
  },
];
