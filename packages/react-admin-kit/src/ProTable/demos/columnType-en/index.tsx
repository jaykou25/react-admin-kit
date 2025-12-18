import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { ProTable } from 'react-admin-kit';

import { getColumns } from './columns';

const Demo = () => {
  const innerRef = useRef<InnerRefType>();
  const actionRef = useRef<ActionRefType>();

  return (
    <ProTable
      name="User"
      defaultHideInSearch={true}
      search={{ defaultCollapsed: false, layout: 'vertical' }}
      columns={getColumns()}
      request={() => {
        return Promise.resolve({
          data: [
            {
              id: 1,
              username: 'User1',
              passwor: '123456',
              createTime: 1695655397070,
            },
          ],
        });
      }}
      bordered
      innerRef={innerRef}
      actionRef={actionRef}
      // Only used to distinguish name in documentation examples
      modalFormProps={{
        formProps: {
          name: 'column-type',
        },
      }}
    />
  );
};

export default Demo;
