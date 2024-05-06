import { useRef } from 'react';
import {
  ProForm,
  SchemaForm,
  TableColumnType,
  ProTable,
  Button,
} from 'react-admin-kit';

const columns = (): TableColumnType[] => {
  return [
    {
      title: '客户',
      dataIndex: 'customer',
      valueType: 'select',
      fieldProps: (form) => ({
        options: [
          { label: 'A', value: '1', address: '无锡' },
          { label: 'B', value: '2', address: '山东' },
        ],
        onChange: (val, option) => {
          form.setFieldsValue({
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
  const innerRef = useRef<any>();

  const innerRef2 = useRef<any>();
  const myFormRef = useRef<any>();

  return (
    <div>
      <div>非 formRef</div>
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
          innerRef={innerRef}
          search={false}
          toolbar={{
            actions: [
              <Button
                onClick={() => innerRef.current.openModal()}
                type="primary"
              >
                新增
              </Button>,
            ],
          }}
          columns={columns()}
        />
      </ProForm>
    </div>
  );
}
