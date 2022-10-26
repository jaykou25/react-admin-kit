import { ProTable } from 'react-admin-kit';
import { useRef } from 'react';
import { mockRequest } from './apis';

import 'antd/dist/antd.min.css';
import { getColumns } from './columns';

const Readonly = () => {
  const innerRef = useRef<any>();

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
