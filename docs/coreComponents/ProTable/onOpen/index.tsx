import { ProTable } from 'react-admin-kit';
import { useRef } from 'react';
import { Button, message } from 'antd';
import { mockRequest, requestExtra } from './apis';

import 'antd/dist/antd.min.css';
import { getColumns } from './columns';

export const FORM_TYPE_MAP = {
  new: '新增',
  edit: '编辑',
  read: '查看',
};

const OnOpenDemo = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  const onFinish = (values: any, type) => {
    console.log({ values });
    // 模拟请求
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);

        message.success(FORM_TYPE_MAP[type] + '成功');
        actionRef.current?.reload();
      }, 1000);
    });
  };

  const onOpen = (formType, formRef) => {
    console.log({ formType });
    if (formType === 'edit') {
      return requestExtra().then((res) => {
        formRef.current?.setFieldsValue({ extra: res });
      });
    }
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
        toolbar={{
          actions: [
            <Button
              type="primary"
              onClick={() => {
                innerRef.current?.openModal();
              }}
            >
              新增
            </Button>,
          ],
        }}
        search={false}
        onOpen={onOpen}
      />
    </div>
  );
};

export default OnOpenDemo;
