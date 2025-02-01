// Rule: jest/no-focused-tests incorrect usage

// Example 1: Incorrect usage of focused test with only
describe.only('foo', () => {
  test('it example 1', () => {
    expect(true).toBe(true);
  });
});
