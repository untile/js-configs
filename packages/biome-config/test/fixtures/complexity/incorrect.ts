/**
 * Complexity rules violation examples.
 *
 * Demonstrates complexity rule violations:
 * - noExcessiveCognitiveComplexity: Functions over threshold (>15)
 * - noUselessStringConcat: Unnecessary string concatenation
 */

/**
 * ❌ Incorrect: Excessive cognitive complexity (score: 24)
 * This function has too many nested conditions and loops
 */
function badHighComplexity(
  user: { age: number; country: string; id: string; verified: boolean },
  orders: Array<{ amount: number; items: string[]; status: string }>,
  settings: { notifications: boolean; premium: boolean }
): string {
  if (!user) {
    return 'No user';
  }

  if (!user.verified) {
    if (user.age < 18) {
      return 'Underage unverified';
    }

    if (user.country === 'US') {
      return 'US unverified';
    }
    if (user.country === 'UK') {
      return 'UK unverified';
    }
    return 'Other unverified';
  }

  if (orders.length > 0) {
    for (const order of orders) {
      if (order.status === 'pending') {
        if (order.amount > 1000) {
          if (settings.premium) {
            return 'Premium large order';
          }
          return 'Standard large order';
        }
        if (order.amount > 500) {
          if (settings.notifications) {
            return 'Medium order with notifications';
          }
        } else {
          for (const item of order.items) {
            if (item === 'electronics') {
              if (user.age > 21) {
                return 'Electronics buyer';
              }
            }
          }
        }
      } else if (order.status === 'completed') {
        if (order.amount > 2000) {
          return 'High value completed';
        }
      }
    }
  }

  return 'Default';
}

/**
 * ❌ Incorrect: Useless string concatenation of literals
 * These strings should be combined into single literals
 */
const badConcatSimple = 'Hello World';

/**
 * ❌ Incorrect: Concatenating string literals that could be one
 */
const badConcatLiterals = 'https://example.com';

/**
 * ❌ Incorrect: Multiple literal concatenations
 */
function badConcatInFunction(): string {
  return 'First Second Third';
}

/**
 * ❌ Incorrect: Concatenating literals in template
 */
const badConcatUrl = 'http://api.example.com/users';

/**
 * ❌ Incorrect: Mixed literal concatenation
 */
const badConcatMixed = 'Error: Something went wrong!';

export { badConcatInFunction, badConcatLiterals, badConcatMixed, badConcatSimple, badConcatUrl, badHighComplexity };
