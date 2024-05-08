import { SchemaForm } from 'react-admin-kit';

const Required = () => {
  return (
    <SchemaForm
      onFinish={console.log}
      columns={[
        {
          title: '用户名',
          dataIndex: 'username',
          required: true,
        },
      ]}
      autoFocusFirstInput={false}
      submitter
    />
  );
};

export default Required;
