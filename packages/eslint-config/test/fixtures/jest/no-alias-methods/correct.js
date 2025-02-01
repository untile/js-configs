// Rule: jest/no-alias-methods correct usage

describe('no-alias-methods', () => {
  // Example 1: Correct usage of alias methods with a direct call
  test('should call the method directly without aliasing', () => {
    const obj = {
      method() {
        return 'Hello, World!';
      }
    };

    expect(obj.method()).toBe('Hello, World!');
  });

  // Example 2: Correct usage of alias methods with a proper reference
  test('should reference the method correctly without aliasing', () => {
    const obj = {
      method() {
        return 'Goodbye, World!';
      }
    };

    const methodReference = obj.method;
    expect(methodReference()).toBe('Goodbye, World!');
  });
});

