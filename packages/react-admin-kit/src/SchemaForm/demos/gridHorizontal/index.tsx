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
        // 以整个一行作为 24 份。每个表单项占 8 份。
        // 假设每个 label 占据 3 份
        // n = 3
        labelCol={{ flex: '0 0 37.5%' }} // 3 / 8 = 0.375
        columns={getColumns()}
        autoFocusFirstInput={false}
      />
    </div>
  );
};

export default GridHorizontal;
