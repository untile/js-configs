// Rule: jest/no-standalone-expect incorrect usage

// Example 1: Expect statement outside of test block
describe('jest/no-standalone-expect', () => {
  expect(true).toBe(true);
});
