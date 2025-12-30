import { message } from 'antd';
import { useRef } from 'react';
import {
  Button,
  ModalForm,
  BusinessTreeSelectBuilder,
  clearTreeSelectCache,
} from 'react-admin-kit';
import { queryCompany } from '../apis/index-en';

const BusinessTreeSelect = BusinessTreeSelectBuilder<'company'>({
  apis: [
    {
      api: queryCompany,
      type: 'company',
    },
  ],
  defaultProps: {
    placeholder: 'please choose',
  },
});

const ClearCacheDemo = () => {
  const innerRef = useRef<any>();

  return (
    <div>
      <Button
        onClick={() => {
          clearTreeSelectCache('company');
          message.info('clear cache success');
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
        onFinish={(values) => console.log({ values })}
        columns={[
          {
            title:
              'Company (Notice the loading indicator on the right corner of input)',
            dataIndex: 'company',
            renderFormItem: () => <BusinessTreeSelect type="company" />,
          },
        ]}
      />
    </div>
  );
};

export default ClearCacheDemo;
