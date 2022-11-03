import { message } from 'antd';
import { useRef } from 'react';
import { SchemaForm, FormUpload, LinkButton, Button } from 'react-admin-kit';

import 'antd/dist/antd.min.css';

const ErrorHandle = () => {
  const formRef = useRef<any>();

  const onFinish = (values) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        formRef={formRef}
        columns={[
          {
            title: '附件',
            dataIndex: 'files',
            transfer: () => ({}),
            renderFormItem: () => (
              <FormUpload
                action="https://mock.apifox.cn/m1/1864670-0-default/mockUploadFailed"
                // 仅用于示范, 一般在全局设置.
                errorHandle={(res) => message.error('上传失败 ' + res.message)}
              >
                <LinkButton>上传附件</LinkButton>
              </FormUpload>
            ),
          },
        ]}
        onFinish={onFinish}
      />
      <div style={{ textAlign: 'end' }}>
        <Button style={{ marginRight: '10px' }} onClick={() => formRef.current?.resetFields()}>
          重置
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          提交
        </Button>
      </div>
    </div>
  );
};

export default ErrorHandle;
