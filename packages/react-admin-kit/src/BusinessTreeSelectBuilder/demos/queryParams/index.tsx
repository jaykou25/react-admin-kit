import { SchemaForm } from 'react-admin-kit';
import BusinessTreeSelect from '../BusinessTreeSelect';

const Demo = () => {
  return (
    <SchemaForm
      grid
      colProps={{ span: 8 }}
      onFinish={(values) => console.log({ values })}
      autoFocusFirstInput={false}
      columns={[
        {
          title: '公司',
          dataIndex: 'company',
          renderFormItem: () => <BusinessTreeSelect type="company" />,
        },
        {
          valueType: 'dependency',
          name: ['company'],
          columns: ({ company }) => {
            if (company) {
              return [
                {
                  title: '部门',
                  dataIndex: 'dept',
                  renderFormItem: () => (
                    <BusinessTreeSelect
                      queryParams={{ id: company }}
                      type="dept"
                    />
                  ),
                },
              ];
            } else {
              return [
                {
                  title: '部门',
                  dataIndex: 'dept',
                  fieldProps: { disabled: true, placeholder: '请先选择公司' },
                },
              ];
            }
          },
        },
      ]}
    />
  );
};

export default Demo;
