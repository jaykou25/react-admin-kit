import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const FormList = () => {
  return (
    <SchemaForm
      name="demo-form-list-custom"
      onFinish={console.log}
      columns={columns}
      submitter
      autoFocusFirstInput={false}
      grid
      colProps={{ span: 24 }}
    />
  );
};

export default FormList;
