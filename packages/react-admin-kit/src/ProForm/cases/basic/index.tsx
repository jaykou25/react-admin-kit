import { ProForm, SchemaForm } from 'react-admin-kit';

const Demo = () => {
  return (
    <ProForm submitter onFinish={console.log}>
      <SchemaForm
        embed
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
            required: true,
          },
        ]}
      />
    </ProForm>
  );
};

export default Demo;
