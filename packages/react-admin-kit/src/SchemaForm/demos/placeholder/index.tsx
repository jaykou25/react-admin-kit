import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const Placeholder = () => {
  return (
    <div>
      <SchemaForm
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [0, 0] }}
        colProps={{ span: 8 }}
        labelCol={{ span: 9 }}
        columns={columns}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default Placeholder;
