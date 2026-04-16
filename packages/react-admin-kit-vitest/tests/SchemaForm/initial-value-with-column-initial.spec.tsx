import { useRef } from 'react';
import { SchemaForm, ProFormInstance } from 'react-admin-kit';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

// 这是 antd Form 的告警。属于正常现象。

test('columns 和 SchemaForm 都有初始值时, 应有警告且以 SchemaForm 为准', async () => {
  const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

  const Demo = () => {
    const formRef = useRef<ProFormInstance>(undefined);
    return (
      <SchemaForm
        autoFocusFirstInput={false}
        formRef={formRef}
        initialValues={{ name: 'jack' }}
        columns={[{ title: '名字', dataIndex: 'name', initialValue: 'tom' }]}
      />
    );
  };

  const { getByLabelText } = await render(<Demo />);

  expect(errorSpy).toHaveBeenCalled();
  const hasWarning = errorSpy.mock.calls.some(
    (call) =>
      typeof call[0] === 'string' &&
      call[0].includes('Field can not overwrite it'),
  );
  expect(hasWarning).toBe(true);

  expect(getByLabelText('名字')).toHaveValue('jack');

  errorSpy.mockRestore();
});

test('只有 columns 有初始值时, 不应有警告', async () => {
  const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

  const Demo = () => {
    const formRef = useRef<ProFormInstance>(undefined);
    return (
      <SchemaForm
        autoFocusFirstInput={false}
        formRef={formRef}
        columns={[{ title: '名字', dataIndex: 'name', initialValue: 'tom' }]}
      />
    );
  };

  const { getByLabelText } = await render(<Demo />);

  const hasWarning = errorSpy.mock.calls.some(
    (call) =>
      typeof call[0] === 'string' &&
      call[0].includes('Field can not overwrite it'),
  );
  expect(hasWarning).toBe(false);

  expect(getByLabelText('名字')).toHaveValue('tom');

  errorSpy.mockRestore();
});
