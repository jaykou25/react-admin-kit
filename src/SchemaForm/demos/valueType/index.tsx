import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const ValueType = () => {
  return (
    <SchemaForm
      columns={columns}
      grid
      colProps={{ span: 8 }}
      autoFocusFirstInput={false}
    />
  );
};

export default ValueType;
