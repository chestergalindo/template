/* eslint-disable no-undef */
module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFromm: ['**/src/**/*.js'],
  coverageThresHold: {
    global: {
      statement: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  projects: ['./test/jest-client.js', './test/jest-lint.js']
};
