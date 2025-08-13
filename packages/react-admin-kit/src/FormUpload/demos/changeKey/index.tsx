import { useEffect, useRef } from 'react';
import {
  FormUpload,
  LinkButton,
  SchemaForm,
  SettingProvider,
} from 'react-admin-kit';

const ChangeKey = () => {
  const formRef = useRef<any>();

  useEffect(() => {
    // 模拟请求
    formRef.current?.setFieldsValue({
      fileList: [
        {
          id: 1,
          fileName: '照片1',
          filePath:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          id: 2,
          fileName: '照片2',
          filePath:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    });
  }, []);

  return (
    <SettingProvider
      formUploadSetting={{
        action: 'https://mock.apifox.cn/m1/1864670-0-default/mockUpload',
        responseToFileList: (res) => res.data,
        nameKey: 'fileName',
        urlKey: 'filePath',
        children: ({ loading }) => (
          <LinkButton disabled={loading}>
            {loading ? '上传中...' : '上传附件'}
          </LinkButton>
        ),
      }}
    >
      <SchemaForm
        formRef={formRef}
        columns={[
          {
            title: '附件',
            dataIndex: 'fileList',
            transform: (files) => ({
              fileIds: files.map((file) => file.id).join(','),
            }),
            renderFormItem: () => <FormUpload />,
          },
        ]}
        submitter
        onFinish={console.log}
      />
    </SettingProvider>
  );
};

export default ChangeKey;
