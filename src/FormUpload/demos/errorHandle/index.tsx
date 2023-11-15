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
        responseToFileList: (res) => ({ id: res?.data?.id }), // 将后台返回值合并进file对象
        errorHandle: (res) => {
          message.error('上传失败 ' + res?.message || '');
        },
      }}
    >
      <SchemaForm
        columns={[
          {
            title: '附件',
            dataIndex: 'files',
            formItemProps: {
              rules: [{ required: true, message: '请上传附件' }],
            },
            renderFormItem: () => (
              <FormUpload>
                <LinkButton>上传附件</LinkButton>
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
