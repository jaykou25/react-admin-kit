import { Badge, Button } from 'antd';
import type { FormColumnType } from 'react-admin-kit';
import ShopSelect from './ShopSelect';

export const columns: FormColumnType[] = [
  {
    dataIndex: 'shopList',
    valueType: 'formList',
    initialValue: [{}],
    fieldProps: {
      alwaysShowItemLabel: true,
      creatorButtonProps: {
        creatorButtonText: '添加店铺',
        type: 'primary',
      },
      // listDom 是表单项合集, action 是操作按钮合集
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
              删除店铺
            </Button>
          </div>
        );
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
            required: true,
            renderFormItem(item, config, form) {
              return <ShopSelect form={form} />;
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
