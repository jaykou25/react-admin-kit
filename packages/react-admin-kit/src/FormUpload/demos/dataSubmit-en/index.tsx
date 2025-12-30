import { useEffect, useRef } from 'react';
import {
  FormUpload,
  LinkButton,
  SchemaForm,
  SettingProvider,
} from 'react-admin-kit';

const DataSubmit = () => {
  const formRef = useRef<any>();

  useEffect(() => {
    // mock backend response
    setTimeout(() => {
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
    }, 200);
  }, []);

  return (
    <SettingProvider
      formUploadSetting={{
        action: 'https://mock.apifox.cn/m1/1864670-0-default/mockUpload',
        headers: { Authorization: 'myToken' },
        responseToFileList: (res) => ({ id: res?.data.id }), // Merge API response into file object
        children: ({ loading }) => (
          <LinkButton disabled={loading}>
            {loading ? 'uploading...' : 'upload'}
          </LinkButton>
        ),
      }}
    >
      <SchemaForm
        formRef={formRef}
        columns={[
          {
            title: 'attachment',
            dataIndex: 'fileList',
            convertValue: (vals) => {
              // processes initial values
              if (vals) {
                return vals.map((val) => ({
                  ...val,
                  name: val.fileName,
                  url: val.filePath,
                }));
              }

              return vals;
            },
            transform: (files) => ({
              fileIds: files.map((file) => file.id).join(','),
            }),
            renderFormItem: () => <FormUpload listType="picture-card" />,
          },
        ]}
        submitter
        onFinish={console.log}
      />
    </SettingProvider>
  );
};

export default DataSubmit;
