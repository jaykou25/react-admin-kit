import { message } from 'antd';
import { useRef, useState } from 'react';
import { Button, FormUpload, ProTable, SettingProvider } from 'react-admin-kit';

const Import = () => {
  const actionRef = useRef<any>(null);
  const [value, setValue] = useState<any>([]);
  return (
    <SettingProvider
      formUploadSetting={{
        action: 'https://mock.apifox.cn/m1/1864670-0-default/mockUpload',
        headers: { Authorization: 'myToken' },
        responseToFileList: (res) => ({ id: res?.data.id }), // 将后台返回值合并进file对象
      }}
    >
      <ProTable
        actionRef={actionRef}
        toolbar={{
          actions: [
            <FormUpload
              multiple={false}
              showUploadList={false}
              value={value}
              onFinish={() => {
                message.success('导入成功!');
                actionRef.current.reload();
                setValue([]);
              }}
            >
              <Button type="primary">导入</Button>
            </FormUpload>,
          ],
        }}
        columns={[
          {
            title: '序号',
            valueType: 'index',
          },
          {
            title: '名称',
            dataIndex: 'name',
          },
          {
            title: '规格A',
            dataIndex: 'specA',
          },
          {
            title: '规格B',
            dataIndex: 'specB',
          },
        ]}
      />
    </SettingProvider>
  );
};

export default Import;
