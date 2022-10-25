import { ProTable } from 'react-admin-kit';
import { useRef, useState } from 'react';
import { Button, Card, message } from 'antd';
import produce from 'immer';

import 'antd/dist/antd.min.css';
import { getColumns } from './columns';

export const FORM_TYPE_MAP = {
  new: '新增',
  edit: '编辑',
  read: '查看',
};

const Controlled = () => {
  const innerRef = useRef<any>();
  const actionRef = useRef<any>();

  const [dataSource, setDataSource] = useState([
    { id: 1, name: '王先生', phone: '1596668888', sex: '男' },
  ]);

  const onFinish = (values: any, type, formData) => {
    console.log({ values });
    if (type === 'new') {
      setDataSource(dataSource.concat({ ...values, id: Date.now() }));
    } else {
      const newData = produce(dataSource, (draft) => {
        const index = draft.findIndex((item) => item.id == formData.id);
        draft[index] = { ...formData, ...values };
      });
      setDataSource(newData);
    }
  };

  return (
    <div>
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <Button
          type="primary"
          onClick={() => {
            innerRef.current.openModal();
          }}
        >
          新增用户
        </Button>
      </div>
      <ProTable
        name="用户"
        headerTitle={false}
        columns={getColumns()}
        innerRef={innerRef}
        actionRef={actionRef}
        onFinish={onFinish}
        dataSource={dataSource}
        bordered
        search={false}
        pagination={false}
        noPadding
      />
    </div>
  );
};

export default Controlled;
