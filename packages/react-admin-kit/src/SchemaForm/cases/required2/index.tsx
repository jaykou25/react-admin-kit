import { SchemaForm } from 'react-admin-kit';

const RequiredDemo = () => {
  return (
    <SchemaForm
      columns={[
        {
          title: 'Name',
          dataIndex: 'name',
          required: true,
          formItemProps: {},
        },
      ]}
      submitter
    />
  );
};

export default RequiredDemo;
