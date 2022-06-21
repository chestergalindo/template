/* eslint-disable no-undef */
module.exports = {
  // NodeEnvironment: ,

  transformIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '\\.css': require.resolve('./src/test/style-mock.js'),
  },
  testEnvironment: 'jest-environment-jsdom',
};
