// Rule: jest/no-mocks-import correct usage

// Example 1: Using manual mock without importing from __mocks__ directory
describe('jest/no-mocks-import', () => {
  test('should use manual mock correctly', () => {
    const mockFn = jest.fn();
    mockFn.mockReturnValue(42);
    expect(mockFn()).toBe(42);
  });
});
