import { ProTable } from 'react-admin-kit';
import { useRef } from 'react';
import { message } from 'antd';
import { mockRequest } from './apis';

import 'antd/dist/antd.min.css';
import { getColumns } from './columns';

export const FORM_TYPE_MAP = {
  new: '新增',
  edit: '编辑',
  read: '查看',
};

const ConventionDemo = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  const onFinish = (values: any, type, formData) => {
    console.log({ values, type, formData });
    // 模拟请求
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);

        message.success(FORM_TYPE_MAP[type] + '成功');
        actionRef.current?.reload();
      }, 1000);
    });
  };

  return (
    <div>
      <ProTable
        name="用户"
        columns={getColumns()}
        innerRef={innerRef}
        actionRef={actionRef}
        request={mockRequest}
        onFinish={onFinish}
        bordered
        search={false}
        pagination={false}
        formProps={{
          layout: 'horizontal',
          labelCol: { span: 4 },
        }}
      />
    </div>
  );
};

export default ConventionDemo;
