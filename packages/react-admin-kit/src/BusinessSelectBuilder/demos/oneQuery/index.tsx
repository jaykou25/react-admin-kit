import { BusinessSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryCountry } from '../apis';

const BusinessSelect = BusinessSelectBuilder<'country'>({
  apis: [
    {
      api: queryCountry,
      type: 'country',
      pagination: false,
    },
  ],
  defaultProps: {
    placeholder: '请选择',
  },
});

const OneQuery = () => {
  return (
    <SchemaForm
      grid
      colProps={{ span: 8 }}
      onFinish={(values) => console.log({ values })}
      autoFocusFirstInput={false}
      columns={[
        {
          title: 'Country',
          dataIndex: 'country',
          renderFormItem: () => <BusinessSelect type="country" />,
        },
        {
          title: 'Country2',
          dataIndex: 'country2',
          renderFormItem: () => <BusinessSelect type="country" />,
        },
        {
          title: 'Country3',
          dataIndex: 'country3',
          renderFormItem: () => <BusinessSelect type="country" />,
        },
      ]}
    />
  );
};

export default OneQuery;
