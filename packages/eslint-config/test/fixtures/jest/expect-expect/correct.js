// Rule: jest/expect-expect correct usage

describe('expect-expect', () => {
  // Example 1: Correct usage of expect with a single assertion
  test('should return true when the condition is met', () => {
    expect(true).toBe(true);
  });

  // Example 2: Correct usage of expect with multiple assertions
  test('should return the correct values', () => {
    expect(1 + 1).toBe(2);
    expect('hello').toBe('hello');
  });
});
