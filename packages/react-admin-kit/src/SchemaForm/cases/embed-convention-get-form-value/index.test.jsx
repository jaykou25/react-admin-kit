/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ProFormGetValueDemo from './index';

describe('ProForm 内嵌模式下取值测试', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(<ProFormGetValueDemo />);
  });

  it('初始渲染时应显示内嵌表单的初始值', () => {
    // DisplayComponent 组件负责展示约定式值的 label
    expect(screen.getByTestId('display-label')).toHaveTextContent('Alice');
    expect(screen.getByTestId('display-value')).toHaveTextContent('1');
    expect(screen.getByTestId('display-label2')).toHaveTextContent('HR');
    expect(screen.getByTestId('display-value2')).toHaveTextContent('10');
  });

  it('getFieldsValue 应返回原始值', async () => {
    await user.click(screen.getByTestId('get-raw-btn'));
    await waitFor(() => {
      const rawResult = JSON.parse(
        screen.getByTestId('raw-result').textContent,
      );
      expect(rawResult).toEqual({
        baseInfo: {
          userId: '1',
          userName: 'Alice',
        },
        business: {
          deptId: '10',
          deptName: 'HR',
        },
      });
    });
  });

  it('getFieldsFormatValue 应返回约定式格式的值', async () => {
    await user.click(screen.getByTestId('get-format-btn'));
    await waitFor(() => {
      const formatResult = JSON.parse(
        screen.getByTestId('format-result').textContent,
      );
      expect(formatResult).toEqual({
        baseInfo: {
          userId: '1',
          userName: 'Alice',
        },
        business: {
          deptId: '10',
          deptName: 'HR',
        },
      });
    });
  });

  it('validateFields 应返回原始值', async () => {
    await user.click(screen.getByTestId('validate-btn'));
    await waitFor(() => {
      const validateResult = JSON.parse(
        screen.getByTestId('validate-result').textContent,
      );
      expect(validateResult).toEqual({
        baseInfo: {
          userId: '1',
          userName: 'Alice',
        },
        business: {
          deptId: '10',
          deptName: 'HR',
        },
      });
    });
  });

  it('validateFormatFields 应返回原始值', async () => {
    await user.click(screen.getByTestId('validate-format-btn'));
    await waitFor(() => {
      const validateResult = JSON.parse(
        screen.getByTestId('validate-format-result').textContent,
      );
      expect(validateResult).toEqual({
        baseInfo: {
          userId: '1',
          userName: 'Alice',
        },
        business: {
          deptId: '10',
          deptName: 'HR',
        },
      });
    });
  });

  it('提交时 onFinish 应返回原始值', async () => {
    await user.click(screen.getByTestId('submit-btn'));
    await waitFor(() => {
      const submitResult = JSON.parse(
        screen.getByTestId('submit-result').textContent,
      );
      expect(submitResult).toEqual({
        baseInfo: {
          userId: '1',
          userName: 'Alice',
        },
        business: {
          deptId: '10',
          deptName: 'HR',
        },
      });
    });
  });
});
