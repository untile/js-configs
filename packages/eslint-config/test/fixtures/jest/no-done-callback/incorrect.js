// Rule: jest/no-done-callback incorrect usage

describe('no-done-callback', () => {
  // Example 1: Incorrect usage of done callback
  test('should use done callback incorrectly', done => {
    setTimeout(() => {
      expect(true).toBe(true);
      done();
    }, 100);
  });

  // Example 2: Incorrect usage of done callback with async function
  test('should use async function with done callback', done => {
    const fetchData = async () => {
      const result = await Promise.resolve(true);
      expect(result).toBe(true);
      done();
    };

    fetchData();
  });
});
