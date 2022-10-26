import { BusinessSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryBrand, queryColor, queryUser } from './query';

// 方便ts提示
type SelectType = 'color' | 'brand';

export const BusinessSelect = BusinessSelectBuilder<SelectType>({
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
    {
      api: queryUser,
      type: 'user',
    },
  ],
  defaultProps: {
    placeholder: '请选择',
  },
});

const Basic = () => {
  return (
    <div>
      <SchemaForm
        grid
        colProps={{ span: 8 }}
        onFinish={(values) => console.log({ values })}
        autoFocusFirstInput={false}
        columns={[
          {
            title: '颜色-不分页',
            renderFormItem: () => {
              return <BusinessSelect type="color" placeholder="请选择颜色" />;
            },
          },
          {
            title: '品牌-分页(带搜索)',
            renderFormItem: () => <BusinessSelect type="brand" placeholder="请选择品牌" />,
          },
        ]}
      />
    </div>
  );
};

export default Basic;
