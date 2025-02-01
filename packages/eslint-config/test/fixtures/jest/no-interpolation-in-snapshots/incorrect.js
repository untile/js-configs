// Rule: jest/no-interpolation-in-snapshots incorrect usage

// Example 1: Incorrect usage of string interpolation in snapshots
describe('jest/no-interpolation-in-snapshots', () => {
  test('should not use template literals in snapshots', () => {
    const name = 'John';
    expect(`Hello ${name}`).toMatchInlineSnapshot(`Hello ${name}`);
  });
});
