// Rule: jest/no-conditional-expect incorrect usage

describe('no-conditional-expect', () => {
  // Example 1: Incorrect usage of expect within a conditional statement
  test('should use expect inside an if statement', () => {
    const condition = true;

    if (condition) {
      expect(true).toBe(true);
    }
  });
});
