import { ModalForm, Button, clearTreeSelectCache } from 'react-admin-kit';
import { BusinessTreeSelect } from '../basic';
import { useRef } from 'react';

const ClearCacheDemo = () => {
  const innerRef = useRef();

  return (
    <div>
      <Button type="primary" onClick={() => innerRef.current?.openModal('new')}>
        打开弹窗
      </Button>

      <Button style={{ marginLeft: '10px' }} onClick={() => clearTreeSelectCache('company')}>
        清除缓存
      </Button>
      <ModalForm
        innerRef={innerRef}
        onFinish={(values) => console.log({ values })}
        columns={[
          {
            title: '公司',
            dataIndex: 'company',
            renderFormItem: () => <BusinessTreeSelect type="company" />,
          },
        ]}
      />
    </div>
  );
};

export default ClearCacheDemo;
