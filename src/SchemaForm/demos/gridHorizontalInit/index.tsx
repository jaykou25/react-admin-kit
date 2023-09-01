import { SchemaForm } from 'react-admin-kit';
import { getColumns } from './columns';

const GridHorizontalInit = () => {
  return (
    <div>
      <SchemaForm
        layout="horizontal"
        grid={true}
        rowProps={{ gutter: [8, 0] }}
        colProps={{ span: 8 }}
        columns={getColumns()}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default GridHorizontalInit;
