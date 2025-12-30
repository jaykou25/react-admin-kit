import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProForm, SchemaForm } from 'react-admin-kit';

// Mock console.log to avoid cluttering test output
const originalConsoleLog = console.log;
beforeAll(() => {
  console.log = jest.fn();
});

afterAll(() => {
  console.log = originalConsoleLog;
});

describe('ProForm with embedded SchemaForm - readonly priority', () => {
  test('ProForm readonly should override SchemaForm readonly   when both are set', () => {
    render(
      <ProForm readonly={true}>
        <SchemaForm
          embed
          readonly={false} // This should be overridden by ProForm's readonly
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

    // Check that the form is in readonly mode by looking for the dash placeholder
    const placeholder = screen.getByText('-', { exact: false });
    expect(placeholder).toBeInTheDocument();

    // Should not find form inputs (readonly mode)
    const inputs = screen.queryAllByRole('textbox');
    expect(inputs).toHaveLength(0);
  });

  test('SchemaForm readonly should work when ProForm readonly is not set', () => {
    render(
      <ProForm>
        <SchemaForm
          embed
          readonly={true} // This should be respected
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

    // Check that the form is in readonly mode
    const placeholder = screen.getByText('-');
    expect(placeholder).toBeInTheDocument();

    // Should not find form inputs
    const inputs = screen.queryAllByRole('textbox');
    expect(inputs).toHaveLength(0);
  });

  test('Both ProForm and SchemaForm not readonly should render editable form', () => {
    render(
      <ProForm>
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

    // Should find form label
    const label = screen.getByText('Name');
    expect(label).toBeInTheDocument();

    // Form should be in editable state (not showing dash placeholder)
    const placeholder = screen.queryByText('-');
    expect(placeholder).not.toBeInTheDocument();
  });
});
