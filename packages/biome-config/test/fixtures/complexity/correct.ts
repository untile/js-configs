/**
 * Complexity rules correct examples.
 *
 * Demonstrates clean complexity patterns:
 * - noExcessiveCognitiveComplexity: Functions under threshold (15)
 * - noUselessStringConcat: No unnecessary string concatenation
 */

/**
 * ✅ Correct: Simple function with low complexity (score: 2)
 */
function validateEmail(email: string): boolean {
  if (!email) {
    return false;
  }

  if (!email.includes('@')) {
    return false;
  }

  return true;
}

/**
 * ✅ Correct: Moderate complexity but under threshold (score: 7)
 */
function processOrder(order: { items: string[]; status: string; total: number }): string {
  if (!order) {
    return 'Invalid order';
  }

  if (order.items.length === 0) {
    return 'Empty order';
  }

  if (order.status === 'pending') {
    if (order.total > 1000) {
      return 'Pending review';
    }

    return 'Processing';
  }

  if (order.status === 'completed') {
    return 'Shipped';
  }

  return 'Unknown status';
}

/**
 * ✅ Correct: Multiple conditions with clear structure (score: 8)
 */
function getUserPermissions(role: string, isVerified: boolean): string[] {
  const permissions: string[] = ['read'];

  if (role === 'admin') {
    permissions.push('write', 'delete', 'manage');

    if (isVerified) {
      permissions.push('system');
    }
  } else if (role === 'moderator') {
    permissions.push('write');

    if (isVerified) {
      permissions.push('moderate');
    }
  } else if (role === 'user' && isVerified) {
    permissions.push('comment');
  }

  return permissions;
}

/**
 * ✅ Correct: No useless string concatenation
 */
function getWelcomeMessage(name: string): string {
  return `Welcome, ${name}!`;
}

/**
 * ✅ Correct: Meaningful concatenation with variables
 */
function buildUrl(base: string, path: string, query: string): string {
  return base + path + '?' + query;
}

/**
 * ✅ Correct: Template literals for complex strings
 */
function formatAddress(street: string, city: string, zip: string): string {
  return `${street}, ${city} ${zip}`;
}

/**
 * ✅ Correct: Single string literal
 */
const greeting = 'Hello World';

/**
 * ✅ Correct: Concatenation with dynamic values
 */
function generateId(prefix: string, timestamp: number): string {
  return prefix + '_' + timestamp.toString();
}

export {
  buildUrl,
  formatAddress,
  generateId,
  getUserPermissions,
  getWelcomeMessage,
  greeting,
  processOrder,
  validateEmail
};
