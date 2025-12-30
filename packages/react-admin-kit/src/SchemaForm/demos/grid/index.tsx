import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const Grid = () => {
  return (
    <div>
      <SchemaForm
        name="grid-demo"
        grid={true}
        // https://ant.design/components/grid-cn/#row
        rowProps={{ gutter: [8, 0] }}
        // https://ant.design/components/grid-cn/#col
        colProps={{ span: 8 }} // 全局控制一行三列，同时在 columns 上可以单独覆盖
        columns={columns}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default Grid;
