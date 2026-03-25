import ProForm from 'react-admin-kit/ProForm';
import SchemaForm from 'react-admin-kit/SchemaForm';

const Demo = ({ proFormReadonly, schemaFormReadonly }) => {
  return (
    <ProForm readonly={proFormReadonly}>
      <SchemaForm
        embed
        readonly={schemaFormReadonly}
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
