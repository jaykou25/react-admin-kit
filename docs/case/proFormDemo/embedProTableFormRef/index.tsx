import { useRef } from 'react';
import {
  ProForm,
  SchemaForm,
  TableColumnType,
  ProTable,
  Button,
} from 'react-admin-kit';

const columns2 = (options): TableColumnType[] => {
  const { myFormRef } = options;
  return [
    {
      title: '客户',
      dataIndex: 'customer',
      valueType: 'select',
      fieldProps: () => ({
        options: [
          { label: 'A', value: '1', address: '无锡' },
          { label: 'B', value: '2', address: '山东' },
        ],
        onChange: (val, option) => {
          console.log('myformref', myFormRef);
          myFormRef.current.setFieldsValue({
            address: option.address,
            name: option.address,
          });
        },
      }),
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
  ];
};

export default function () {
  const innerRef2 = useRef<any>();
  const myFormRef = useRef<any>();

  return (
    <div>
      <div style={{ marginTop: '20px' }}>formRef</div>
      <ProForm>
        <SchemaForm
          embed
          columns={[
            {
              title: '名字',
              dataIndex: 'name',
            },
          ]}
        />

        <ProTable
          innerRef={innerRef2}
          search={false}
          formProps={{ formRef: myFormRef }}
          toolbar={{
            actions: [
              <Button
                onClick={() => innerRef2.current.openModal()}
                type="primary"
              >
                新增
              </Button>,
            ],
          }}
          columns={columns2({ myFormRef })}
        />
      </ProForm>
    </div>
  );
}
