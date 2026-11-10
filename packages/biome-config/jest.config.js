/** @type {import('jest').Config} */

/**
 * Export jest configuration.
 */

module.exports = {
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  modulePathIgnorePatterns: ['<rootDir>/.fixtures-run/', '<rootDir>/test/fixtures/'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/test/fixtures/', '/.fixtures-run/'],
  testRegex: '(test/index\\.test\\.ts)$',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }]
  }
};
