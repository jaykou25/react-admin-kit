import ProForm from 'react-admin-kit/ProForm';
import SchemaForm from 'react-admin-kit/SchemaForm';

const Demo = ({ onFinish }) => {
  return (
    <ProForm onFinish={onFinish} submitter>
      <SchemaForm
        embed
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
          },
          {
            title: 'Hobby',
            dataIndex: 'hobbyId,hobbyName',
            valueType: 'select',
            fieldProps: {
              labelInValue: true,
              options: [
                {
                  'data-testid': 'testOption1',
                  label: 'Music',
                  value: '8',
                },
              ],
            },
          },
        ]}
      />
    </ProForm>
  );
};

export default Demo;
