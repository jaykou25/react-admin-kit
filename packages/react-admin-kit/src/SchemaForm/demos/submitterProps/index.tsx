import { SchemaForm } from 'react-admin-kit';

import { columns } from './columns';

const Demo = () => {
  return (
    <SchemaForm
      name="demo-submitter-props"
      columns={columns}
      autoFocusFirstInput={false}
      submitter={{
        style: { justifyContent: 'end' },
        submitButtonProps: { loading: true },
        resetButtonProps: { danger: true },
      }}
      onFinish={console.log}
    />
  );
};

export default Demo;
