import { SchemaForm, ProForm } from 'react-admin-kit';

export default function () {
  return (
    <ProForm layout="vertical">
      <SchemaForm
        embed
        columns={[{ title: '用户', dataIndex: 'user' }, { title: '密码' }]}
      />
      <SchemaForm
        layout="vertical"
        embed
        columns={[{ title: '用户', dataIndex: 'user2' }, { title: '密码' }]}
      />

      <SchemaForm
        columns={[
          {
            dataIndex: 'shopList',
            valueType: 'formList',
            colProps: { span: 24 },
            rowProps: { gutter: [8, 0] },
            fieldProps: {
              className: 'jayjay',
              id: 'jayid',
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
        ]}
        autoFocusFirstInput={false}
        grid
        embed
        colProps={{ span: 24 }}
      />
    </ProForm>
  );
}
