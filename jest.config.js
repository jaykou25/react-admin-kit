// jest.config.js
/** @type {import('jest').Config} */
module.exports = {
  setupFiles: ['./setup.js'],
  // verbose: false,
  // silent: false,
  transformIgnorePatterns: ['node_modules/(?!(lodash-es|uuid)/)'],
  moduleNameMapper: {
    'react-admin-kit': '<rootDir>/src/index.ts',
    '@ant-design/pro-form/es/components/SchemaForm/valueType/index':
      '@ant-design/pro-form/lib/components/SchemaForm/valueType/index',
    '.(css|less)$': 'identity-obj-proxy',
  },
};
