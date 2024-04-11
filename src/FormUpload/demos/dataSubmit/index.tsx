import { useEffect, useRef } from 'react';
import { FormUpload, LinkButton, SchemaForm } from 'react-admin-kit';

const DataSubmit = () => {
  const formRef = useRef<any>();

  const onFinish = (values) => {
    console.log({ values });
  };

  useEffect(() => {
    // 模拟后端返回
    setTimeout(() => {
      formRef.current?.setFieldsValue({
        fileList: [
          {
            id: 1,
            fileName: '照片1',
            filePath:
              'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
          {
            id: 2,
            fileName: '照片2',
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
          title: '附件',
          dataIndex: 'fileList',
          convertValue: (vals) => {
            // 数据转化
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
            // 提交给后端的转化
            fileIds: files.map((file) => file.id).join(','),
          }),
          renderFormItem: () => (
            <FormUpload
              action="https://mock.apifox.cn/m1/1864670-0-default/mockUpload"
              // 仅用于示范, 一般在全局设置. 可将服务端返回值合并进文件列表
              responseToFileList={(res) => res.data}
              listType="picture-card"
            >
              <LinkButton>上传附件</LinkButton>
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
