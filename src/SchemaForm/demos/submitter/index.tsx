import { SchemaForm } from 'react-admin-kit';

import { columns } from './columns';

const Basic = () => {
  return (
    <SchemaForm
      columns={columns}
      autoFocusFirstInput={false}
      submitter
      onFinish={console.log}
    />
  );
};

export default Basic;
