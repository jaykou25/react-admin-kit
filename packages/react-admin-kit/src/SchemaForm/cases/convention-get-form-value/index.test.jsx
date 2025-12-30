/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import FormValueDemo from './index';

describe('SchemaForm 表单值获取测试', () => {
  const user = userEvent.setup();

  // 测试初始渲染
  describe('初始渲染', () => {
    it('应正确显示初始值', () => {
      render(<FormValueDemo />);

      expect(screen.getByTestId('display-value')).toHaveTextContent('1');
      expect(screen.getByTestId('display-label')).toHaveTextContent('jack');
    });
  });

  // 测试不同获取值的方法
  describe('表单值获取方法', () => {
    it('提交时应返回原始值', async () => {
      render(<FormValueDemo />);

      await user.click(screen.getByTestId('submit-btn'));

      await waitFor(() => {
        const result = JSON.parse(screen.getByTestId('onFinish').textContent);
        expect(result).toEqual({
          userId: '1',
          userName: 'jack',
        });
      });
    });

    it('getFieldsValue 应返回原始值', async () => {
      render(<FormValueDemo />);

      await user.click(screen.getByTestId('get-fields-btn'));

      await waitFor(() => {
        const result = JSON.parse(
          screen.getByTestId('getFieldsValue').textContent,
        );
        expect(result).toEqual({
          userId: '1',
          userName: 'jack',
        });
      });
    });

    it('validateFields 应返回原始值', async () => {
      render(<FormValueDemo />);

      await user.click(screen.getByTestId('validate-btn'));

      await waitFor(() => {
        const result = JSON.parse(
          screen.getByTestId('validateFields').textContent,
        );
        expect(result).toEqual({
          userId: '1',
          userName: 'jack',
        });
      });
    });

    it('getFieldsFormatValue 应返回格式化值', async () => {
      render(<FormValueDemo />);

      await user.click(screen.getByTestId('get-format-btn'));

      await waitFor(() => {
        const result = JSON.parse(
          screen.getByTestId('getFieldsFormatValue').textContent,
        );
        expect(result).toEqual({
          userId: '1',
          userName: 'jack',
        });
      });
    });

    it('validateFieldsReturnFormatValue 应返回格式化值', async () => {
      render(<FormValueDemo />);

      await user.click(screen.getByTestId('validate-format-btn'));

      await waitFor(() => {
        const result = JSON.parse(
          screen.getByTestId('validateFieldsReturnFormatValue').textContent,
        );
        expect(result).toEqual({
          userId: '1',
          userName: 'jack',
        });
      });
    });
  });
});
