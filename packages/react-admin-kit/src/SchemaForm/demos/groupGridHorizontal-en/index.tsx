import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const GroupGridHorizontal = () => {
  return (
    <div>
      <SchemaForm
        name="demo-grid-hor"
        grid
        onFinish={console.log}
        columns={columns}
        autoFocusFirstInput={false}
        submitter
      />
    </div>
  );
};

export default GroupGridHorizontal;
