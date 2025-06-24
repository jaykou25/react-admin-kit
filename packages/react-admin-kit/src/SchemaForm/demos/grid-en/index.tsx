import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const Grid = () => {
  return (
    <div>
      <SchemaForm
        name="grid-demo"
        grid={true}
        // https://ant.design/components/grid/#row
        rowProps={{ gutter: [8, 0] }}
        // https://ant.design/components/grid/#col
        colProps={{ span: 8 }}
        columns={columns}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default Grid;
