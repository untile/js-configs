/* eslint-disable jest/no-disabled-tests */
// Rule: jest/no-test-prefixes incorrect usage

// Example 1: Using test prefixes which are not allowed
describe('jest/no-test-prefixes', () => {
  xit('should not use xit', () => {
    expect(true).toBe(true);
  });
});
