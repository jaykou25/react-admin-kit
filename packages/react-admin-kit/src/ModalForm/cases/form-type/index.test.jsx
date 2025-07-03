/**
 * @jest-environment jsdom
 */
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Demo from './index';

describe('ModalForm formType 集成测试', () => {
  const user = userEvent.setup();
  let container;

  beforeEach(() => {
    const { container: con } = render(<Demo />);
    container = con;
  });

  it('1. 新增类型，表单应为空', async () => {
    await user.click(screen.getByTestId('new'));
    expect(screen.getByText('表单类型')).toBeInTheDocument();
    expect(screen.getByLabelText('用户名')).toHaveValue('');

    const optionYes = container.querySelector('.memberYes');
    expect(optionYes).not.toHaveClass('ant-radio-wrapper-checked');

    const optionNo = container.querySelector('.memberNo');
    expect(optionNo).not.toHaveClass('ant-radio-wrapper-checked');

    // 会员等级字段初始不显示
    expect(screen.queryByLabelText('会员等级')).not.toBeInTheDocument();
    // 额外信息只读字段
    expect(screen.getByText('-')).toBeInTheDocument();
  });

  it('2. 编辑类型，表单应显示初始值', async () => {
    await user.click(screen.getByTestId('edit'));
    expect(screen.getByText('表单类型')).toBeInTheDocument();
    expect(screen.getByLabelText('用户名')).toHaveValue('王先生');
    // 会员单选框选中“是”
    expect(screen.getByLabelText('是')).toBeChecked();
    // 会员等级字段显示且有值
    expect(screen.getByLabelText('会员等级')).toHaveValue('一级');
    // 额外信息只读字段
    expect(screen.getByText('额外')).toBeInTheDocument();
  });

  it('3. 只读模式，表单应为只读', async () => {
    await user.click(screen.getByTestId('readonly'));
    expect(screen.getByText('表单类型')).toBeInTheDocument();
    // 用户名只读
    const userFormControl = container.querySelector(
      '.userFormItem .ant-form-item-control-input-content',
    );
    expect(userFormControl.innerHTML).toBe('陈先生');

    const memberFormControl = container.querySelector(
      '.memberFormItem .ant-form-item-control-input-content',
    );
    expect(memberFormControl.innerHTML).toBe('是');

    expect(screen.getByText('二级')).toBeInTheDocument();

    // 额外信息只读字段
    expect(screen.getByText('额外2')).toBeInTheDocument();
  });

  it('4. 先点编辑，再点新增，看初始值是否正确', async () => {
    await user.click(screen.getByTestId('edit'));

    // 点击关闭按钮
    await user.click(container.querySelector('button.ant-modal-close'));

    // 这里非要用 act, 可能因为关闭弹窗有动画。而且这个 act 不能用 async await
    act(() => {
      user.click(screen.getByTestId('new')).then(() => {
        expect(screen.getByText('表单类型')).toBeInTheDocument();
        expect(screen.getByLabelText('用户名')).toHaveValue('');

        const optionYes = container.querySelector('.memberYes');
        expect(optionYes).not.toHaveClass('ant-radio-wrapper-checked');

        const optionNo = container.querySelector('.memberNo');
        expect(optionNo).not.toHaveClass('ant-radio-wrapper-checked');

        // 会员等级字段初始不显示
        expect(screen.queryByLabelText('会员等级')).not.toBeInTheDocument();
        // 额外信息只读字段
        expect(screen.getByText('-')).toBeInTheDocument();
      });
    });
  });
});
