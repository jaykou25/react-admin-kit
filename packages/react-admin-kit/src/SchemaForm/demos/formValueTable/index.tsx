import { ProTable } from 'react-admin-kit';

import './index.less';

const FormValueTable = () => {
  return (
    <ProTable
      style={{ marginTop: '10px' }}
      size="small"
      search={false}
      pagination={false}
      noPadding
      bordered
      rowKey="name"
      dataSource={[
        {
          name: 'getFieldsValue',
          desc: '获取表单值',
          remark: '',
          source: 'Antd Form',
        },
        {
          name: 'validateFields',
          desc: '表单验证通过后返回表单值',
          remark: '',
          source: 'Antd Form',
        },
        {
          name: 'getFieldsFormatValue',
          desc: '获取表单值（会额外根据 valueType 处理时间格式; 会额外处理 schema 中的 transform 转化）',
          remark:
            '会根据 valueType 处理时间格式; 会处理 schema 中的 transform 转化',
          source: 'ProComponent',
        },
        {
          name: 'onFinish',
          desc: '同上',
          remark: '同上',
          source: 'ProComponent',
        },
        {
          name: 'validateFieldsReturnFormatValue',
          desc: '表单验证通过后返回表单值（同上额外处理转换）',
          remark: '同上',
          source: 'ProComponent',
        },
      ]}
      columns={[
        {
          title: '表单实例方法',
          dataIndex: 'name',
          render: (dom) => <span className="code">{dom}</span>,
        },
        {
          title: '描述',
          dataIndex: 'desc',
        },
        {
          title: '来源',
          width: 120,
          dataIndex: 'source',
          render: (dom) => <span>{dom}</span>,
        },
      ]}
    />
  );
};

export default FormValueTable;
