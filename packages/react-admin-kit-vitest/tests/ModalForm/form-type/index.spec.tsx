import { render } from 'vitest-browser-react';
import { describe, expect, test } from 'vitest';
import Demo from './index';

describe('ModalForm formType 集成测试', () => {
  test('1. 新增类型，表单应为空', async () => {
    const { getByTestId, getByText, getByLabelText, container } = await render(
      <Demo />,
    );

    await getByTestId('new').click();
    await expect(getByText('表单类型')).toBeInTheDocument();
    await expect(getByLabelText('用户名')).toHaveValue('');

    const optionYes = container.querySelector('.memberYes');
    expect(optionYes).not.toHaveClass('ant-radio-wrapper-checked');

    const optionNo = container.querySelector('.memberNo');
    expect(optionNo).not.toHaveClass('ant-radio-wrapper-checked');

    // 会员等级字段初始不显示 (通过 container.querySelector 判断)
    const gradeLabel = container.querySelector('label[title=”会员等级”]');
    expect(gradeLabel).toBeNull();

    // 额外信息只读字段
    await expect(getByText('-')).toBeInTheDocument();
  });

  test('2. 编辑类型，表单应显示初始值', async () => {
    const { getByTestId, getByText, getByLabelText } = await render(<Demo />);

    await getByTestId('edit').click();
    await expect(getByText('表单类型')).toBeInTheDocument();
    await expect(getByLabelText('用户名')).toHaveValue('王先生');
    // 会员单选框选中”是”
    await expect(getByLabelText('是')).toBeChecked();
    // 会员等级字段显示且有值
    await expect(getByLabelText('会员等级')).toHaveValue('一级');
    // 额外信息只读字段 (使用精确匹配)
    await expect(getByText('额外', { exact: true })).toBeInTheDocument();
  });

  test('3. 只读模式，表单应为只读', async () => {
    const { getByTestId, getByText, container } = await render(<Demo />);

    await getByTestId('readonly').click();
    await expect(getByText('表单类型')).toBeInTheDocument();

    // 用户名只读
    const userFormControl = container.querySelector(
      '.userFormItem .ant-form-item-control-input-content',
    );
    expect(userFormControl?.innerHTML).toBe('陈先生');

    const memberFormControl = container.querySelector(
      '.memberFormItem .ant-form-item-control-input-content',
    );
    expect(memberFormControl?.innerHTML).toBe('是');

    await expect(getByText('二级')).toBeInTheDocument();

    // 额外信息只读字段
    await expect(getByText('额外2')).toBeInTheDocument();
  });

  test('4. 先点编辑，再点新增，看初始值是否正确', async () => {
    const { getByTestId, getByText, getByLabelText, container } = await render(
      <Demo />,
    );

    await getByTestId('edit').click();

    // 点击关闭按钮
    await container.querySelector('button.ant-modal-close')?.click();

    // 等待弹窗关闭动画
    await new Promise((resolve) => setTimeout(resolve, 300));

    await getByTestId('new').click();
    await expect(getByText('表单类型')).toBeInTheDocument();
    await expect(getByLabelText('用户名')).toHaveValue('');

    const optionYes = container.querySelector('.memberYes');
    expect(optionYes).not.toHaveClass('ant-radio-wrapper-checked');

    const optionNo = container.querySelector('.memberNo');
    expect(optionNo).not.toHaveClass('ant-radio-wrapper-checked');

    // 会员等级字段初始不显示 (通过 container.querySelector 判断)
    const gradeLabel = container.querySelector('label[title=”会员等级”]');
    expect(gradeLabel).toBeNull();

    // 额外信息只读字段
    await expect(getByText('-')).toBeInTheDocument();
  });
});
