import { ModalForm, Button, clearSelectCache } from 'react-admin-kit';
import { BusinessSelect } from '../basic';
import { useRef } from 'react';

const QueryParams = () => {
  const innerRef = useRef();
  return (
    <div>
      <Button type="primary" onClick={() => innerRef.current?.openModal('new')}>
        打开弹窗
      </Button>

      <Button style={{ marginLeft: '10px' }} onClick={() => clearSelectCache('user')}>
        清除缓存
      </Button>

      <ModalForm
        innerRef={innerRef}
        columns={[
          {
            title: '人员所有',
            renderFormItem: () => <BusinessSelect type="user" />,
          },
        ]}
      />
    </div>
  );
};

export default QueryParams;
