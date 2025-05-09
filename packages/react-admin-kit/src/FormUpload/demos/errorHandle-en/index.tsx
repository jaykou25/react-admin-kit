import { message } from 'antd';
import {
  FormUpload,
  LinkButton,
  SchemaForm,
  SettingProvider,
} from 'react-admin-kit';

const ErrorHandle = () => {
  return (
    <SettingProvider
      formUploadSetting={{
        action: 'https://mock.apifox.cn/m1/1864670-0-default/mockUploadFailed',
        headers: { Authorization: 'myToken' },
        responseToFileList: (res) => ({ id: res?.data?.id }),
        errorHandle: (res) => {
          message.error('upload failed ' + res?.message || '');
        },
      }}
    >
      <SchemaForm
        columns={[
          {
            title: 'attachment',
            dataIndex: 'files',
            formItemProps: {
              rules: [{ required: true, message: 'attachment required' }],
            },
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

export default ErrorHandle;
