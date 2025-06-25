import { SchemaForm } from 'react-admin-kit';

const Demo = () => {
  return (
    <SchemaForm
      name="demo-submitter-props"
      columns={[
        {
          title: 'User',
          dataIndex: 'username',
          required: true,
        },
      ]}
      autoFocusFirstInput={false}
      submitter={{
        style: { justifyContent: 'end' },
        submitButtonProps: { loading: true },
        resetButtonProps: { danger: true },
      }}
      onFinish={console.log}
    />
  );
};

export default Demo;
