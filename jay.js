const path = require('path');

const rak = path.resolve(
  __dirname,
  './packages/react-admin-kit/src/Button/demos/index.tsx',
);

const dep = path.resolve(rak, '..', './index.less');
console.log('rak', rak);
console.log('dep', dep);
