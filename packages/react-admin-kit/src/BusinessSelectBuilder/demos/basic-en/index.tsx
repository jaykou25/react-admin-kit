import { SchemaForm } from 'react-admin-kit';
import BusinessSelect from '../BusinessSelect';

const Basic = () => {
  return (
    <SchemaForm
      grid
      colProps={{ span: 8 }}
      onFinish={(values) => console.log({ values })}
      autoFocusFirstInput={false}
      submitter
      columns={[
        {
          title: 'Country',
          dataIndex: 'country',
          renderFormItem: () => {
            return (
              <BusinessSelect type="country" placeholder="choose a country" />
            );
          },
        },
        {
          title: 'Brand(pagination with search)',
          dataIndex: 'brand',
          renderFormItem: () => (
            <BusinessSelect
              labelInValue
              type="brand"
              placeholder="please choose a brand"
            />
          ),
        },
        {
          title: 'Staff',
          dataIndex: 'staff',
          renderFormItem: () => {
            return <BusinessSelect type="staff" />;
          },
        },
      ]}
    />
  );
};

export default Basic;
