import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const FormList = () => {
  return (
    <SchemaForm
      name="demo-form-list"
      onFinish={console.log}
      columns={columns}
      submitter
      autoFocusFirstInput={false}
    />
  );
};

export default FormList;
