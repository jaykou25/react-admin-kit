import { render } from 'vitest-browser-react';
import { describe, expect, test, vi } from 'vitest';
import Convention from './index';

describe('ModalForm Convention 约定式赋值和取值测试', () => {
  test('0. 初始状态', async () => {
    const { container } = await render(<Convention onFinish={() => {}} />);
    // 初始弹窗未打开 (通过 container.querySelector 判断)
    expect(container.querySelector('.ant-modal-title')).toBeNull();
  });

  test('1. 点击编辑按钮打开弹窗，表单数据正确回填', async () => {
    const onFinish = vi.fn();
    const { getByTestId, getByText, getByLabelText, container } = await render(
      <Convention onFinish={onFinish} />,
    );

    // 点击编辑按钮
    await getByTestId('edit').click();
    await expect(getByText('基本表单')).toBeInTheDocument();

    // 验证用户名正确回填 (通过 label 找到 input 并检查 value)
    const nameInput = (await getByLabelText(
      '用户名',
    ).element()) as HTMLInputElement;
    expect(nameInput.value).toBe('tom');

    // 验证会员状态正确回填（是）- 找到 value="1" 的 radio 并检查父元素是否有 checked 类
    const yesRadioInput = container.querySelector(
      'input[type="radio"][value="1"]',
    ) as HTMLInputElement;
    const yesRadioWrapper = yesRadioInput?.closest('.ant-radio-wrapper');
    console.log('debug yesRadioWrapper', yesRadioWrapper);
    expect(
      yesRadioWrapper?.classList.contains('ant-radio-wrapper-checked'),
    ).toBe(true);

    // 验证部门选择框显示正确标签（销售部）
    const deptSelect = getByLabelText(/部门/);
    await expect(deptSelect).toBeInTheDocument();

    // 验证会员等级字段可见（因为 isMember = 1）
    await expect(getByText('会员等级')).toBeInTheDocument();

    // 验证会员等级正确回填（B）
    const gradeSelect = getByLabelText(/会员等级/);
    await expect(gradeSelect).toBeInTheDocument();
  });

  test('2. 测试约定式多字段赋值 deptId,deptName', async () => {
    const onFinish = vi.fn();
    const { getByTestId, getByLabelText, getByText } = await render(
      <Convention onFinish={onFinish} />,
    );

    await getByTestId('edit').click();

    // 部门字段应该显示正确的标签，但内部存储的是 deptId: '3', deptName: '销售部'
    const deptInput = getByLabelText(/部门/);
    await expect(deptInput).toBeInTheDocument();

    // 检查是否包含正确的选择值
    await expect(getByText('销售部')).toBeInTheDocument();
  });

  test('3. 测试约定式多字段赋值 gradeId,gradeName', async () => {
    const onFinish = vi.fn();
    const { getByTestId, getByLabelText, getByText } = await render(
      <Convention onFinish={onFinish} />,
    );

    await getByTestId('edit').click();

    // 等待会员等级字段出现
    const gradeSelect = getByLabelText(/会员等级/);
    await expect(gradeSelect).toBeInTheDocument();

    // 检查是否选择了正确的等级 B
    await expect(getByText('B')).toBeInTheDocument();
  });

  test('4. 测试依赖字段条件渲染', async () => {
    const onFinish = vi.fn();
    const { getByTestId, getByText, container } = await render(
      <Convention onFinish={onFinish} />,
    );

    await getByTestId('edit').click();

    // 会员等级字段应该可见（因为 isMember = 1）
    await expect(getByText('会员等级')).toBeInTheDocument();

    // 修改会员状态为否 - 点击 radio 标签
    const noMemberRadio = container
      .querySelector('input[type="radio"][value="0"]')
      ?.closest('.ant-radio-wrapper') as HTMLElement;
    await noMemberRadio?.click();

    // 会员等级字段应该隐藏 (通过 container.querySelector 判断)
    const gradeLabel = container.querySelector('label[title="会员等级"]');
    expect(gradeLabel).toBeNull();

    // 再次修改为是 - 点击 radio 标签
    const yesMemberRadio = container
      .querySelector('input[type="radio"][value="1"]')
      ?.closest('.ant-radio-wrapper') as HTMLElement;
    await yesMemberRadio?.click();

    // 会员等级字段应该再次显示
    await expect(getByText('会员等级')).toBeInTheDocument();
  });

  test('5. 表单提交时约定式取值正确', async () => {
    const onFinish = vi.fn();
    const { getByTestId, getByText } = await render(
      <Convention onFinish={onFinish} />,
    );

    await getByTestId('edit').click();

    // 点击确认按钮提交表单
    await getByTestId('ok').click();

    // 验证 onFinish 接收到的数据结构
    await expect(onFinish).toHaveBeenCalled();
    const calledValues = onFinish.mock.calls[0][0];

    // 验证基本字段
    expect(calledValues.name).toBe('tom');
    expect(calledValues.isMember).toBe(1);

    // 验证约定式多字段 - 部门
    expect(calledValues.deptId).toBe('3');
    expect(calledValues.deptName).toBe('销售部');

    // 验证约定式多字段 - 会员等级
    expect(calledValues.gradeId).toBe('2');
    expect(calledValues.gradeName).toBe('B');
  });

  test('6. 测试不同会员状态下的提交数据', async () => {
    const onFinish = vi.fn();
    const { getByTestId, container } = await render(
      <Convention onFinish={onFinish} />,
    );

    await getByTestId('edit').click();

    // 修改会员状态为否 - 点击 radio 标签
    const noMemberRadio = container.querySelector(
      '.ant-radio-wrapper:has(input[value="0"])',
    ) as HTMLElement;
    await noMemberRadio?.click();

    // 等待表单状态更新
    await new Promise((resolve) => setTimeout(resolve, 100));

    // 提交表单
    await getByTestId('ok').click();

    // 验证提交的数据
    await expect(onFinish).toHaveBeenCalled();
    const calledValues = onFinish.mock.calls[0][0];

    // isMember 应该为 0
    expect(calledValues.isMember).toBe(0);

    // gradeId 和 gradeName 应该为 undefined（因为字段被隐藏）
    expect(calledValues.gradeId).toBeUndefined();
    expect(calledValues.gradeName).toBeUndefined();
  });
});
