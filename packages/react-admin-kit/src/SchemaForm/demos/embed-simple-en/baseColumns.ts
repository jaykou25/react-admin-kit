import type { FormColumnType } from 'react-admin-kit';

export const getBaseColumns = (): FormColumnType[] => {
  return [
    {
      title: 'Username',
      dataIndex: 'username',
      colProps: { span: 24 },
      required: true,
      formItemProps: {
        labelCol: { span: 3 },
      },
    },
    {
      valueType: 'dependency',
      // 👇This is a nested array because valueBaseName is business👇
      name: [['business', 'serviceName']],
      columns: (values) => {
        const serviceName = values?.business?.serviceName;

        if (serviceName === '2') {
          return [
            {
              title: 'ID Number',
              dataIndex: 'idNumber',
            },
          ];
        } else {
          return [];
        }
      },
    },
  ];
};
