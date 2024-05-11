// jest.config.js
/** @type {import('jest').Config} */
module.exports = {
  setupFiles: ['./setup.js'],
  transformIgnorePatterns: ['node_modules/(?!(lodash-es|uuid)/)'],
  moduleNameMapper: {
    'react-admin-kit': '<rootDir>/src/index.ts',
    '.(css|less)$': 'identity-obj-proxy',
  },
};
