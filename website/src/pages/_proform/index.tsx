import { ProForm, SchemaForm } from 'react-admin-kit';
const Page = () => {
  return (
    <div>
      <ProForm
        initialValues={{ a1: 'EHLLO' }}
        layout="horizontal"
        readonlyType="descriptions"
      >
        <SchemaForm
          readonly={true}
          embed
          columns={[
            {
              title: 'A1',
              dataIndex: 'a1',
            },
            {
              title: 'A2',
              dataIndex: 'a2',
            },
          ]}
        />
      </ProForm>
    </div>
  );
};

export default Page;
