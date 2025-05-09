import { message } from 'antd';
import { useRef } from 'react';
import { FormUpload, LinkButton, SchemaForm } from 'react-admin-kit';

const Show = () => {
  const formRef = useRef<any>();

  return (
    <SchemaForm
      formRef={formRef}
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
              action="https://mock.apifox.cn/m1/1864670-0-default/mockUpload"
              listType="picture-card"
              beforeUpload={(file) => {
                const isImage =
                  file.type === 'image/jpeg' || file.type === 'image/png';
                console.log('isImage', isImage);
                if (!isImage) {
                  message.error('请上传 JPG/PNG 文件!');
                  return false;
                }
              }}
            >
              <LinkButton>上传附件</LinkButton>
            </FormUpload>
          ),
        },
      ]}
      submitter
      onFinish={console.log}
    />
  );
};

export default Show;
