/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

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
});
