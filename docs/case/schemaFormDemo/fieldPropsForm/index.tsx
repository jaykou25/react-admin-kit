import { SchemaForm, FormColumnType } from 'react-admin-kit';

const columns = (): FormColumnType[] => {
  return [
    {
      title: '客户',
      dataIndex: 'customer',
      valueType: 'select',
      fieldProps: (form) => ({
        options: [
          { label: 'A', value: '1', address: '无锡' },
          { label: 'B', value: '2', address: '山东' },
        ],
        onChange: (val, option) => {
          form.setFieldsValue({
            // 'userId,userName': { value: '1', label: 'hi' },
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
        // open: true,
        getPopupContainer: (node) => node.parentNode,
        ['data-testid']: 'userCaseSelect',
        options: [
          {
            label: '张三',
            value: '1',
          },
          {
            label: '李四',
            value: '2',
            ['data-testid']: 'userCaseSelectOption',
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
