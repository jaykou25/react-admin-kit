import { SchemaForm } from 'react-admin-kit';

const Basic = () => {
  return (
    <SchemaForm
      name="demo-submitter"
      columns={[
        {
          title: 'User',
          dataIndex: 'username',
          required: true,
        },
      ]}
      autoFocusFirstInput={false}
      submitter
      onFinish={console.log}
    />
  );
};

export default Basic;
