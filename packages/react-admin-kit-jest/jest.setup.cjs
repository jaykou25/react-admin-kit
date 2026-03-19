// 导入 @testing-library/jest-dom 的自定义 matchers
require('@testing-library/jest-dom');

// 全局测试配置
global.console = {
  ...console,
  // 在测试中抑制某些日志输出
  log: jest.fn(),
  debug: jest.fn(),
};

if (typeof window !== 'undefined') {
  if (!window.ResizeObserver) {
    window.ResizeObserver = class ResizeObserver {
      constructor() {}
      disconnect() {}
      observe() {}
      unobserve() {}
    };
  }
}
