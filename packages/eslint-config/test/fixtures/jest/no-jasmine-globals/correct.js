// Rule: jest/no-jasmine-globals correct usage

// Example 1: Using Jest globals instead of Jasmine globals
describe('jest/no-jasmine-globals', () => {
  test('should use Jest expect instead of jasmine.expect', () => {
    expect(true).toBe(true);
  });
});
