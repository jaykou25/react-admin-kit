import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ProForm, SchemaForm } from 'react-admin-kit';

describe('ProForm onFinish 验证', () => {
  const user = userEvent.setup();
  it('正常填表单', async () => {
    const onFinishMock = jest.fn();
    render(
      <ProForm onFinish={onFinishMock} submitter>
        <SchemaForm
          embed
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
            },
            {
              title: 'Hobby',
              dataIndex: 'hobbyId,hobbyName',
              valueType: 'select',
              fieldProps: {
                open: true,
                labelInValue: true,
                options: [
                  {
                    ['data-testid']: 'testOption1',
                    label: 'Music',
                    value: '8',
                  },
                ],
              },
            },
          ]}
        />
      </ProForm>,
    );

    const nameInput = screen.getByLabelText(/Name/);
    await user.type(nameInput, 'Jack');

    await user.click(screen.queryByTestId('testOption1'));

    await user.click(screen.queryByText('提 交'));

    expect(onFinishMock).toBeCalledWith({
      name: 'Jack',
      hobbyId: '8',
      hobbyName: 'Music',
    });
  });

  it('onFinish 没传', async () => {
    const onFinishMock = jest.fn();
    render(
      <ProForm submitter>
        <SchemaForm
          embed
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
            },
          ]}
        />
      </ProForm>,
    );

    await user.click(screen.queryByText('提 交'));

    expect(onFinishMock).not.toBeCalled();
  });
});
