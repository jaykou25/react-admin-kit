import { BusinessTreeSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryCompany } from '../apis';

const BusinessTreeSelect = BusinessTreeSelectBuilder<'company'>({
  apis: [
    {
      api: queryCompany,
      type: 'company',
    },
  ],
});

const Basic = () => {
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
          renderFormItem: () => (
            <BusinessTreeSelect placeholder="请选择公司" type="company" />
          ),
        },
      ]}
    />
  );
};

export default Basic;
