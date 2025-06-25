import { Table } from 'antd';
import './index.less';

const FormValueTableResult = () => {
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
          result: {
            tags: ['tag01', 'tag02'],
            validDate: ['dayjs object', 'dayjs object'],
          },
        },
        {
          name: 'validateFields',
          result: 'Same as above',
        },
        {
          name: 'getFieldsFormatValue',
          result: {
            tagIds: 'tag01,tag02',
            validDate: ['2024-10-01', '2024-10-07'],
          },
        },
        {
          name: 'onFinish',
          result: 'Same as above',
        },
        {
          name: 'validateFieldsReturnFormatValue',
          result: 'Same as above',
        },
      ]}
      columns={[
        {
          title: 'Form Instance Method',
          dataIndex: 'name',
          render: (dom) => <span className="code">{dom}</span>,
        },
        {
          title: 'Result',
          dataIndex: 'result',
          render: (text, record) => (
            <code>{JSON.stringify(record.result, null, 2)}</code>
          ),
        },
      ]}
    />
  );
};

export default FormValueTableResult;
