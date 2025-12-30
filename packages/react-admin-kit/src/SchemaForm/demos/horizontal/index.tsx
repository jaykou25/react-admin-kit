import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const Horizontal = () => {
  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        layout="horizontal"
        labelCol={{ span: 3 }}
        onFinish={onFinish}
        columns={columns}
        autoFocusFirstInput={false}
        submitter
      />
    </div>
  );
};

export default Horizontal;
