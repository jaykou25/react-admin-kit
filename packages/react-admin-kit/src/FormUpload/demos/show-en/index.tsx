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
              action="https://mock.apifox.cn/m1/1864670-0-default/mockUpload"
              listType="picture-card"
              beforeUpload={(file) => {
                const isImage =
                  file.type === 'image/jpeg' || file.type === 'image/png';
                console.log('isImage', isImage);
                if (!isImage) {
                  message.error('Please choose JPG/PNG files!');
                  return false;
                }
              }}
            >
              <LinkButton>upload</LinkButton>
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
