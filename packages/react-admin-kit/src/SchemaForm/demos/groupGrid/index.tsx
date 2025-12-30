import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const GroupGrid = () => {
  return (
    <div>
      <SchemaForm
        name="demo-grid"
        grid
        // 👇这是设置给外层的👇
        colProps={{ span: 24 }}
        // 👆这是设置给外层的👆

        onFinish={console.log}
        columns={columns}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default GroupGrid;
