/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createRef } from 'react';

import Button from '../index';

describe('Button 集成测试', () => {
  it('visible false', async () => {
    render(<Button visible={false}>Hi</Button>);
    expect(screen.queryByText('Hi')).not.toBeInTheDocument();
  });

  it('visible function', async () => {
    render(<Button visible={() => false}>Hi</Button>);
    expect(screen.queryByText('Hi')).not.toBeInTheDocument();
  });

  it('visible function true', async () => {
    render(<Button visible={() => true}>Hi</Button>);
    expect(screen.queryByText('Hi')).toBeInTheDocument();
  });

  it('visible default', async () => {
    render(<Button>Hi</Button>);
    expect(screen.queryByText('Hi')).toBeInTheDocument();
  });

  describe('ref 转发测试', () => {
    it('应该正确转发 ref 到 button 元素', () => {
      const ref = createRef();
      render(<Button ref={ref}>Hi</Button>);

      expect(ref.current).toBeTruthy();
      expect(ref.current.tagName).toBe('BUTTON');
    });

    it('visible 为 false 时不应该转发 ref', () => {
      const ref = createRef();
      render(<Button ref={ref} visible={false}>
        Hi
      </Button>);

      expect(ref.current).toBeNull();
    });

    it('visible 返回 false 时不应该转发 ref', () => {
      const ref = createRef();
      render(<Button ref={ref} visible={() => false}>
        Hi
      </Button>);

      expect(ref.current).toBeNull();
    });
  });
});
