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
    placeholder: 'please choose',
  },
});

const Demo = () => {
  const innerRef = useRef<any>();
  return (
    <div>
      <Button
        onClick={() => {
          clearSelectCache('user');
          message.info('clear user cache success');
        }}
      >
        clear cache
      </Button>

      <Button
        type="primary"
        style={{ marginLeft: '10px' }}
        onClick={() => innerRef.current?.openModal('new')}
      >
        open
      </Button>

      <ModalForm
        destroyOnHidden
        innerRef={innerRef}
        columns={[
          {
            title:
              'User (Notice the loading indicator on the right corner of input)',
            renderFormItem: () => <BusinessSelect type="user" />,
          },
        ]}
      />
    </div>
  );
};

export default Demo;
