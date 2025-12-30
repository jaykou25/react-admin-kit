import { SchemaForm, BusinessTreeSelectBuilder } from 'react-admin-kit';
import { queryCompany, queryDept } from '../apis';

const BusinessTreeSelect = BusinessTreeSelectBuilder<'company' | 'dept'>({
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

const Demo = () => {
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
                    <BusinessTreeSelect
                      queryParams={{ id: company }}
                      type="dept"
                    />
                  ),
                },
              ];
            } else {
              return [
                {
                  title: '部门',
                  dataIndex: 'dept',
                  fieldProps: { disabled: true, placeholder: '请先选择公司' },
                },
              ];
            }
          },
        },
      ]}
    />
  );
};

export default Demo;
