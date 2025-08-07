import { message } from 'antd';
import { useRef } from 'react';
import {
  BusinessSelectBuilder,
  Button,
  ModalForm,
  clearSelectCache,
} from 'react-admin-kit';
import { queryUser } from '../apis';

const BusinessSelect = BusinessSelectBuilder<'user'>({
  apis: [
    {
      api: queryUser,
      type: 'user',
      pagination: false,
    },
  ],
  defaultProps: {
    placeholder: '请选择',
  },
});

const Demo = () => {
  const innerRef = useRef<any>();
  return (
    <div>
      <Button
        onClick={() => {
          clearSelectCache('user');
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
        destroyOnHidden
        innerRef={innerRef}
        columns={[
          {
            title: '人员所有 (注意下拉框上的 loading 图标)',
            renderFormItem: () => <BusinessSelect type="user" />,
          },
        ]}
      />
    </div>
  );
};

export default Demo;
