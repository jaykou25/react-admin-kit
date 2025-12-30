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
    // 模拟后端返回
    setTimeout(() => {
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
    }, 200);
  }, []);

  return (
    <SettingProvider
      formUploadSetting={{
        action: 'https://mock.apifox.cn/m1/1864670-0-default/mockUpload',
        headers: { Authorization: 'myToken' },
        responseToFileList: (res) => ({ id: res?.data.id }), // 将后台返回值合并进file对象
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
            convertValue: (vals) => {
              // 数据转化
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
              // 提交给后端的转化
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
