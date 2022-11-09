import { BusinessTreeSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryCompany, queryDept } from './query';

// 方便ts提示
type TreeSelectType = 'company' | 'dept';

export const BusinessTreeSelect = BusinessTreeSelectBuilder<TreeSelectType>({
  apis: [
    {
      api: queryCompany,
      type: 'company',
    },
    {
      api: queryDept,
      type: 'dept',
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
          title: '公司',
          dataIndex: 'company',
          renderFormItem: () => <BusinessTreeSelect type="company" />,
        },
        {
          valueType: 'dependency',
          name: ['company'],
          columns: ({ company }) => {
            if (company) {
              return [
                {
                  title: '部门',
                  dataIndex: 'dept',
                  renderFormItem: () => (
                    <BusinessTreeSelect queryParams={{ id: company }} type="dept" />
                  ),
                },
              ];
            } else {
              return [
                {
                  title: '部门',
                  dataIndex: 'dept',
                  fieldProps: { disabled: true, placeholder: '请选择公司' },
                },
              ];
            }
          },
        },
      ]}
    />
  );
};

export default Basic;
