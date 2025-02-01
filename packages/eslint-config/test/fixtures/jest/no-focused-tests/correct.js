// Rule: jest/no-focused-tests correct usage

// Example 1: Correct usage of focused tests with test.only
describe('jest/no-focused-tests', () => {
  test('this should not use test.only to focus tests', () => {
    expect(true).toBe(true);
  });
});
