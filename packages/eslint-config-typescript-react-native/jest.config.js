/** @type {import('jest').Config} */

/**
 * Export jest configuration.
 */

module.exports = {
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(test/.*\\.test.(jsx|js|ts|tsx))$',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }]
  }
};
