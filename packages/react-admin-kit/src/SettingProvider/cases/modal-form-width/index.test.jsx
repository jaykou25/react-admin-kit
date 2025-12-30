/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Demo from './index';

describe('SettingProvider modalFormSetting.width 集成测试', () => {
  it('1. 默认宽度配置生效', () => {
    render(<Demo />);

    const modalEle = document.querySelector('.ant-modal');
    expect(modalEle).toMatchSnapshot();
  });

  it('2. 传入自定义宽度时优先生效', () => {
    render(<Demo width={{ lg: '30%' }} />);

    const modalEle = document.querySelector('.ant-modal');
    expect(modalEle).toMatchSnapshot();
  });

  it('3. 传入自定义宽度时优先生效 - 数值', () => {
    render(<Demo width={400} />);

    const modalEle = document.querySelector('.ant-modal');
    expect(modalEle).toMatchSnapshot();
  });
});
