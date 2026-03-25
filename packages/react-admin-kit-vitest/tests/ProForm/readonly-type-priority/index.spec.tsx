import { render } from 'vitest-browser-react';
import { describe, expect, test } from 'vitest';
import Demo from './index';

describe('ProForm with embedded SchemaForm - readonlyType priority', () => {
  test('SchemaForm readonlyType should override ProForm readonlyType when both are set', async () => {
    const { container } = await render(
      <Demo proFormReadonlyType="descriptions" schemaFormReadonlyType="form" />,
    );

    await expect(
      container.querySelector('.ant-descriptions-view'),
    ).not.toBeInTheDocument();

    await new Promise((resolve) => setTimeout(resolve, 300));

    const formItemWrapper = container.querySelector('.form-item-wrapper');
    expect(formItemWrapper).toBeTruthy();
  });

  test('SchemaForm readonlyType should work when ProForm readonlyType is set', async () => {
    const { container } = await render(
      <Demo
        proFormReadonlyType="descriptions"
        schemaFormReadonlyType={undefined}
      />,
    );

    await expect(
      container.querySelector('.ant-descriptions-view'),
    ).toBeInTheDocument();

    await new Promise((resolve) => setTimeout(resolve, 300));

    const formItemWrapper = container.querySelector('.form-item-wrapper');
    expect(formItemWrapper).toBeTruthy();
  });
});
