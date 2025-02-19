import { Select } from 'antd';
import { BusinessSelectBuilder, SchemaForm } from 'react-admin-kit';

/**
 * 在全局维护 BusinessSelect
 */
type SelectType = 'unGroup' | 'group'; // 定义 type 类型
export const BusinessSelect = BusinessSelectBuilder<SelectType>({
  apis: [
    {
      type: 'unGroup',
      api: () =>
        Promise.resolve({
          data: [
            {
              name: 'jack',
              id: 'i',
            },
          ],
        }),
    },

    {
      type: 'group',
      api: () =>
        Promise.resolve({
          data: [
            {
              name: 'manager',
              options: [
                {
                  name: 'Jack',
                  id: '1',
                  disabled: true,
                },
                {
                  name: 'Tom',
                  id: '2',
                  disabled: false,
                },
              ],
            },
          ],
        }),
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
          title: '未分组',
          dataIndex: 'unGroup',
          renderFormItem: () => {
            return <BusinessSelect type="unGroup" placeholder="请选择" />;
          },
        },

        {
          title: '分组',
          dataIndex: 'group',
          renderFormItem: () => {
            return <BusinessSelect type="group" placeholder="请选择" />;
          },
        },
        {
          title: '原生',
          dataIndex: 'ori',
          renderFormItem: () => {
            return (
              <Select
                options={[
                  {
                    label: 'Jack',
                    title: 'Jack title',
                    value: '1',
                  },
                ]}
              />
            );
          },
        },
      ]}
    />
  );
};

export default Basic;
