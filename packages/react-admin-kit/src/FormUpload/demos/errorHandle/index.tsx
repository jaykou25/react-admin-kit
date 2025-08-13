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
          message.error('上传失败 ' + res?.message || '');
        },
        children: ({ loading }) => (
          <LinkButton disabled={loading}>
            {loading ? '上传中...' : '上传附件'}
          </LinkButton>
        ),
      }}
    >
      <SchemaForm
        columns={[
          {
            title: '附件',
            dataIndex: 'files',
            required: true,
            renderFormItem: () => <FormUpload />,
          },
        ]}
        submitter
        onFinish={console.log}
      />
    </SettingProvider>
  );
};

export default ErrorHandle;
