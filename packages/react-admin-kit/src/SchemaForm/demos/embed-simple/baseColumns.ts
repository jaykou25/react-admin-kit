import type { FormColumnType } from 'react-admin-kit';

export const getBaseColumns = (): FormColumnType[] => {
  return [
    {
      title: '用户名',
      dataIndex: 'username',
      colProps: { span: 24 },
      required: true,
    },
    {
      valueType: 'dependency',
      // 👇这里是一个套嵌数组, 因为valueBaseName是business👇
      name: [['business', 'serviceName']],
      columns: (values) => {
        const serviceName = values?.business?.serviceName;

        if (serviceName === '2') {
          return [
            {
              title: '身份证号',
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
