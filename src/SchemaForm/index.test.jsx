/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormValue2 from '../../docs/case/proFormDemo/formValue';
import FormValue from '../../docs/case/schemaFormDemo/formValue';

test('测试约定式取值', async () => {
  render(<FormValue />);

  await userEvent.click(screen.getByText('onFinish'));
  const onFinishValue = screen.getByTestId('onFinish').innerHTML;
  expect(JSON.parse(onFinishValue)).toEqual({ userId: '2', userName: '李四' });

  await userEvent.click(screen.getByText('getFieldsValue'));
  expect(JSON.parse(screen.getByTestId('onFinish').innerHTML)).toEqual({
    userId: '2',
    userName: '李四',
  });

  await userEvent.click(screen.getByText('validateFields'));
  expect(JSON.parse(screen.getByTestId('validateFields').innerHTML)).toEqual({
    userId: '2',
    userName: '李四',
  });

  await userEvent.click(screen.getByText('getFieldsFormatValue'));
  expect(
    JSON.parse(screen.getByTestId('getFieldsFormatValue').innerHTML),
  ).toEqual({
    userId: '2',
    userName: '李四',
  });

  await userEvent.click(screen.getByText('validateFieldsReturnFormatValue'));
  expect(
    JSON.parse(screen.getByTestId('validateFieldsReturnFormatValue').innerHTML),
  ).toEqual({
    userId: '2',
    userName: '李四',
  });
});

test('测试 ProForm 约定式取值', async () => {
  render(<FormValue2 />);

  await userEvent.click(screen.getByText('onFinish'));
  const onFinishValue = screen.getByTestId('onFinish').innerHTML;
  expect(JSON.parse(onFinishValue)).toEqual({ userId: '2', userName: '李四' });

  await userEvent.click(screen.getByText('getFieldsValue'));
  expect(JSON.parse(screen.getByTestId('onFinish').innerHTML)).toEqual({
    userId: '2',
    userName: '李四',
  });

  await userEvent.click(screen.getByText('validateFields'));
  expect(JSON.parse(screen.getByTestId('validateFields').innerHTML)).toEqual({
    userId: '2',
    userName: '李四',
  });

  await userEvent.click(screen.getByText('getFieldsFormatValue'));
  expect(
    JSON.parse(screen.getByTestId('getFieldsFormatValue').innerHTML),
  ).toEqual({
    userId: '2',
    userName: '李四',
  });

  await userEvent.click(screen.getByText('validateFieldsReturnFormatValue'));
  expect(
    JSON.parse(screen.getByTestId('validateFieldsReturnFormatValue').innerHTML),
  ).toEqual({
    userId: '2',
    userName: '李四',
  });
});
