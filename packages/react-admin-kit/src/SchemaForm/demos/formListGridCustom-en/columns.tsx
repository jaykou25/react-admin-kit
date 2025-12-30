import { Badge, Button } from 'antd';
import type { FormColumnType } from 'react-admin-kit';
import ShopSelect from '../formList-en/ShopSelect';

export const columns: FormColumnType[] = [
  {
    dataIndex: 'shopList',
    valueType: 'formList',
    initialValue: [{}],
    fieldProps: {
      alwaysShowItemLabel: true,
      creatorButtonProps: {
        creatorButtonText: 'Add Shop',
        type: 'primary',
      },
      // listDom is the collection of form items, action is the collection of action buttons
      itemRender: ({ listDom, action }, options) => {
        const { index, operation } = options;
        return (
          <div
            style={{
              border: '1px dashed rgba(0,0,0,0.6)',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '20px',
            }}
          >
            <Badge color="black" count={index + 1} />
            {listDom}
            <Button
              danger
              block
              type="primary"
              onClick={() => operation.remove(index)}
            >
              Delete Shop
            </Button>
          </div>
        );
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
