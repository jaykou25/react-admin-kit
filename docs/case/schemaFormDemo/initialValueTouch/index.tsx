import { useRef } from 'react';

import { SchemaForm, ProFormInstance, Button } from 'react-admin-kit';

const setHtml = (query, vals) => {
  const ele = document.querySelector(query);
  if (ele) {
    ele.innerHTML = typeof vals === 'object' ? JSON.stringify(vals) : vals;
  }
};

export default function (props) {
  const formRef = useRef<ProFormInstance>();

  return (
    <div>
      <SchemaForm
        autoFocusFirstInput={false}
        formRef={formRef}
        initialValues={{ name: 'jack', userId: '1', userName: '张三' }}
        columns={[
          { title: '名字', dataIndex: 'name' },
          {
            title: '用户',
            dataIndex: 'userId,userName',
            valueType: 'select',
            fieldProps: {
              options: [{ label: '张三', value: '1' }],
              labelInValue: true,
            },
          },
        ]}
      />

      <Button
        onClick={() => {
          const isTouch = formRef.current?.isFieldsTouched();
          console.log('isTouch', isTouch);
          if (props.touchHandle) {
            props.touchHandle(isTouch);
          }
        }}
      >
        是否touch
      </Button>
    </div>
  );
}
