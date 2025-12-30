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
        children: ({ loading }) => (
          <LinkButton disabled={loading}>
            {loading ? 'uploading...' : 'upload'}
          </LinkButton>
        ),
      }}
    >
      <SchemaForm
        columns={[
          {
            title: 'attachment',
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
