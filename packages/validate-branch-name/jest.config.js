/** @type {import('jest').Config} */

/**
 * Export jest configuration.
 */

module.exports = {
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  testEnvironment: 'node',
  testRegex: '(test/.*\\.test.js)$'
};
