import { message } from 'antd';
import { useState } from 'react';
import { Button, FormUpload, ProTable, SettingProvider } from 'react-admin-kit';

const Import = () => {
  const [dataSource, setDataSource] = useState<any>([]);
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
        noPadding
        search={false}
        toolbar={{
          actions: [
            <FormUpload
              multiple={false}
              showUploadList={false}
              value={value}
              onFinish={(files) => {
                message.success('导入成功');
                console.log('files', files[0]);
                setDataSource([
                  {
                    name: '名称1',
                    specA: '规格A1',
                    specB: '规格B1',
                  },
                  {
                    name: '名称2',
                    specA: '规格A2',
                    specB: '规格B2',
                  },
                ]);
                setValue([]);
              }}
            >
              <Button type="primary">导入</Button>
            </FormUpload>,
          ],
        }}
        dataSource={dataSource}
        columns={[
          {
            title: '序号',
            valueType: 'index',
            width: 100,
          },
          {
            title: '名称',
            dataIndex: 'name',
            width: 200,
          },
          {
            title: '规格A',
            dataIndex: 'specA',
            width: 200,
          },
          {
            title: '规格B',
            dataIndex: 'specB',
            width: 200,
          },
        ]}
      />
    </SettingProvider>
  );
};

export default Import;
