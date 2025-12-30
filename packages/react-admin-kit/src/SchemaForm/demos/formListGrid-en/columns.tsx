import type { FormColumnType } from 'react-admin-kit';
import ShopSelect from '../formList-en/ShopSelect';

export const columns: FormColumnType[] = [
  {
    dataIndex: 'shopList',
    valueType: 'formList',
    fieldProps: {
      alwaysShowItemLabel: true,
      creatorButtonProps: {
        creatorButtonText: 'Add Shop',
      },
    },
    columns: [
      {
        valueType: 'group',
        // 👇 rowProps should be set on the group 👇
        rowProps: { gutter: [16, 0] },
        columns: [
          {
            title: 'Shop',
            dataIndex: 'shop',
            required: true,
            renderFormItem(item, config, form) {
              return <ShopSelect form={form} />;
            },
            colProps: { span: 16 },
          },
          {
            title: 'Shop Area',
            dataIndex: 'area',
            valueType: 'digit',
            colProps: { span: 8 },
            fieldProps: { style: { width: '100%' } },
          },
          {
            title: 'Shop Contact',
            dataIndex: 'contacts',
            colProps: { span: 12 },
          },
          {
            title: 'Contact Phone',
            dataIndex: 'contactsPhone',
            colProps: { span: 12 },
          },
        ],
      },
    ],
  },
];
