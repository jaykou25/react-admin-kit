import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProForm, SchemaForm } from 'react-admin-kit';

describe('ProForm with embedded SchemaForm - readonlyType priority', () => {
  test('SchemaForm readonlyType should override ProForm readonlyType  when both are set', () => {
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
    waitFor(() => {
      expect(screen.getByText('Name')).toBeVisible();
    });
  });

  test('SchemaForm readonlyType should work when ProForm readonlyType is set', () => {
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

    waitFor(() => {
      expect(container.querySelector('.form-item-wrapper')).not.toBeVisible();
    });
  });
});
