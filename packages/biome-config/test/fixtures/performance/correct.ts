/**
 * Performance correct examples.
 *
 * Demonstrates optimal performance patterns that should pass all performance rules.
 */

/**
 * ✅ Correct: Use Promise.all instead of await in loop.
 */

async function fetchDataOptimally(urls: string[]) {
  const promises = urls.map(url => fetch(url));
  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map(res => res.json()));

  return data;
}

/**
 * ✅ Correct: Use Object.assign or direct assignment instead of accumulating spread.
 */

function mergeOptimally(items: Array<{ key: string; value: string }>) {
  // Option 1: Object.assign
  const result = Object.assign(
    {},
    ...items.map(item => ({ [item.key]: item.value }))
  );

  return result;
}

function mergeOptimallyAlt(items: Array<{ key: string; value: string }>) {
  // Option 2: Direct assignment
  const result: Record<string, string> = {};

  for (const item of items) {
    result[item.key] = item.value;
  }

  return result;
}

/**
 * ✅ Correct: Export only what's needed, not everything.
 */

export const utilityFunction = () => {
  return 'This is a specific export';
};

export const anotherUtility = () => {
  return 'Another specific export';
};

/**
 * ✅ Correct: Define regex at top level for reuse.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[\d\s-()]+$/;

function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

function validatePhone(phone: string): boolean {
  return PHONE_REGEX.test(phone);
}

/**
 * ✅ Correct: Batch operations efficiently - process all batches in parallel.
 */

async function processItemsInBatches<T>(
  items: T[],
  batchSize: number,
  processor: (batch: T[]) => Promise<void>
) {
  const batches: T[][] = [];

  for (let i = 0; i < items.length; i += batchSize) {
    batches.push(items.slice(i, i + batchSize));
  }

  // Process all batches in parallel
  await Promise.all(batches.map(batch => processor(batch)));
}

export {
  fetchDataOptimally,
  mergeOptimally,
  mergeOptimallyAlt,
  validateEmail,
  validatePhone,
  processItemsInBatches
};
