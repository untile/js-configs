// Rule: jest/no-deprecated-functions incorrect usage

describe('no-deprecated-functions', () => {
  // Example 1: Incorrect usage of deprecated function jest.addMatchers
  test('should use jest.addMatchers instead of the recommended approach', () => {
    jest.addMatchers({
      toBeEven(received) {
        const pass = received % 2 === 0;

        return {
          message: () => `expected ${received} to be even`,
          pass
        };
      }
    });

    expect(2).toBeEven();
  });
});

