/** @type {import('jest').Config} */

/**
 * Export jest configuration.
 */

module.exports = {
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/test/fixtures/'],
  testRegex: '(test/index\\.test\\.ts)$',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }]
  }
};
