/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Convention from './index';
import { isModalClosing } from '../utils';

describe('ModalForm Convention 约定式赋值和取值测试', () => {
  const user = userEvent.setup();

  it('0. 初始状态', () => {
    render(<Convention />);
    expect(screen.queryByText('基本表单')).not.toBeInTheDocument();
  });

  it('1. 点击编辑按钮打开弹窗，表单数据正确回填', async () => {
    const onFinish = jest.fn();
    const { container } = render(<Convention onFinish={onFinish} />);

    // 点击编辑按钮
    await user.click(screen.getByTestId('edit'));
    expect(screen.getByText('基本表单')).toBeInTheDocument();

    // 验证用户名正确回填
    expect(screen.getByDisplayValue('tom')).toBeInTheDocument();

    // 验证会员状态正确回填（是）
    const memberRadio = screen.getByDisplayValue('1');
    expect(memberRadio).toBeChecked();

    // 验证部门选择框显示正确标签（销售部）
    // 由于是 labelInValue，需要检查选择的值
    const deptSelect = screen.getByLabelText(/部门/);
    expect(deptSelect).toBeInTheDocument();

    // 验证会员等级字段可见（因为 isMember = 1）
    await waitFor(() => {
      expect(screen.getByText('会员等级')).toBeInTheDocument();
    });

    // 验证会员等级正确回填（B）
    const gradeSelect = screen.getByLabelText(/会员等级/);
    expect(gradeSelect).toBeInTheDocument();
  });

  it('2. 测试约定式多字段赋值 deptId,deptName', async () => {
    const onFinish = jest.fn();
    render(<Convention onFinish={onFinish} />);

    await user.click(screen.getByTestId('edit'));

    // 部门字段应该显示正确的标签，但内部存储的是 deptId: '3', deptName: '销售部'
    const deptInput = screen.getByLabelText(/部门/);
    expect(deptInput).toBeInTheDocument();

    // 检查是否包含正确的选择值
    await waitFor(() => {
      const selectedOption = screen.getByText('销售部');
      expect(selectedOption).toBeInTheDocument();
    });
  });

  it('3. 测试约定式多字段赋值 gradeId,gradeName', async () => {
    const onFinish = jest.fn();
    render(<Convention onFinish={onFinish} />);

    await user.click(screen.getByTestId('edit'));

    // 等待会员等级字段出现
    await waitFor(() => {
      const gradeSelect = screen.getByLabelText(/会员等级/);
      expect(gradeSelect).toBeInTheDocument();
    });

    // 检查是否选择了正确的等级 B
    const selectedGrade = screen.getByText('B');
    expect(selectedGrade).toBeInTheDocument();
  });

  it('4. 测试依赖字段条件渲染', async () => {
    const onFinish = jest.fn();
    render(<Convention onFinish={onFinish} />);

    await user.click(screen.getByTestId('edit'));

    // 会员等级字段应该可见（因为 isMember = 1）
    await waitFor(() => {
      expect(screen.getByText('会员等级')).toBeInTheDocument();
    });

    // 修改会员状态为否
    const noMemberRadio = screen.getByDisplayValue('0');
    await user.click(noMemberRadio);

    // 会员等级字段应该隐藏
    await waitFor(() => {
      expect(screen.queryByText('会员等级')).not.toBeInTheDocument();
    });

    // 再次修改为是
    const yesMemberRadio = screen.getByDisplayValue('1');
    await user.click(yesMemberRadio);

    // 会员等级字段应该再次显示
    await waitFor(() => {
      expect(screen.getByText('会员等级')).toBeInTheDocument();
    });
  });

  it('5. 表单提交时约定式取值正确', async () => {
    const onFinish = jest.fn();
    render(<Convention onFinish={onFinish} />);

    await user.click(screen.getByTestId('edit'));

    // 点击确认按钮提交表单
    await user.click(screen.getByTestId('ok'));

    // 验证 onFinish 接收到的数据结构
    await waitFor(() => {
      expect(onFinish).toHaveBeenCalled();
      const calledValues = onFinish.mock.calls[0][0];

      // 验证基本字段
      expect(calledValues.name).toBe('tom');
      expect(calledValues.isMember).toBe(1);

      // 验证约定式多字段 - 部门
      // deptId 和 deptName 应该被正确提取并设置
      expect(calledValues.deptId).toBe('3');
      expect(calledValues.deptName).toBe('销售部');

      // 验证约定式多字段 - 会员等级
      expect(calledValues.gradeId).toBe('2');
      expect(calledValues.gradeName).toBe('B');
    });
  });

  it('6. 测试不同会员状态下的提交数据', async () => {
    const onFinish = jest.fn();
    render(<Convention onFinish={onFinish} />);

    await user.click(screen.getByTestId('edit'));

    // 修改会员状态为否
    const noMemberRadio = screen.getByDisplayValue('0');
    await user.click(noMemberRadio);

    // 提交表单
    await user.click(screen.getByTestId('ok'));

    // 验证提交的数据
    await waitFor(() => {
      expect(onFinish).toHaveBeenCalled();
      const calledValues = onFinish.mock.calls[0][0];

      // isMember 应该为 0
      expect(calledValues.isMember).toBe(0);

      // gradeId 和 gradeName 应该为 undefined（因为字段被隐藏）
      expect(calledValues.gradeId).toBeUndefined();
      expect(calledValues.gradeName).toBeUndefined();
    });
  });
});