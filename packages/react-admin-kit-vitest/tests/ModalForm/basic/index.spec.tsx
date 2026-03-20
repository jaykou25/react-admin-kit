import { render } from 'vitest-browser-react';
import { describe, expect, test, vi } from 'vitest';
import Basic from './index';

describe('ModalForm Basic 集成测试', () => {
  test('0. 初始状态', async () => {
    const { getByTestId, getByText, getByLabelText } = await render(<Basic />);

    expect(getByText('基本表单')).not.toBeInTheDocument();
  });
});
