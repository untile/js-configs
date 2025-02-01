// Rule: jest/no-jasmine-globals incorrect usage

// Example 1: Incorrect usage of Jasmine globals instead of Jest globals
describe('jest/no-jasmine-globals', () => {
  test('should not use Jasmine globals', () => {
    jasmine.expect(true).toBe(true);
    expect(true).toBe(true);
  });
});
