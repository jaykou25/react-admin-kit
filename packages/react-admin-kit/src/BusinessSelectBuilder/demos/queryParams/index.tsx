import { SchemaForm } from 'react-admin-kit';
import { BusinessSelect } from '../basic';

const QueryParams = () => {
  return (
    <div>
      <SchemaForm
        grid
        colProps={{ span: 8 }}
        autoFocusFirstInput={false}
        columns={[
          {
            title: '人员所有',
            renderFormItem: () => <BusinessSelect type="user" />,
          },
          {
            title: '人员A',
            renderFormItem: () => (
              <BusinessSelect type="user" queryParams={{ type: 1 }} />
            ),
          },
          {
            title: '人员B',
            renderFormItem: () => (
              <BusinessSelect type="user" queryParams={{ type: 2 }} />
            ),
          },
        ]}
      />
    </div>
  );
};

export default QueryParams;
