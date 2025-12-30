import { message } from 'antd';
import {
  FormUpload,
  LinkButton,
  SchemaForm,
  SettingProvider,
} from 'react-admin-kit';

const Show = () => {
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
        initialValues={{
          files: [
            {
              id: 1,
              name: '照片1',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
              id: 2,
              name: '照片2',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
          ],
        }}
        columns={[
          {
            title: '附件',
            dataIndex: 'files',
            renderFormItem: () => (
              <FormUpload
                listType="picture-card"
                beforeUpload={(file) => {
                  const isImage =
                    file.type === 'image/jpeg' || file.type === 'image/png';

                  if (!isImage) {
                    message.error('请上传 JPG/PNG 文件!');
                    return false;
                  }
                }}
              />
            ),
          },
        ]}
        submitter
        onFinish={console.log}
      />
    </SettingProvider>
  );
};

export default Show;
