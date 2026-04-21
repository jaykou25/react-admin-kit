import ProForm from 'react-admin-kit/ProForm';
import SchemaForm from 'react-admin-kit/SchemaForm';

const Demo = () => {
  return (
    <ProForm submitter>
      <SchemaForm embed columns={[{ title: 'HI', dataIndex: 'hi' }]} />
    </ProForm>
  );
};

export default Demo;
