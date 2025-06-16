import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const Demo = () => {
  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        layout="vertical"
        onFinish={onFinish}
        columns={columns}
        autoFocusFirstInput={false}
        submitter
      />
    </div>
  );
};

export default Demo;
