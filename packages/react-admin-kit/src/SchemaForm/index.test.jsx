/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormValue from '../../docs/case/schemaFormDemo/formValue';
import ProFormValue from '../../docs/case/proFormDemo/formValue';
import FieldPropsSetDemo from '../../docs/case/schemaFormDemo/fieldPropsForm';
import TouchDemo from '../../docs/case/schemaFormDemo/initialValueTouch';

describe('SchemaForm', () => {
  async function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  async function doExpect() {
    await waitFor(() => {
      userEvent.click(screen.getByText('onFinish'));
      userEvent.click(screen.getByText('getFieldsValue'));
      userEvent.click(screen.getByText('validateFields'));
      userEvent.click(screen.getByText('getFieldsFormatValue'));
      userEvent.click(screen.getByText('validateFieldsReturnFormatValue'));
    });

    const val = {
      userId: '2',
      userName: '李四',
    };

    await waitFor(() => {
      expect(JSON.parse(screen.getByTestId('onFinish').innerHTML)).toEqual(val);

      expect(JSON.parse(screen.getByTestId('onFinish').innerHTML)).toEqual(val);

      expect(
        JSON.parse(screen.getByTestId('validateFields').innerHTML),
      ).toEqual(val);
    });

    expect(
      JSON.parse(screen.getByTestId('getFieldsFormatValue').innerHTML),
    ).toEqual(val);

    expect(
      JSON.parse(
        screen.getByTestId('validateFieldsReturnFormatValue').innerHTML,
      ),
    ).toEqual(val);
  }

  test('测试约定式取值-有默认值', async () => {
    // 表单中渲染一个下拉有初始值 {userId: '2', userName: '李四',}
    // dataIndex 是 'userId,userName',
    render(<FormValue />);

    await doExpect();
  });

  test('测试约定式取值-无默认值', async () => {
    render(<FormValue initialValues={{}} />);

    const select = screen.getByTestId('userCaseSelect');
    await userEvent.click(select.firstChild);

    const option = screen.getByTestId('userCaseSelectOption');

    await userEvent.click(option);

    await doExpect();
  });

  test('测试 ProForm 的约定式取值', async () => {
    // 在 ProForm 中 embed 一个表单, 表单中渲染一个下拉有初始值 {userId: '2', userName: '李四',}
    // dataIndex 是 'userId,userName',
    render(<ProFormValue />);

    await doExpect();
  });

  test('测试 ProForm 约定式取值 - 无默认值', async () => {
    render(<ProFormValue initialValues={{}} />);

    const select = screen.getByTestId('userCaseSelect');
    await userEvent.click(select.firstChild);

    const option = screen.getByTestId('userCaseSelectOption');

    await userEvent.click(option);

    await doExpect();
  });

  test('测试 columns 里 fieldProps 的 form 约定式赋值问题', async () => {
    // 选择一个下拉, 会给另一个下拉赋上值 (约定式的)
    render(<FieldPropsSetDemo />);

    const select = screen.getByTestId('targetOption');
    await userEvent.click(select.firstChild);

    // 期望是选中的状态
    const resultOption = screen.getByTestId('resultOption');
    const attr = resultOption.getAttribute('aria-selected');
    expect(attr).toBe('true');
  });

  test('测试 SchemaForm 有初始值时是否 touch 问题', async () => {
    const touchHandleFn = jest.fn();
    render(<TouchDemo touchHandle={touchHandleFn} />);

    const btn = screen.getByText('是否touch');
    await userEvent.click(btn);

    expect(touchHandleFn).toHaveBeenCalledWith(false);
  });
});
