import { useRef } from 'react';
import { Button, ModalForm } from 'react-admin-kit';
import type { ModalFormInnerRefType } from 'react-admin-kit';
import { describe, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

function Demo() {
  const innerRef = useRef<ModalFormInnerRefType>(undefined);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div style={{ padding: 24 }}>
      <Button
        data-testid="new"
        type="primary"
        onClick={() => innerRef.current?.openModal('new')}
        style={{ marginRight: 8 }}
      >
        新增弹窗
      </Button>
      <Button
        data-testid="edit"
        onClick={() => innerRef.current?.openModal('edit', { name: '编辑值' })}
      >
        编辑弹窗
      </Button>

      <div ref={container} />

      <ModalForm
        title="测试 column 初始值冲突"
        innerRef={innerRef}
        getContainer={() => container.current!}
        onFinish={(values) => console.log(values)}
        columns={[
          {
            title: '名称',
            dataIndex: 'name',
            initialValue: 'column初始值',
          },
          {
            title: '年龄',
            dataIndex: 'age',
            initialValue: 18,
          },
        ]}
      />
    </div>
  );
}

describe('ModalForm columns 和 openModal 都有初始值时', () => {
  test('1. 先点新增，名称应为 column 初始值；再点编辑，名称应为编辑值。控制台无告警', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const { getByTestId, getByLabelText, container } = await render(<Demo />);

    // 点击新增
    await getByTestId('new').click();
    expect(getByLabelText('名称')).toHaveValue('column初始值');

    // 关闭弹窗
    (
      container.querySelector('button.ant-modal-close') as HTMLElement | null
    )?.click();
    await new Promise((resolve) => setTimeout(resolve, 300));

    // 点击编辑
    await getByTestId('edit').click();
    expect(getByLabelText('名称')).toHaveValue('编辑值');

    // 检查控制台没有 antd 的 overwrite 告警
    const hasWarning = errorSpy.mock.calls.some(
      (call) =>
        typeof call[0] === 'string' &&
        call[0].includes('Field can not overwrite it'),
    );
    expect(hasWarning).toBe(false);

    errorSpy.mockRestore();
  });

  test('2. 直接点编辑，名称应为编辑值。控制台无告警', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const { getByTestId, getByLabelText } = await render(<Demo />);

    await getByTestId('edit').click();
    expect(getByLabelText('名称')).toHaveValue('编辑值');

    const hasWarning = errorSpy.mock.calls.some(
      (call) =>
        typeof call[0] === 'string' &&
        call[0].includes('Field can not overwrite it'),
    );
    expect(hasWarning).toBe(false);

    errorSpy.mockRestore();
  });
});
