import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const Group = () => {
  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <SchemaForm
      name="demo-group"
      onFinish={onFinish}
      columns={columns}
      autoFocusFirstInput={false}
      submitter
    />
  );
};

export default Group;
