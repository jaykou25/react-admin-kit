import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProForm, SchemaForm } from 'react-admin-kit';

describe('submitter 覆盖', () => {
  it('submitter 可以为 true', async () => {
    render(
      <ProForm submitter>
        <SchemaForm embed columns={[{ title: 'HI', dataIndex: 'hi' }]} />
      </ProForm>,
    );

    expect(screen.queryByText('提 交')).toBeInTheDocument();
  });
});
