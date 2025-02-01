// Rule: jest/no-standalone-expect correct usage

// Example 1: Expect statements are properly wrapped in test blocks
describe('jest/no-standalone-expect', () => {
  test('should contain expect within test block', () => {
    expect(true).toBe(true);
  });
});
