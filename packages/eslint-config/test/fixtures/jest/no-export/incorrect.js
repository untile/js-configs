// Rule: jest/no-export incorrect usage

// Example 1: Incorrect usage of exporting a test
describe('jest/no-export', () => {
  test('should export the test function', () => {
    module.exports = expect(true).toBe(true);
  });
});
