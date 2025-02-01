// Rule: jest/valid-expect-in-promise correct usage

// Example 1: Using expect in a Promise with return
describe('jest/valid-expect-in-promise', () => {
  test('should handle expect in promise correctly', () => {
    return Promise.resolve(true).then(value => {
      expect(value).toBe(true);

      return value;
    });
  });
});
