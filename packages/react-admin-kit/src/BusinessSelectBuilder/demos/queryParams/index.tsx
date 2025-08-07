import { BusinessSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryUser } from '../apis';

const BusinessSelect = BusinessSelectBuilder<'user'>({
  apis: [
    {
      api: queryUser,
      type: 'user',
      pagination: false,
    },
  ],
  defaultProps: {
    placeholder: '请选择',
  },
});

const QueryParams = () => {
  return (
    <div>
      <SchemaForm
        grid
        colProps={{ span: 8 }}
        autoFocusFirstInput={false}
        columns={[
          {
            title: 'All Users',
            renderFormItem: () => <BusinessSelect type="user" />,
          },
          {
            title: 'User A',
            renderFormItem: () => (
              <BusinessSelect type="user" queryParams={{ type: 1 }} />
            ),
          },
          {
            title: 'User B',
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
