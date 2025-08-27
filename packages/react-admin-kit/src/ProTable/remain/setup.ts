/**
 * ProTable 测试环境设置
 */
import '@testing-library/jest-dom';
import { mockDOMAPIs } from './test-utils';

// 设置测试环境
beforeAll(() => {
  // Mock DOM APIs
  mockDOMAPIs();

  // Mock console methods to reduce noise in tests
  const originalError = console.error;
  const originalWarn = console.warn;

  console.error = (...args: any[]) => {
    // 忽略一些已知的警告
    const message = args[0];
    if (
      typeof message === 'string' &&
      (message.includes('Warning: ReactDOM.render is deprecated') ||
        message.includes('Warning: findDOMNode is deprecated') ||
        message.includes('act(...) is not supported'))
    ) {
      return;
    }
    originalError.apply(console, args);
  };

  console.warn = (...args: any[]) => {
    const message = args[0];
    if (
      typeof message === 'string' &&
      (message.includes('componentWillReceiveProps has been renamed') ||
        message.includes('componentWillMount has been renamed'))
    ) {
      return;
    }
    originalWarn.apply(console, args);
  };
});

// 每个测试后清理
afterEach(() => {
  // 清理定时器
  jest.clearAllTimers();

  // 清理 DOM
  document.body.innerHTML = '';

  // 清理事件监听器
  const events = ['@proTableReload'];
  events.forEach((event) => {
    const listeners = (document as any)._listeners?.[event] || [];
    listeners.forEach((listener: any) => {
      document.removeEventListener(event, listener);
    });
  });
});

// 全局测试配置
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn((cb) => setTimeout(cb, 16));
global.cancelAnimationFrame = jest.fn((id) => clearTimeout(id));

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

// Mock getBoundingClientRect
Element.prototype.getBoundingClientRect = jest.fn(() => ({
  width: 100,
  height: 100,
  top: 0,
  left: 0,
  bottom: 100,
  right: 100,
  x: 0,
  y: 0,
  toJSON: jest.fn(),
}));

// Mock getComputedStyle
global.getComputedStyle = jest.fn(() => ({
  getPropertyValue: jest.fn(() => ''),
  display: 'block',
  visibility: 'visible',
  opacity: '1',
}));

// 设置默认的测试超时时间
jest.setTimeout(10000);
