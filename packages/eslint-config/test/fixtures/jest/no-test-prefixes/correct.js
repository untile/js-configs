// Rule: jest/no-test-prefixes correct usage

// Example 1: Using proper test function names without prefixes
describe('jest/no-test-prefixes', () => {
  test('should execute test without prefix', () => {
    expect(true).toBe(true);
  });
});
