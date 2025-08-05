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
        cardProps={false}
        columns={getColumns()}
        innerRef={innerRef}
        request={mockRequest}
        bordered
        modalFormProps={{
          formProps: {
            layout: 'horizontal',
            labelCol: { span: 5 },
            // 仅用于在文档示例中区分 name
            name: 'protable-readonly',
          },
        }}
      />
    </div>
  );
};

export default Readonly;
