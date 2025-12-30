import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const Demo = () => {
  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        name="layout-inline"
        layout="inline"
        onFinish={onFinish}
        columns={columns}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default Demo;
