import { useEffect, useRef } from 'react';
import { SchemaForm, FormUpload, LinkButton, Button, SettingProvider } from 'react-admin-kit';

const ChangeKey = () => {
  const formRef = useRef<any>();

  const onFinish = (values) => {
    console.log({ values });
  };

  useEffect(() => {
    // 模拟请求
    formRef.current?.setFieldsValue({
      fileList: [
        {
          id: 1,
          fileName: '照片1',
          path: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          id: 2,
          fileName: '照片2',
          path: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    });
  }, []);

  return (
    <SettingProvider
      formUploadSetting={{
        nameKey: 'fileName',
        urlKey: 'path',
      }}
    >
      <SchemaForm
        formRef={formRef}
        columns={[
          {
            title: '附件',
            dataIndex: 'fileList',
            transform: (files) => ({ fileIds: files.map((file) => file.id).join(',') }),
            renderFormItem: () => (
              <FormUpload
                action="https://mock.apifox.cn/m1/1864670-0-default/mockUpload"
                // 仅用于示范, 一般在全局设置. 可将服务端返回值合并进文件列表
                responseToFileList={(res) => res.data}
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
    </SettingProvider>
  );
};

export default ChangeKey;
