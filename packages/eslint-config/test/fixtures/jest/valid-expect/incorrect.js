// Rule: jest/valid-expect incorrect usage

// Example 1: Using expect without a matcher
describe('jest/valid-expect', () => {
  test('should not use expect without matcher', () => {
    expect(true, false);
  });
});
