import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';
import { mockRequest } from '../basic/apis';

import { getColumns } from './columns';

const Readonly = () => {
  const innerRef = useRef<any>(null);

  return (
    <div>
      <ProTable
        name="用户"
        search={false}
        columns={getColumns()}
        innerRef={innerRef}
        request={mockRequest}
        bordered
        formProps={{ layout: 'horizontal', labelCol: { span: 5 } }}
      />
    </div>
  );
};

export default Readonly;
