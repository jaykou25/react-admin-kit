import { render } from 'vitest-browser-react';
import { describe, expect, test } from 'vitest';
import Demo from './index';
import { vi } from 'vitest';

describe('ProForm onFinish 验证', () => {
  test('正常填表单', async () => {
    const onFinishMock = vi.fn();
    const { getByLabelText, getByTestId, getByText } = await render(
      <Demo onFinish={onFinishMock} />,
    );

    await getByLabelText(/Name/).fill('Jack');

    await getByLabelText(/Hobby/).click();

    await getByTestId('testOption1').click();

    await getByText('提 交').click();

    await expect(onFinishMock).toHaveBeenCalledWith({
      name: 'Jack',
      hobbyId: '8',
      hobbyName: 'Music',
    });
  });

  test('onFinish 没传', async () => {
    const onFinishMock = vi.fn();
    const { getByText } = await render(<Demo />);

    await getByText('提 交').click();

    await expect(onFinishMock).not.toHaveBeenCalled();
  });
});
