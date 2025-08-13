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
        responseToFileList: (res) => ({ id: res?.data.id }), // Merge API response into file object
        children: ({ loading }) => (
          <LinkButton disabled={loading}>
            {loading ? 'uploading...' : 'upload'}
          </LinkButton>
        ),
      }}
    >
      <SchemaForm
        initialValues={{
          files: [
            {
              id: 1,
              name: 'pic1',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
              id: 2,
              name: 'pic2',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
          ],
        }}
        columns={[
          {
            title: 'attachment',
            dataIndex: 'files',
            renderFormItem: () => (
              <FormUpload
                listType="picture-card"
                beforeUpload={(file) => {
                  const isImage =
                    file.type === 'image/jpeg' || file.type === 'image/png';

                  if (!isImage) {
                    message.error('Please choose JPG/PNG files!');
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
