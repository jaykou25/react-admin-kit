import { render } from 'vitest-browser-react';
import { describe, expect, test } from 'vitest';
import Demo from './index';

describe('submitter 覆盖', () => {
  test('submitter 可以为 true', async () => {
    const { getByText } = await render(<Demo />);

    await expect(getByText('提 交')).toBeInTheDocument();
  });
});
