// Rule: jest/no-disabled-tests incorrect usage

describe('no-disabled-tests', () => {
  // Example 1: Incorrect usage of disabled test with `test.skip`
  test.skip('should not run this test', () => {
    expect(true).toBe(true);
  });

  // Example 2: Incorrect usage of disabled test with `describe.skip`
  describe.skip('skipped group of tests', () => {
    test('should not run this test either', () => {
      expect(false).toBe(true);
    });
  });
});
