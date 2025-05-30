import { SchemaForm } from 'react-admin-kit';
import { getColumns } from './columns';

const Demo = () => {
  return (
    <div>
      <SchemaForm
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [8, 0] }}
        colProps={{ span: 8 }}
        labelCol={{ style: { minWidth: '80px' } }}
        columns={getColumns()}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default Demo;
