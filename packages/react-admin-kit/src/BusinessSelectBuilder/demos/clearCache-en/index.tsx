import { message } from 'antd';
import { useRef } from 'react';
import { Button, ModalForm, clearSelectCache } from 'react-admin-kit';
import BusinessSelect from '../BusinessSelect';

const QueryParams = () => {
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

export default QueryParams;
