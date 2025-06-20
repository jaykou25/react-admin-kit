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
            validDate: ['dayjs对象', 'dayjs对象'],
          },
        },
        {
          name: 'validateFields',
          result: '同上',
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
          result: '同上',
        },
        {
          name: 'validateFieldsReturnFormatValue',
          result: '同上',
        },
      ]}
      columns={[
        {
          title: '表单实例方法',
          dataIndex: 'name',
          render: (dom) => <span className="code">{dom}</span>,
        },
        {
          title: '结果',
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
