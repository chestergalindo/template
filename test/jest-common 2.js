/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  rootDir: path.join(__dirname, '..'),
  moduleNameMapper: {
    '\\module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./mock-test')
  }
};
