import { SchemaForm } from 'react-admin-kit';
import BusinessTreeSelect from '../BusinessTreeSelect-en';

const Demo = () => {
  return (
    <SchemaForm
      grid
      colProps={{ span: 8 }}
      onFinish={(values) => console.log({ values })}
      autoFocusFirstInput={false}
      columns={[
        {
          title: 'Company',
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
                  title: 'Department',
                  dataIndex: 'dept',
                  renderFormItem: () => (
                    <BusinessTreeSelect
                      queryParams={{ id: company }}
                      style={{ width: '250px' }}
                      type="dept"
                    />
                  ),
                },
              ];
            } else {
              return [
                {
                  title: 'Department',
                  dataIndex: 'dept',
                  fieldProps: {
                    style: { width: '250px' },
                    disabled: true,
                    placeholder: 'please choose a company first',
                  },
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
