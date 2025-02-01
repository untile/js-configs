// Rule: jest/no-deprecated-functions correct usage

describe('no-deprecated-functions', () => {
  // Example 1: Correct usage of `test` instead of deprecated function `it`
  test('should use test function correctly', () => {
    expect(true).toBe(true);
  });

  // Example 2: Correct usage of `test` with a valid assertion
  test('should validate the sum of two numbers', () => {
    expect(2 + 2).toBe(4);
  });
});
