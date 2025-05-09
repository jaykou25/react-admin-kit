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
        responseToFileList: (res) => ({ id: res?.data.id }),
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
                message.success('import success');
                console.log('files', files[0]);
                setDataSource([
                  {
                    name: 'name1',
                    specA: 'specA1',
                    specB: 'specB1',
                  },
                  {
                    name: 'name2',
                    specA: 'specA2',
                    specB: 'specB2',
                  },
                ]);
                setValue([]);
              }}
            >
              <Button type="primary">import</Button>
            </FormUpload>,
          ],
        }}
        dataSource={dataSource}
        columns={[
          {
            title: 'index',
            valueType: 'index',
            width: 100,
          },
          {
            title: 'name',
            dataIndex: 'name',
            width: 200,
          },
          {
            title: 'spceA',
            dataIndex: 'specA',
            width: 200,
          },
          {
            title: 'specB',
            dataIndex: 'specB',
            width: 200,
          },
        ]}
      />
    </SettingProvider>
  );
};

export default Import;
