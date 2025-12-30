import type { FormColumnType } from 'react-admin-kit';
import ShopSelect from './ShopSelect';

export const columns: FormColumnType[] = [
  {
    dataIndex: 'shopList',
    valueType: 'formList',
    initialValue: [{}],

    // FormList component API: https://procomponents.ant.design/en-US/components/group#proformlist-api
    fieldProps: {
      alwaysShowItemLabel: true,
      creatorButtonProps: {
        creatorButtonText: 'Add Shop',
      },
    },
    columns: [
      {
        title: 'Shop',
        dataIndex: 'shop',
        required: true,
        renderFormItem(item, config, form) {
          return <ShopSelect form={form} />;
        },
      },
      {
        title: 'Shop Area',
        dataIndex: 'area',
        valueType: 'digit',
      },
      {
        title: 'Shop Contact',
        dataIndex: 'contacts',
      },
      {
        title: 'Contact Phone',
        dataIndex: 'contactsPhone',
      },
    ],
  },
];
