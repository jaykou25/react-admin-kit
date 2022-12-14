import { useEffect, useRef } from 'react';
import { SchemaForm, FormUpload, LinkButton, Button } from 'react-admin-kit';

const DataSubmit = () => {
  const formRef = useRef<any>();

  const onFinish = (values) => {
    console.log({ values });
  };

  useEffect(() => {
    // 模拟后端返回
    formRef.current?.setFieldsValue({
      fileList: [
        {
          id: 1,
          fileName: '照片1',
          filePath: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          id: 2,
          fileName: '照片2',
          filePath: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    });
  }, []);

  return (
    <div>
      <SchemaForm
        formRef={formRef}
        columns={[
          {
            title: '附件',
            dataIndex: 'fileList',
            convertValue: (vals) => {
              if (vals) {
                return vals.map((val) => ({ ...val, name: val.fileName, url: val.filePath }));
              }

              return vals;
            },
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
    </div>
  );
};

export default DataSubmit;
