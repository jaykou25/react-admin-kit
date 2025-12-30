import { useRef } from 'react';
import type { ActionRefType, InnerRefType } from 'react-admin-kit';
import { ProTable } from 'react-admin-kit';
import { mockRequest } from './apis';

import { getColumns } from './columns';

const SearchDependency = () => {
  const innerRef = useRef<InnerRefType>();
  const actionRef = useRef<ActionRefType>();

  return (
    <div>
      <ProTable
        name="User"
        columns={getColumns()}
        defaultHideInSearch // Default not shown in search form
        search={{
          defaultCollapsed: false,
          span: 8,
          layout: 'vertical',
        }}
        request={mockRequest}
        bordered
        innerRef={innerRef}
        actionRef={actionRef}
      />
    </div>
  );
};

export default SearchDependency;
