import { useRef } from 'react';
import { SchemaForm, FormUpload, LinkButton, Button } from 'react-admin-kit';

const Basic = () => {
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
            renderFormItem: () => (
              <FormUpload
                action="https://mock.apifox.cn/m1/1864670-0-default/mockUpload"
                // 仅用于示范, 一般在全局设置. 可将服务端返回值合并进文件列表
                responseToFileList={(res) => ({ id: res.data?.id })}
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

export default Basic;
