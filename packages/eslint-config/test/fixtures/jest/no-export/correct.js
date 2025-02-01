// Rule: jest/no-export correct usage

describe('jest/no-export', () => {
  // Example 1: Correct usage of a test without exporting
  test('should not export the test function', () => {
    expect(true).toBe(true);
  });

  // Example 2: Correct usage of a test with a local variable
  test('should use local variables without exporting', () => {
    const localVar = 'test';
    expect(localVar).toBe('test');
  });
});
