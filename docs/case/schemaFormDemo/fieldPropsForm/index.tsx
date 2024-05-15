import { SchemaForm, FormColumnType } from 'react-admin-kit';

const columns = (): FormColumnType[] => {
  return [
    {
      title: '客户',
      dataIndex: 'customer',
      valueType: 'select',
      fieldProps: (form) => ({
        open: true,
        placement: 'topLeft',
        options: [
          {
            label: 'A',
            value: '1',
            address: '无锡',
            ['data-testid']: 'targetOption',
          },
          { label: 'B', value: '2', address: '山东' },
        ],
        onChange: (val, option) => {
          form.setFieldsValue({
            userId: '1',
            userName: '张三',
          });
        },
      }),
    },
    {
      title: '用户',
      dataIndex: 'userId,userName',
      valueType: 'select',
      fieldProps: {
        labelInValue: true,
        open: true,
        placement: 'bottomLeft',
        getPopupContainer: (node) => node.parentNode,
        ['data-testid']: 'userCaseSelect',
        options: [
          {
            label: '张三',
            value: '1',
            ['data-testid']: 'resultOption',
          },
          {
            label: '李四',
            value: '2',
          },
        ],
      },
    },
  ];
};

export default function () {
  return (
    <div>
      <SchemaForm columns={columns()} />
    </div>
  );
}
