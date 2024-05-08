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
          desc: '获取一组或所有的表单值.',
          remark: '',
          source: 'antd form',
        },
        {
          name: 'validateFields',
          desc: '表单验证通过后得到所有的表单值',
          remark: '',
          source: 'antd form',
        },
        {
          name: 'getFieldsFormatValue',
          desc: '获取一组或所有转化后的值',
          remark: '会根据 valueType 处理时间格式, 会处理 transform',
          source: 'proComponent',
        },
        {
          name: 'onFinish',
          desc: '同上',
          remark: '同上',
          source: 'proComponent',
        },
        {
          name: 'validateFieldsReturnFormatValue',
          desc: '表单验证通过后得到所有的转化后的值',
          remark: '同上',
          source: 'proComponent',
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
          title: '备注',
          dataIndex: 'remark',
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
