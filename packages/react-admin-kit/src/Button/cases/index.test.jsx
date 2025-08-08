/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

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
});
