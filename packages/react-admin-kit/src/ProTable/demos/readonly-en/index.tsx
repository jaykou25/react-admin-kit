import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';
import { getColumns } from './columns';
import { mockRequest } from '../mock-api';

const Readonly = () => {
  const innerRef = useRef<any>(null);

  return (
    <div>
      <ProTable
        name="User"
        search={false}
        cardProps={false}
        columns={getColumns()}
        innerRef={innerRef}
        request={mockRequest}
        bordered
        modalFormProps={{
          formProps: {
            layout: 'horizontal',
            grid: true,
            rowProps: { gutter: [24, 0] },
            colProps: { span: 12 },
            // Only used to distinguish name in documentation examples
            name: 'protable-readonly',
          },
        }}
      />
    </div>
  );
};

export default Readonly;
