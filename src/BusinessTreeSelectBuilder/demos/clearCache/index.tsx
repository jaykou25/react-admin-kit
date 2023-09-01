import { message } from 'antd';
import { useRef } from 'react';
import { Button, ModalForm, clearTreeSelectCache } from 'react-admin-kit';
import { BusinessTreeSelect } from '../basic';

const ClearCacheDemo = () => {
  const innerRef = useRef<any>();

  return (
    <div>
      <Button
        onClick={() => {
          clearTreeSelectCache('company');
          message.info('缓存清除成功');
        }}
      >
        清除缓存
      </Button>

      <Button
        type="primary"
        style={{ marginLeft: '10px' }}
        onClick={() => innerRef.current?.openModal('new')}
      >
        打开弹窗
      </Button>

      <ModalForm
        innerRef={innerRef}
        onFinish={(values) => console.log({ values })}
        columns={[
          {
            title: '公司 (注意下拉框上的 loading 图标)',
            dataIndex: 'company',
            renderFormItem: () => <BusinessTreeSelect type="company" />,
          },
        ]}
      />
    </div>
  );
};

export default ClearCacheDemo;
