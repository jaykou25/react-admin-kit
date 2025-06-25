import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const GroupGrid = () => {
  return (
    <div>
      <SchemaForm
        name="demo-grid"
        grid
        // 👇This is set for the outer container👇
        colProps={{ span: 24 }}
        // 👆This is set for the outer container👆

        onFinish={console.log}
        columns={columns}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default GroupGrid;
