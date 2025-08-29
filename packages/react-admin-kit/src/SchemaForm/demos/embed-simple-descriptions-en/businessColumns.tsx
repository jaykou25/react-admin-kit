import type { SelectProps } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

export const getBusinessColumns = (): FormColumnType[] => [
  {
    title: 'Company Name',
    dataIndex: 'company',
    required: true,
    valueType: 'select',
    fieldProps: (form, innerRef): SelectProps<any, any> => ({
      options: [
        {
          label: 'Company A',
          value: '1',
          address: 'Wuxi, Jiangsu Province',
          otherKey: '1a',
        },
      ],
      onChange: (val, option) => {
        console.log('onChange', { form });
        if (val) {
          form.setFieldsValue({ business: { address: option.address } });
          innerRef.current?.setData({ other: option.otherKey });
        } else {
          form.setFieldsValue({ business: { address: undefined } });
          innerRef.current?.setData({ other: undefined });
        }
      },
    }),
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Business Type',
    dataIndex: 'serviceName',
    valueType: 'select',
    fieldProps: {
      options: [
        {
          label: 'Business Without ID Card',
          value: '1',
        },
        {
          label: 'Business Requiring ID Card',
          value: '2',
        },
      ],
    },
  },
];
