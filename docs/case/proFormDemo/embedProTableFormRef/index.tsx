import { useRef } from 'react';
import {
  Button,
  ProForm,
  ProTable,
  SchemaForm,
  TableColumnType,
} from 'react-admin-kit';

export default function () {
  const myFormRef = useRef<any>();
  const innerRef = useRef<any>();

  const columns: TableColumnType[] = [
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

  return (
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
        name="formRef"
        innerRef={innerRef}
        search={false}
        formProps={{ formRef: myFormRef }}
        toolbar={{
          actions: [
            <Button onClick={() => innerRef.current.openModal()} type="primary">
              新增
            </Button>,
          ],
        }}
        columns={columns}
      />
    </ProForm>
  );
}
