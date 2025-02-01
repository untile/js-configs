// Rule: jest/expect-expect incorrect usage

describe('expect-expect', () => {
  // Example 1: Incorrect usage of expect with no assertions
  test('should not have any assertions', () => {
    // No expect statements here
  });

  // Example 2: Incorrect usage of expect with multiple assertions in a single test
  test('should return incorrect values', () => {
    expect(1 + 1).toBe(3);
    expect('hello').toBe('world');
  });
});

