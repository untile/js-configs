// Rule: jest/no-done-callback correct usage

describe('no-done-callback', () => {
  // Example 1: Correct usage of async test without done callback
  test('should return a resolved promise', async () => {
    const result = await Promise.resolve(true);
    expect(result).toBe(true);
  });
});
