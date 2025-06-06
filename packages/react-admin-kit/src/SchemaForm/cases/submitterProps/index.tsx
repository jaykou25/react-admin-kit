import { SchemaForm } from 'react-admin-kit';

import { columns } from './columns';

const Basic = () => {
  return (
    <SchemaForm
      columns={columns}
      autoFocusFirstInput={false}
      submitter={{
        className: 'submitter-case',
        style: { justifyContent: 'end' },
        submitButtonProps: { loading: true, ['data-testid']: 'submit-button' },
        resetButtonProps: { danger: true, ['data-testid']: 'reset-button' },
      }}
      onFinish={console.log}
    />
  );
};

export default Basic;
