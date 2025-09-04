import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProForm, SchemaForm } from 'react-admin-kit';

describe('ProForm with embedded SchemaForm - readonlyType priority', () => {
  test('SchemaForm readonlyType should override ProForm readonlyType  when both are set', async () => {
    const { container } = render(
      <ProForm readonlyType="descriptions" readonly>
        <SchemaForm
          embed
          readonlyType="form" // 它的优先级高
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
              required: true,
            },
          ]}
        />
      </ProForm>,
    );

    expect(container.querySelector('.ant-descriptions-view')).toBeNull();
    await waitFor(() => {
      expect(container.querySelector('.form-item-wrapper').style.display).toBe(
        'block',
      );
    });
  });

  test('SchemaForm readonlyType should work when ProForm readonlyType is set', async () => {
    const { container } = render(
      <ProForm readonly readonlyType="descriptions">
        <SchemaForm
          embed
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
              required: true,
            },
          ]}
        />
      </ProForm>,
    );

    expect(
      container.querySelector('.ant-descriptions-view'),
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(container.querySelector('.form-item-wrapper')).not.toBeVisible();
    });
  });
});
