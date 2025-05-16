import { SchemaForm } from 'react-admin-kit';
import BusinessSelect from '../BusinessSelect';

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
