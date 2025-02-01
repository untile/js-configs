// Rule: require-await correct usage

// Example 1: Using async function with await

const mockPromise = new Promise(resolve => setTimeout(() => resolve('hey'), 1000));

async function fetchData() {
  const response = await mockPromise;

  return response;
}

noop(fetchData());
