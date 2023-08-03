import { BusinessSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryBrand, queryColor, queryUser } from './query';

// 方便ts提示
type SelectType = 'color' | 'brand' | 'user';

export const BusinessSelect = BusinessSelectBuilder<SelectType>({
  apis: [
    {
      api: queryColor,
      type: 'color',
      pagination: false,
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
        submitter={{}}
        columns={[
          {
            title: '颜色-不分页',
            dataIndex: 'color',
            renderFormItem: () => {
              return <BusinessSelect type="color" placeholder="请选择颜色" />;
            },
          },
          {
            title: '品牌-分页(带搜索)',
            dataIndex: 'brand',
            renderFormItem: () => (
              <BusinessSelect labelInValue type="brand" placeholder="请选择品牌" />
            ),
          },
        ]}
      />
    </div>
  );
};

export default Basic;
