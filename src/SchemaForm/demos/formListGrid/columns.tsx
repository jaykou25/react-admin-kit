import type { FormColumnType } from 'react-admin-kit';
import ShopSelect from './ShopSelect';

export const columns: FormColumnType[] = [
  {
    dataIndex: 'shopList',
    valueType: 'formList',
    fieldProps: {
      alwaysShowItemLabel: true,
      creatorButtonProps: {
        creatorButtonText: '添加店铺',
      },
    },
    columns: [
      {
        valueType: 'group',
        // 👇 rowProps 需要设置在 group 上👇
        rowProps: { gutter: [16, 0] },
        columns: [
          {
            title: '店铺',
            dataIndex: 'shop',
            renderFormItem(item, config, form) {
              return <ShopSelect form={form} />;
            },
            formItemProps: {
              rules: [{ required: true }],
            },
            colProps: { span: 16 },
          },
          {
            title: '店铺面积',
            dataIndex: 'area',
            valueType: 'digit',
            colProps: { span: 8 },
            fieldProps: { style: { width: '100%' } },
          },
          {
            title: '店铺联系人',
            dataIndex: 'contacts',
            colProps: { span: 12 },
          },
          {
            title: '联系人电话',
            dataIndex: 'contactsPhone',
            colProps: { span: 12 },
          },
        ],
      },
    ],
  },
];
