import {
  FormUpload,
  LinkButton,
  SchemaForm,
  SettingProvider,
} from 'react-admin-kit';

const Basic = () => {
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
        columns={[
          {
            title: '附件',
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
