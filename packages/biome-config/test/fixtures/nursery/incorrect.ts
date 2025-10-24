/**
 * Nursery rules violation examples.
 *
 * Demonstrates violations of nursery rules:
 * - noFloatingPromises: Unhandled promises
 * - noMisusedPromises: Promises in wrong contexts
 */

/**
 * ❌ Incorrect: Floating promise - not awaited, caught, or returned
 */
function badFetchNoAwait() {
  fetch('/api/data'); // Error: Promise is floating
}

/**
 * ❌ Incorrect: Floating promise in async function
 */
async function badAsyncNoAwait() {
  fetch('/api/users'); // Error: Promise not handled
  Promise.resolve('done'); // Error: Promise not handled
}

/**
 * ❌ Incorrect: Promise misused in conditional
 */
async function badConditionalPromise(userId: string) {
  if (fetch(`/api/users/${userId}`)) {
    // Error: Promise used directly in condition
    console.log('User exists');
  }
}

/**
 * ❌ Incorrect: Promise in logical expression
 */
function badLogicalPromise() {
  const result = fetch('/api/check') || 'default'; // Error: Promise in || expression

  return result;
}

export {
  badAsyncNoAwait,
  badConditionalPromise,
  badFetchNoAwait,
  badLogicalPromise
};
