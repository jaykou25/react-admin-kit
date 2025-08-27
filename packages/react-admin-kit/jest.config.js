// jest.config.js
/** @type {import('jest').Config} */
module.exports = {
  setupFiles: ['./setup.js'],
  transformIgnorePatterns: [
    // 'node_modules/(?!(lodash-es|uuid)/)', // for yarn or npm
    'node_modules/.pnpm/(?!(lodash-es|uuid)@)', // for pnpm
  ],
  moduleNameMapper: {
    'react-admin-kit': '<rootDir>/src/index.ts',
    '@ant-design/pro-form/es/components/SchemaForm/valueType/index':
      '@ant-design/pro-form/lib/components/SchemaForm/valueType/index',
    '.(css|less)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/demos/**/*', // 排除 demos
    '!src/**/remain/**/*', // 排除 remain
    '!src/**/cases/**/*', // 排除 cases
    '!src/**/*.d.ts', // 排除类型声明文件
    '!src/**/types.ts', // 排除类型声明文件
    '!src/**/genItems.tsx', // 排除辅助文件
    '!src/index.ts', // 排除入口文件
    '!src/setupTests.ts', // 排除测试工具文件
    '!src/utils/setupGlobalErrorHandling.ts',
    '!src/locale/*',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 85,
      lines: 90,
      statements: 90,
    },
  },
  coverageReporters: ['html', 'text', 'lcov'],
};
