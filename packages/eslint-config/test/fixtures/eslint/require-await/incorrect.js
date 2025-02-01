// Rule: require-await incorrect usage

// Example 1: Not using await in an async function

async function fetchData() {
  const response = 'hey';

  return response;
}

noop(fetchData());
