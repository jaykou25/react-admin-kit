import { Select } from 'antd';

const getBusinessColumns = () => [
  {
    title: '公司名',
    dataIndex: 'company',
    colProps: { span: 24 },
    formItemProps: {
      labelCol: { span: 3 },
      rules: [
        {
          required: true,
        },
      ],
    },
    renderFormItem: () => (
      <Select
        options={[
          {
            label: 'A公司',
            value: '1',
            address: '江苏省',
            otherKey: '1a',
          },
        ]}
      />
    ),
    fieldProps: (form) => ({
      onChange: (val, option) => {
        if (val) {
          form.setFieldsValue({ business: { address: option.address } });
        } else {
          form.setFieldsValue({ business: { address: undefined } });
        }
      },
    }),
  },
  {
    title: '地址',
    dataIndex: 'address',
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender();
    },
  },
  {
    title: '办理业务',
    dataIndex: 'serviceName',
    renderFormItem: () => (
      <Select
        options={[
          {
            label: '不需要身份证业务',
            value: '1',
          },
          {
            label: '需要身份证业务',
            value: '2',
          },
        ]}
      />
    ),
  },
];

export default getBusinessColumns;
