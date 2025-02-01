// Rule: jest/no-commented-out-tests correct usage

describe('no-commented-out-tests', () => {
  // Example 1: Correct usage of tests without commented-out code
  test('should return true when the condition is met', () => {
    expect(true).toBe(true);
  });

  // Example 2: Correct usage of tests with a valid assertion
  test('should return the correct sum', () => {
    expect(1 + 1).toBe(2);
  });
});
