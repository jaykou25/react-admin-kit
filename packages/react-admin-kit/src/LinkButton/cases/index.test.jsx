/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createRef } from 'react';

import LinkButton from '../index';

describe('Button 集成测试', () => {
  it('link', () => {
    const { container } = render(<LinkButton>Hi</LinkButton>);

    expect(container.querySelector('.ant-btn-link')).toBeInTheDocument();
  });

  it('visible false', async () => {
    render(<LinkButton visible={false}>Hi</LinkButton>);
    expect(screen.queryByText('Hi')).not.toBeInTheDocument();
  });

  it('visible function', async () => {
    render(<LinkButton visible={() => false}>Hi</LinkButton>);
    expect(screen.queryByText('Hi')).not.toBeInTheDocument();
  });

  it('visible function true', async () => {
    render(<LinkButton visible={() => true}>Hi</LinkButton>);
    expect(screen.queryByText('Hi')).toBeInTheDocument();
  });

  it('visible default', async () => {
    render(<LinkButton>Hi</LinkButton>);
    expect(screen.queryByText('Hi')).toBeInTheDocument();
  });

  describe('ref 转发测试', () => {
    it('应该正确转发 ref 到 button 元素', () => {
      const ref = createRef();
      render(<LinkButton ref={ref}>Hi</LinkButton>);

      expect(ref.current).toBeTruthy();
      expect(ref.current.tagName).toBe('BUTTON');
    });

    it('visible 为 false 时不应该转发 ref', () => {
      const ref = createRef();
      render(<LinkButton ref={ref} visible={false}>
        Hi
      </LinkButton>);

      expect(ref.current).toBeNull();
    });

    it('visible 返回 false 时不应该转发 ref', () => {
      const ref = createRef();
      render(<LinkButton ref={ref} visible={() => false}>
        Hi
      </LinkButton>);

      expect(ref.current).toBeNull();
    });
  });
});
