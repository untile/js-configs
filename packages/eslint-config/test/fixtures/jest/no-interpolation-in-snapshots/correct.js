// Rule: jest/no-interpolation-in-snapshots correct usage

// Example 1: Correct usage of snapshots without string interpolation
describe('jest/no-interpolation-in-snapshots', () => {
  test('should not use template literals in snapshots', () => {
    expect(`Hello John`).toMatchInlineSnapshot('Hello john');
  });
});
