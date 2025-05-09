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
    // mock request
    formRef.current?.setFieldsValue({
      fileList: [
        {
          id: 1,
          fileName: 'pic1',
          filePath:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          id: 2,
          fileName: 'pic2',
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
      }}
    >
      <SchemaForm
        formRef={formRef}
        columns={[
          {
            title: 'attachments',
            dataIndex: 'fileList',
            transform: (files) => ({
              fileIds: files.map((file) => file.id).join(','),
            }),
            renderFormItem: () => (
              <FormUpload>
                <LinkButton>upload</LinkButton>
              </FormUpload>
            ),
          },
        ]}
        submitter
        onFinish={console.log}
      />
    </SettingProvider>
  );
};

export default ChangeKey;
