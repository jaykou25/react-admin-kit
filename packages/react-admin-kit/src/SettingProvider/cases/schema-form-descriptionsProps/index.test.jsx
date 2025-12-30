/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SchemaFormDemo from './index';

describe('SettingProvider schemaFormSetting.descriptionsProps 集成测试', () => {
  it('合并 SettingProvider 和 SchemaForm 的 descriptionsProps', () => {
    const { container } = render(<SchemaFormDemo />);

    // 检查是否应用了 SettingProvider 的 size="small"
    const descriptions = container.querySelector('.ant-descriptions');
    expect(descriptions).toHaveClass('ant-descriptions-small');

    // 检查是否应用了 SchemaForm 的 bordered={true}
    expect(descriptions).toHaveClass('ant-descriptions-bordered');

    // 检查内容是否正确显示
    expect(screen.queryAllByText('Name')).toHaveLength(2);
    expect(screen.queryAllByText('test value')).toHaveLength(2);
  });
});
