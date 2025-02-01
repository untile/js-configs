// Rule: jest/no-disabled-tests correct usage

describe('no-disabled-tests', () => {
  // Example 1: Test not disabled
  test('should use test function correctly', () => {
    expect(true).toBe(true);
  });
});
