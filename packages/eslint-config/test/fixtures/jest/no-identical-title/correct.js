// Rule: jest/no-identical-title correct usage

// Example 1: Correct usage of unique test titles within a describe block
describe('jest/no-identical-title', () => {
  test('should validate user input', () => {
    expect(true).toBe(true);
  });

  test('should process user data', () => {
    expect(true).toBe(true);
  });
});
