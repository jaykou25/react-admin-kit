import { useRef } from 'react';
import { SchemaForm, ProFormInstance, Button } from 'react-admin-kit';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

const Demo = (props) => {
  const formRef = useRef<ProFormInstance>(undefined);

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
};

test('测试 SchemaForm 有初始值时是否 touch 问题', async () => {
  const touchHandleFn = vi.fn();
  const { getByText } = await render(<Demo touchHandle={touchHandleFn} />);

  const btn = getByText('是否touch');
  await btn.click();

  expect(touchHandleFn).toHaveBeenCalledWith(false);
});
