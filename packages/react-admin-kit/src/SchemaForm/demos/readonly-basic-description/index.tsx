import { SchemaForm } from 'react-admin-kit';
import { columns } from './columns';

const Readonly = () => {
  return (
    <SchemaForm
      name="demo-readonly-basic-description"
      layout="horizontal"
      grid={true}
      rowProps={{ gutter: [0, 0] }}
      colProps={{ span: 8 }}
      labelCol={{ span: 9 }}
      columns={columns}
      readonly={true}
      readonlyType="descriptions"
      initialValues={{
        id: 1,
        a1: 'a1',
        a2: 'a2',
        b1: 'b1-1',
        b2: 'b2',
        b3: 'b3',
      }}
    />
  );
};

export default Readonly;
