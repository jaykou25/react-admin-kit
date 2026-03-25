import { render } from 'vitest-browser-react';
import { describe, expect, test } from 'vitest';
import Demo from './index';

describe('ProForm with embedded SchemaForm - readonly priority', () => {
  test('ProForm readonly should override SchemaForm readonly when both are set', async () => {
    const { getByText } = await render(
      <Demo proFormReadonly={true} schemaFormReadonly={false} />,
    );

    await expect(getByText('-')).toBeInTheDocument();
  });

  test('SchemaForm readonly should work when ProForm readonly is not set', async () => {
    const { getByText } = await render(
      <Demo proFormReadonly={undefined} schemaFormReadonly={true} />,
    );

    await expect(getByText('-')).toBeInTheDocument();
  });

  test('Both ProForm and SchemaForm not readonly should render editable form', async () => {
    const { getByText, getByLabelText } = await render(
      <Demo proFormReadonly={undefined} schemaFormReadonly={undefined} />,
    );

    await expect(getByText('Name')).toBeInTheDocument();

    await expect(getByText('-')).not.toBeInTheDocument();
  });
});
