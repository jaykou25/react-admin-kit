import { SchemaForm } from 'react-admin-kit';
import BusinessTreeSelect from '../BusinessTreeSelect-en';

const Basic = () => {
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
          renderFormItem: () => (
            <BusinessTreeSelect placeholder="choose a company" type="company" />
          ),
        },
      ]}
    />
  );
};

export default Basic;
