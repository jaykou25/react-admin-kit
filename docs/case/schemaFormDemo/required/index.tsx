import { SchemaForm } from 'react-admin-kit';

const Required = () => {
  const onFinish = (vals) => {
    console.log(vals);
  };
  return (
    <SchemaForm
      onFinish={onFinish}
      submitter
      columns={[
        {
          title: '金额',
          valueType: 'money',
          dataIndex: 'money',
        },
        {
          title: '是否上会',
          tooltip: '超过一百元要校验是否上会',
          valueType: 'radio',
          fieldProps: {
            options: [
              { label: '是', value: 1 },
              { label: '否', value: 0 },
            ],
          },
          required: true,
          formItemProps: (form) => ({
            rules: [
              {
                validator() {
                  const money = form.getFieldValue('money');
                  console.log('money', money);

                  if (money >= 100) {
                    return Promise.reject(new Error('金额超过 100 元要上会'));
                  } else {
                    return Promise.resolve();
                  }
                },
              },
            ],
          }),
        },
      ]}
    />
  );
};

export default Required;
