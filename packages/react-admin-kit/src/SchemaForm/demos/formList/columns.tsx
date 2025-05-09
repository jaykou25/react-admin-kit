import type { FormColumnType } from 'react-admin-kit';
import ShopSelect from './ShopSelect';

export const columns: FormColumnType[] = [
  {
    dataIndex: 'shopList',
    valueType: 'formList',
    initialValue: [{}],

    // FormList 组件的 api: https://procomponents.ant.design/components/group#proformlist-api
    fieldProps: {
      alwaysShowItemLabel: true,
      creatorButtonProps: {
        creatorButtonText: '添加店铺',
      },
    },
    columns: [
      {
        title: '店铺',
        dataIndex: 'shop',
        required: true,
        renderFormItem(item, config, form) {
          return <ShopSelect form={form} />;
        },
      },
      {
        title: '店铺面积',
        dataIndex: 'area',
        valueType: 'digit',
      },
      {
        title: '店铺联系人',
        dataIndex: 'contacts',
      },
      {
        title: '联系人电话',
        dataIndex: 'contactsPhone',
      },
    ],
  },
];
