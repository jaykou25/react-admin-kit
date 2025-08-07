import { BusinessSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryBrand, queryColor, queryGroup } from '../apis';

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
      type: 'group',
      api: queryGroup,
    },
  ],
  defaultProps: {
    placeholder: 'please choose',
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
          title: 'Color',
          dataIndex: 'color',
          renderFormItem: () => {
            return <BusinessSelect type="color" placeholder="choose a color" />;
          },
        },
        {
          title: 'Brand(pagination with search)',
          dataIndex: 'brand',
          renderFormItem: () => (
            <BusinessSelect
              labelInValue
              type="brand"
              placeholder="please choose a brand"
            />
          ),
        },
        {
          title: 'Staff',
          dataIndex: 'staff',
          renderFormItem: () => {
            return <BusinessSelect type="group" />;
          },
        },
      ]}
    />
  );
};

export default Basic;
