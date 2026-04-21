import ProForm from 'react-admin-kit/ProForm';
import SchemaForm from 'react-admin-kit/SchemaForm';

const Demo = ({ proFormReadonlyType, schemaFormReadonlyType }) => {
  return (
    <ProForm readonly readonlyType={proFormReadonlyType}>
      <SchemaForm
        embed
        readonlyType={schemaFormReadonlyType}
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
