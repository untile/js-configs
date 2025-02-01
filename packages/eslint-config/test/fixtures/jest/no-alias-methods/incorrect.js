// Rule: jest/no-alias-methods incorrect usage

// Example 1: Incorrect usage of alias methods with expect
describe('no-alias-methods', () => {
  test('should use an alias for the method', () => {
    const obj = {
      method() {
        return 'Hello, World!';
      }
    };

    const methodAlias = obj.method;
    expect(methodAlias).toBeCalled();
  });
});
