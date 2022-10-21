import { BusinessTreeSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryOrg } from './query';

// 方便ts提示
type TreeSelectType = 'org';

export const BusinessTreeSelect = BusinessTreeSelectBuilder<TreeSelectType>({
  apis: [
    {
      api: queryOrg,
      type: 'org',
    },
  ],
});

const Basic = () => {
  return (
    <SchemaForm
      grid
      colProps={{ span: 8 }}
      onFinish={(values) => console.log({ values })}
      autoFocusFirstInput={false}
      columns={[
        {
          title: '组织',
          renderFormItem: () => <BusinessTreeSelect type="org" />,
        },
        {
          title: '组织2',
          renderFormItem: () => <BusinessTreeSelect type="org" />,
        },
      ]}
    />
  );
};

export default Basic;
