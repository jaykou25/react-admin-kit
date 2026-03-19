module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  moduleNameMapper: {
    '^rak/(.*)$': '<rootDir>/../react-admin-kit/src/$1',
    '\\.(css)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(tsx?)$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      },
    ],
  },
  testMatch: ['**/*.test.tsx'],
  collectCoverageFrom: [
    'examples/**/*.{ts,tsx}',
    '!examples/**/*.test.{ts,tsx}',
    '!examples/**/solution/**',
    '!examples/**/*.css',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
