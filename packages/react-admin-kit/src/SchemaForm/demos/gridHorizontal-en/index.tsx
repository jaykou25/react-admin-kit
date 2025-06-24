import { SchemaForm } from 'react-admin-kit';
import { getColumns } from './columns';

const GridHorizontal = () => {
  return (
    <div>
      <SchemaForm
        name="grid-demo-horizontal"
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [0, 0] }}
        colProps={{ span: 8 }}
        // Treat a whole row as 24 units. Each form item takes up 8 units.
        // Assume each label takes up 3 units
        labelCol={{ flex: '0 0 37.5%' }} // 3 / 8 = 0.375
        columns={getColumns()}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default GridHorizontal;
