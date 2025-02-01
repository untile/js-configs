// Rule: jest/no-conditional-expect correct usage

describe('no-conditional-expect', () => {
  // Example 1: Correct usage of expect without conditional statements
  test('should return true when the condition is met', () => {
    expect(true).toBe(true);
  });

  // Example 2: Correct usage of expect with a direct assertion
  test('should return the correct sum', () => {
    expect(1 + 1).toBe(2);
  });
});
