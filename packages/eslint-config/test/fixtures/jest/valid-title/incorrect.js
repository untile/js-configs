// Rule: jest/valid-title incorrect usage

// Example 1: Using invalid characters in test title
describe('jest/valid-title', () => {
  test('', () => {
    expect(true).toBe(true);
  });
});
