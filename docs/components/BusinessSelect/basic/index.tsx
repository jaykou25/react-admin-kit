import { BusinessSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryBrand, queryColor } from './query';

export const BusinessSelect = BusinessSelectBuilder({
  apis: [
    {
      api: queryColor,
      type: 'color',
      pagination: false,
      labelKey: 'name',
      valueKey: 'id',
    },
    {
      api: queryBrand,
      type: 'brand',
      pagination: true,
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
          title: '颜色-不分页',
          renderFormItem: () => <BusinessSelect type="color" />,
        },
        {
          title: '品牌-分页(带搜索)',
          renderFormItem: () => <BusinessSelect type="brand" />,
        },
      ]}
    />
  );
};

export default Basic;
