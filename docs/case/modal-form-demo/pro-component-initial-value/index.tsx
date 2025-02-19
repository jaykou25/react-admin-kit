import { SchemaForm } from 'react-admin-kit';
import { BetaSchemaForm } from '@ant-design/pro-form';

export default function () {
  return (
    <SchemaForm
      initialValues={{
        user: 'Jack',
      }}
      columns={[
        {
          title: 'user',
          dataIndex: 'user',
          initialValue: 'Hello',
        },
        {
          title: 'phone',
          dataIndex: 'phone',
          initialValue: 'World',
        },
      ]}
    />
  );
}
