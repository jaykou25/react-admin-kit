/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConventionBaseDemo from '.';
import userEvent from '@testing-library/user-event';

describe('测试 schema-form 约定式', () => {
  test('测试初始值的回显和取值', async () => {
    const onFinishFn = jest.fn();

    render(<ConventionBaseDemo onFinish={onFinishFn} />);

    // 确保初始值是正确的
    // 用户名为 Tom
    expect(screen.getByTestId('userNameInput').value).toBe('tom');

    // 部门为销售部
    const deptTreeSelect = screen.getByTestId('deptTreeSelect');
    expect(within(deptTreeSelect).getByText('销售部')).toBeInTheDocument();

    // 部门的树形选择框为选中
    expect(
      screen
        .getByTestId('deptOptionSale')
        .className.includes('ant-select-tree-treenode-selected'),
    ).toBe(true);

    // 会员默认值为是
    expect(screen.getByLabelText('是')).toBeChecked();

    // 验证会员等级选择框值为B
    // dependency 的列赋值有延时
    await waitFor(() => {
      const gradeSelect = screen.getByTestId('gradeSelect');
      expect(within(gradeSelect).getByText('B')).toBeInTheDocument();
    });

    // 约定式赋值有延时
    await waitFor(() => {
      expect(
        screen
          .getByTestId('gradeOptionB')
          .className.includes('ant-select-item-option-selected'),
      ).toBe(true);
    });

    // 确保提交后的返回值
    /**
     * {
          name: 'tom',
          deptId: '3',
          deptName: '销售部',
          isMember: 1,
          gradeId: '2',
          gradeName: 'B',
        }
     */

    await userEvent.click(screen.getByTestId('submitBtn'));
    expect(onFinishFn).toHaveBeenCalledWith({
      info: {
        name: 'tom',
        deptId: '3',
        deptName: '销售部',
        isMember: 1,
        gradeId: '2',
        gradeName: 'B',
      },
    });
  }, 10000);

  test('测试赋值和取值', async () => {
    const onFinishFn = jest.fn();
    render(<ConventionBaseDemo onFinish={onFinishFn} />);

    await userEvent.click(screen.getByTestId('setBtn'));

    // 用户名为 jack
    expect(screen.getByTestId('userNameInput').value).toBe('jack');

    // 部门为技术部
    await waitFor(() => {
      const deptTreeSelect = screen.getByTestId('deptTreeSelect');
      expect(within(deptTreeSelect).getByText('技术部')).toBeInTheDocument();
    });

    // 技术部的树形选择框为选中
    expect(
      screen
        .getByTestId('deptOptionTech')
        .className.includes('ant-select-tree-treenode-selected'),
    ).toBe(true);

    // 会员默认值为是
    expect(screen.getByLabelText('是')).toBeChecked();

    // 会员等级为A
    expect(
      screen
        .getByTestId('gradeOptionA')
        .className.includes('ant-select-item-option-selected'),
    ).toBe(true);

    // 确保提交后的返回值
    await userEvent.click(screen.getByTestId('submitBtn'));
    expect(onFinishFn).toHaveBeenCalledWith({
      info: {
        name: 'jack',
        deptId: '2',
        deptName: '技术部',
        isMember: 1,
        gradeId: '1',
        gradeName: 'A',
      },
    });
  }, 10000);

  test('测试赋值以后的重置-部门', async () => {
    const onFinishFn = jest.fn();
    render(<ConventionBaseDemo onFinish={onFinishFn} />);

    await userEvent.click(screen.getByTestId('setBtn'));
    await userEvent.click(screen.getByTestId('resetDeptBtn'));

    // 部门为销售部
    const deptTreeSelect = screen.getByTestId('deptTreeSelect');
    expect(within(deptTreeSelect).getByText('销售部')).toBeInTheDocument();

    // 部门的树形选择框为选中
    expect(
      screen
        .getByTestId('deptOptionSale')
        .className.includes('ant-select-tree-treenode-selected'),
    ).toBe(true);

    await userEvent.click(screen.getByTestId('submitBtn'));
    expect(onFinishFn).toHaveBeenCalledWith({
      info: {
        name: 'jack',
        deptId: '3',
        deptName: '销售部',
        isMember: 1,
        gradeId: '1',
        gradeName: 'A',
      },
    });
  });

  test('测试赋值以后的重置-部门等级', async () => {
    const onFinishFn = jest.fn();
    render(<ConventionBaseDemo onFinish={onFinishFn} />);

    await userEvent.click(screen.getByTestId('setBtn'));
    await userEvent.click(screen.getByTestId('resetGradeBtn'));

    // 部门为销售部
    const deptTreeSelect = screen.getByTestId('deptTreeSelect');
    expect(within(deptTreeSelect).getByText('销售部')).toBeInTheDocument();

    // 部门的树形选择框为选中
    expect(
      screen
        .getByTestId('deptOptionSale')
        .className.includes('ant-select-tree-treenode-selected'),
    ).toBe(true);

    // 验证会员等级选择框值为B
    // dependency 的列赋值有延时
    await waitFor(() => {
      const gradeSelect = screen.getByTestId('gradeSelect');
      expect(within(gradeSelect).getByText('B')).toBeInTheDocument();
    });

    await userEvent.click(screen.getByTestId('submitBtn'));
    expect(onFinishFn).toHaveBeenCalledWith({
      info: {
        name: 'jack',
        deptId: '3',
        deptName: '销售部',
        isMember: 1,
        gradeId: '2',
        gradeName: 'B',
      },
    });
  });

  test('测试赋值以后的重置-所有', async () => {
    const onFinishFn = jest.fn();
    render(<ConventionBaseDemo onFinish={onFinishFn} />);

    await userEvent.click(screen.getByTestId('setBtn'));
    await userEvent.click(screen.getByTestId('resetAllBtn'));

    // 用户名为 Tom
    expect(screen.getByTestId('userNameInput').value).toBe('tom');

    // 部门为销售部
    const deptTreeSelect = screen.getByTestId('deptTreeSelect');
    expect(within(deptTreeSelect).getByText('销售部')).toBeInTheDocument();

    // 部门的树形选择框为选中
    expect(
      screen
        .getByTestId('deptOptionSale')
        .className.includes('ant-select-tree-treenode-selected'),
    ).toBe(true);

    // 验证会员等级选择框值为B
    // dependency 的列赋值有延时
    await waitFor(() => {
      const gradeSelect = screen.getByTestId('gradeSelect');
      expect(within(gradeSelect).getByText('B')).toBeInTheDocument();
    });

    await userEvent.click(screen.getByTestId('submitBtn'));
    expect(onFinishFn).toHaveBeenCalledWith({
      info: {
        name: 'tom',
        deptId: '3',
        deptName: '销售部',
        isMember: 1,
        gradeId: '2',
        gradeName: 'B',
      },
    });
  });
});
