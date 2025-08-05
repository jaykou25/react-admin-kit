import { Button } from 'antd';
import produce from 'immer';
import { useRef, useState } from 'react';
import { ProTable } from 'react-admin-kit';

import { getColumns } from './columns';

const Controlled = () => {
  const innerRef = useRef<any>();

  const [dataSource, setDataSource] = useState([
    { id: 1, name: '王先生', phone: '1596668888', sex: '男' },
  ]);

  const onFinish = (values: any, type: any, formData: any) => {
    if (type === 'new') {
      setDataSource(dataSource.concat({ ...values, id: Date.now() }));
    }

    if (type === 'edit') {
      const newData = produce(dataSource, (draft) => {
        const index = draft.findIndex((item) => item.id === formData.id);
        draft[index] = { ...formData, ...values };
      });

      setDataSource(newData);
    }
  };

  const handleDel = (id: string | number) => {
    setDataSource(dataSource.filter((item) => item.id !== id));
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
        name="受控"
        columns={getColumns(handleDel)}
        dataSource={dataSource}
        innerRef={innerRef}
        onFinish={onFinish}
        bordered
        search={false}
        pagination={false}
        cardProps={false}
        delFunction={(ids) => handleDel(ids[0])}
        delSuccessProps={false}
      />
    </div>
  );
};

export default Controlled;
