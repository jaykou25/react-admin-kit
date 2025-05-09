import { useEffect, useRef } from 'react';
import { FormUpload, LinkButton, SchemaForm } from 'react-admin-kit';

const DataSubmit = () => {
  const formRef = useRef<any>();

  const onFinish = (values) => {
    console.log({ values });
  };

  useEffect(() => {
    // mock backend response
    setTimeout(() => {
      formRef.current?.setFieldsValue({
        fileList: [
          {
            id: 1,
            fileName: 'pic1',
            filePath:
              'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
          {
            id: 2,
            fileName: 'pic2',
            filePath:
              'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ],
      });
    }, 200);
  }, []);

  return (
    <SchemaForm
      formRef={formRef}
      columns={[
        {
          title: 'attachment',
          dataIndex: 'fileList',
          convertValue: (vals) => {
            // processes initial values
            if (vals) {
              return vals.map((val) => ({
                ...val,
                name: val.fileName,
                url: val.filePath,
              }));
            }

            return vals;
          },
          transform: (files) => ({
            fileIds: files.map((file) => file.id).join(','),
          }),
          renderFormItem: () => (
            <FormUpload
              action="https://mock.apifox.cn/m1/1864670-0-default/mockUpload"
              responseToFileList={(res) => res.data}
              listType="picture-card"
            >
              <LinkButton>upload</LinkButton>
            </FormUpload>
          ),
        },
      ]}
      submitter
      onFinish={onFinish}
    />
  );
};

export default DataSubmit;
