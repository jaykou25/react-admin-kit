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
            dataIndex: 'files',
            renderFormItem: () => <FormUpload />,
          },
        ]}
        submitter
        onFinish={console.log}
      />
    </SettingProvider>
  );
};

export default Basic;
