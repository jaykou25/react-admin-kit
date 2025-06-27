import { Table } from 'antd';

const FormValueTable = () => {
  return (
    <Table
      style={{ marginTop: '10px' }}
      size="small"
      pagination={false}
      bordered
      rowKey="name"
      dataSource={[
        {
          name: 'getFieldsValue',
          desc: 'Get form values',
          remark: '',
          source: 'Antd Form',
        },
        {
          name: 'validateFields',
          desc: 'Return form values after validation passes',
          remark: '',
          source: 'Antd Form',
        },
        {
          name: 'getFieldsFormatValue',
          desc: 'Get form values (will additionally process time format according to valueType; will also process transform in schema)',
          remark:
            'Will process time format according to valueType; will process transform in schema',
          source: 'ProComponent',
        },
        {
          name: 'onFinish',
          desc: 'Same as above',
          remark: 'Same as above',
          source: 'ProComponent',
        },
        {
          name: 'validateFieldsReturnFormatValue',
          desc: 'Return form values after validation passes (with additional transformation as above',
          remark: 'Same as above',
          source: 'ProComponent',
        },
      ]}
      columns={[
        {
          title: 'Form Instance Method',
          dataIndex: 'name',
          render: (dom) => <code>{dom}</code>,
        },
        {
          title: 'Description',
          dataIndex: 'desc',
        },
        {
          title: 'Source',
          width: 120,
          dataIndex: 'source',
          render: (dom) => <span>{dom}</span>,
        },
      ]}
    />
  );
};

export default FormValueTable;
