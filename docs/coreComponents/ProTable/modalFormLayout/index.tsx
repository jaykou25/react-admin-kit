import { ProTable } from 'react-admin-kit';
import { useRef } from 'react';
import { Button, message } from 'antd';
import { delelteRecord, mockRequest } from './apis';

import 'antd/dist/antd.min.css';
import { getColumns } from './columns';

export const FORM_TYPE_MAP = {
  new: '新增',
  edit: '编辑',
  read: '查看',
};

const Basic = () => {
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

  return (
    <div>
      <ProTable
        name="用户"
        search={false}
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
        rowSelection={{}}
        delFunction={delelteRecord}
        formProps={{
          grid: true,
          rowProps: { gutter: [24, 0] },
          colProps: { span: 12 },
        }}
      />
    </div>
  );
};

export default Basic;
