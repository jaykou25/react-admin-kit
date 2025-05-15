import { BusinessSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryBrand, queryColor, queryGroup, queryUser } from './query';

/**
 * 在全局维护 BusinessSelect
 */
type SelectType = 'color' | 'brand' | 'user' | 'group'; // 定义 type 类型
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
    {
      type: 'group',
      api: queryGroup,
    },
  ],
  defaultProps: {
    placeholder: '请选择',
  },
});

const Basic = () => {
  return (
    <SchemaForm
      grid
      colProps={{ span: 8 }}
      onFinish={(values) => console.log({ values })}
      autoFocusFirstInput={false}
      submitter
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
            <BusinessSelect
              labelInValue
              type="brand"
              placeholder="请选择品牌"
            />
          ),
        },
        {
          title: '分组',
          dataIndex: 'group',
          renderFormItem: () => {
            return <BusinessSelect type="group" placeholder="请选择" />;
          },
        },
      ]}
    />
  );
};

export default Basic;
