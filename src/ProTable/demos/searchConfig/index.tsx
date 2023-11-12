import { ProTable } from 'react-admin-kit';
import { mockRequest } from './apis';

import { getColumns } from './columns';

export const FORM_TYPE_MAP = {
  new: '新增',
  edit: '编辑',
  read: '查看',
};

const SearchConfig = () => {
  return (
    <ProTable
      name="用户"
      search={{
        layout: 'horizontal',
        labelWrap: true,
        defaultCollapsed: false,
      }}
      columns={getColumns()}
      request={mockRequest}
      bordered
    />
  );
};

export default SearchConfig;
