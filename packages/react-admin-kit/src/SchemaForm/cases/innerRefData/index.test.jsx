/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Demo from './index';

describe('SchemaForm innerRefData 集成测试', () => {
  it('1. 选择员工后，部门联动', async () => {
    const { container } = render(<Demo />);

    // 1. 模拟用户选择员工1
    const userOption1 = await screen.findByTestId('userOption1');
    fireEvent.click(userOption1);

    // 2. 验证部门字段显示
    const deptInput = await screen.findByTestId('deptInput');
    expect(deptInput).toBeInTheDocument();

    // 3. 验证部门字段被禁用
    expect(deptInput).toBeDisabled();

    // 4. 验证部门输入框的值
    expect(deptInput.value).toBe('部门A');
  });
});
