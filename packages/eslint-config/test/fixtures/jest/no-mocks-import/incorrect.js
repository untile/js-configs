/* eslint-disable n/no-missing-require */
// Rule: jest/no-mocks-import incorrect usage

// Example 1: Incorrectly importing from __mocks__ directory
describe('jest/no-mocks-import', () => {
  test('should not import from __mocks__ directory', () => {
    const mockModule = require('./__mocks__/mockModule');
    expect(mockModule.someFunction()).toBe('mocked value');
  });
});
