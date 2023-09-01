import type { SelectProps } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

export const getColumns = (): FormColumnType[] => [
  {
    title: '用户名',
    dataIndex: 'name',
  },
  {
    title: '部门 (包含额外信息)',
    dataIndex: 'deptId,deptName',
    valueType: 'select',
    fieldProps: (form, innerRef): SelectProps<any, any> => ({
      labelInValue: true,
      options: [
        {
          label: '销售部',
          value: '1',
          otherId: 'A',
        },
        {
          label: '技术部',
          value: '2',
          otherId: 'B',
        },
      ],
      onChange: (val, option) => {
        innerRef.current?.setData({ otherId: option.otherId });
      },
    }),
  },
];
