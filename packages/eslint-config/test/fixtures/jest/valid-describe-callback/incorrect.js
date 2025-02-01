/* eslint-disable require-await */

// Rule: jest/valid-describe-callback incorrect usage

// Example 1: Using an async function callback for describe which is not allowed
describe('jest/valid-describe-callback', async () => {
  test('should not use async callback', () => {
    expect(true).toBe(true);
  });
});

