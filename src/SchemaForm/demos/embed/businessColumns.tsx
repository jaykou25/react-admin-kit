import type { SelectProps } from 'antd';
import type { FormColumnType } from 'react-admin-kit';

const getBusinessColumns = (): FormColumnType[] => [
  {
    title: '公司名',
    dataIndex: 'company',
    colProps: { span: 24 },
    required: true,
    valueType: 'select',
    formItemProps: {
      labelCol: { span: 3 },
    },
    fieldProps: (form, innerRef): SelectProps<any, any> => ({
      options: [
        {
          label: 'A公司',
          value: '1',
          address: '江苏省无锡市',
          otherKey: '1a',
        },
      ],
      onChange: (val, option) => {
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
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '办理业务',
    dataIndex: 'serviceName',
    valueType: 'select',
    fieldProps: {
      options: [
        {
          label: '不需要身份证业务',
          value: '1',
        },
        {
          label: '需要身份证业务',
          value: '2',
        },
      ],
    },
    render: (text) => {
      if (text === '1') {
        return '不需要身份证业务';
      }

      if (text === '2') {
        return '需要身份证业务';
      }

      return '-';
    },
  },
];

export default getBusinessColumns;
