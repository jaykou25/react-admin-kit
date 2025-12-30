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
        name="用户"
        columns={getColumns()}
        defaultHideInSearch // 默认在搜索表单中不展示
        search={{
          defaultCollapsed: false,
          span: 8,
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
