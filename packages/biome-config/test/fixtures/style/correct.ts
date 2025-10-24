/**
 * Style rules correct examples.
 *
 * Demonstrates clean style patterns:
 * - useBlockStatements: Always use braces
 * - useDefaultSwitchClause: Switch has default
 * - noNestedTernary: No nested ternaries
 * - useForOf: Modern loop syntax
 * - useSingleVarDeclarator: One variable per declaration
 * - useSelfClosingElements: Self-closing JSX tags
 * - noUselessElse: No redundant else blocks
 * - useFragmentSyntax: Shorthand fragment syntax
 */

import type React from 'react';

/**
 * ✅ Correct: Always use block statements with braces
 */
function processWithBraces(value: number): number {
  if (value > 0) {
    return value * 2;
  }

  return 0;
}

/**
 * ✅ Correct: Switch statement with default clause
 */
function getColorName(color: string): string {
  switch (color) {
    case 'r':
      return 'red';
    case 'g':
      return 'green';
    case 'b':
      return 'blue';
    default:
      return 'unknown';
  }
}

/**
 * ✅ Correct: Simple ternary, no nesting
 */
function formatStatus(isActive: boolean): string {
  return isActive ? 'Active' : 'Inactive';
}

/**
 * ✅ Correct: Separate ternaries when multiple conditions needed
 */
function getUserRole(isAdmin: boolean, isModerator: boolean): string {
  if (isAdmin) {
    return 'admin';
  }

  if (isModerator) {
    return 'moderator';
  }

  return 'user';
}

/**
 * ✅ Correct: Use for...of loops instead of traditional for loops
 */
function sumArray(numbers: number[]): number {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

/**
 * ✅ Correct: Use for...of with entries when index is needed
 */
function findFirstNegative(numbers: number[]): number {
  for (const [index, num] of numbers.entries()) {
    if (num < 0) {
      return index;
    }
  }

  return -1;
}

/**
 * ✅ Correct: Single variable per declaration
 */
function calculateDimensions(width: number, height: number) {
  const area = width * height;
  const perimeter = 2 * (width + height);
  const aspectRatio = width / height;

  return { area, aspectRatio, perimeter };
}

/**
 * ✅ Correct: Self-closing JSX elements without children
 */
function ProfileImage(): React.JSX.Element {
  return (
    <div>
      <img alt='Profile' src='/avatar.png' />
      <br />
      <hr />
    </div>
  );
}

/**
 * ✅ Correct: No useless else after return
 */
function checkValue(n: number): string {
  if (n > 10) {
    return 'high';
  }

  if (n > 5) {
    return 'medium';
  }

  return 'low';
}

/**
 * ✅ Correct: Early return pattern without else
 */
function validateUser(user: { name: string }): boolean {
  if (!user) {
    return false;
  }

  if (!user.name) {
    return false;
  }

  return true;
}

/**
 * ✅ Correct: Shorthand fragment syntax
 */
function ListItems({ items }: { items: string[] }): React.JSX.Element {
  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
}

/**
 * ✅ Correct: Shorthand fragment for multiple elements
 */
function Header(): React.JSX.Element {
  return (
    <>
      <h1>Welcome</h1>
      <p>This is the header</p>
    </>
  );
}

/**
 * ✅ Correct: Explicit comparison for empty array (useExplicitLengthCheck).
 */
function isEmptyArray(arr: unknown[]): boolean {
  return arr.length === 0;
}

/**
 * ✅ Correct: Explicit comparison for non-empty array.
 */
function hasItems(arr: unknown[]): boolean {
  return arr.length > 0;
}

/**
 * ✅ Correct: Explicit comparison for string length.
 */
function isEmptyString(str: string): boolean {
  return str.length === 0;
}

/**
 * ✅ Correct: Explicit comparison with specific length.
 */
function hasSingleItem(arr: unknown[]): boolean {
  return arr.length === 1;
}

/**
 * ✅ Correct: Explicit comparison for Set size.
 */
function isEmptySet(set: Set<unknown>): boolean {
  return set.size === 0;
}

/**
 * ✅ Correct: Explicit comparison for Map size.
 */
function hasEntries(map: Map<unknown, unknown>): boolean {
  return map.size > 0;
}

/**
 * ✅ Correct: Explicit comparison for buffer byteLength.
 */
function isEmptyBuffer(buffer: ArrayBuffer): boolean {
  return buffer.byteLength === 0;
}

/**
 * ✅ Correct: Greater than comparison.
 */
function hasMultipleItems(arr: unknown[]): boolean {
  return arr.length > 1;
}

export {
  Header,
  ListItems,
  ProfileImage,
  calculateDimensions,
  checkValue,
  findFirstNegative,
  formatStatus,
  getColorName,
  getUserRole,
  hasEntries,
  hasItems,
  hasMultipleItems,
  hasSingleItem,
  isEmptyArray,
  isEmptyBuffer,
  isEmptySet,
  isEmptyString,
  processWithBraces,
  sumArray,
  validateUser
};
