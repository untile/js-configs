/* eslint-disable promise/catch-or-return */
// Rule: jest/valid-expect-in-promise incorrect usage

// Example 1: Missing return statement in Promise test
describe('jest/valid-expect-in-promise', () => {
  test('should fail without returning the promise', () => {
    Promise.resolve(true).then(value => {
      expect(value).toBe(true);

      return value;
    });
  });
});
