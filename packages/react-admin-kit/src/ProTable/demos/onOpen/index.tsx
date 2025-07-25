import { Button, message } from 'antd';
import { useRef } from 'react';
import { ProTable } from 'react-admin-kit';
import { mockRequest, requestExtra } from './apis';

import { getColumns } from './columns';

const OnOpenDemo = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  const onFinish = (values: any) => {
    console.log({ values });
    // 模拟请求
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);

        message.success('操作成功');
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
        toolbar={{
          actions: [
            <Button
              key={1}
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
        onOpen={(formType, formRef, formData) => {
          if (formType === 'edit') {
            return requestExtra(formData.id).then((res) => {
              formRef?.current?.setFields([
                { name: 'extra', value: res, touched: false },
              ]);
            });
          }
        }}
      />
    </div>
  );
};

export default OnOpenDemo;
