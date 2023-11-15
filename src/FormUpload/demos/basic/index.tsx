import { useRef } from 'react';
import {
  FormUpload,
  LinkButton,
  SchemaForm,
  SettingProvider,
} from 'react-admin-kit';

const Basic = () => {
  const formRef = useRef<any>(null);
  return (
    <SettingProvider
      formUploadSetting={{
        action: 'https://mock.apifox.cn/m1/1864670-0-default/mockUpload',
        headers: { Authorization: 'myToken' },
        responseToFileList: (res) => ({ id: res?.data.id }), // 将后台返回值合并进file对象
      }}
    >
      <SchemaForm
        formRef={formRef}
        columns={[
          {
            title: '附件',
            dataIndex: 'files',
            renderFormItem: () => (
              <FormUpload>
                {({ loading }) => (
                  <LinkButton>{loading ? '上传中' : '上传附件'}</LinkButton>
                )}
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

export default Basic;
