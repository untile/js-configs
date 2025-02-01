// Rule: jest/no-identical-title incorrect usage

// Example 1: Incorrect usage of identical test titles within a describe block
describe('jest/no-identical-title', () => {
  test('should validate data', () => {
    expect(true).toBe(true);
  });

  test('should validate data', () => {
    expect(false).toBe(false);
  });
});
