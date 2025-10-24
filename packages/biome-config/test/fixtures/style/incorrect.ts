/**
 * Style rules violation examples.
 *
 * Demonstrates style rule violations:
 * - useBlockStatements: Missing braces
 * - useDefaultSwitchClause: Switch without default
 * - noNestedTernary: Nested ternaries
 * - useForOf: Traditional for loops
 * - useSingleVarDeclarator: Multiple vars in one statement
 * - useSelfClosingElements: Non-self-closing empty JSX
 * - noUselessElse: Redundant else blocks
 * - useFragmentSyntax: Verbose React.Fragment
 */

import type React from 'react';
import type { Fragment } from 'react';

/**
 * ❌ Incorrect: Missing braces around if statement
 */
function badNoBraces(value: number): number {
  if (value > 0) return value * 2;

  return 0;
}

/**
 * ❌ Incorrect: Missing braces around else
 */
function badNoBracesElse(value: number): string {
  if (value > 0) {
    return 'positive';
  }return 'not positive';
}

/**
 * ❌ Incorrect: Switch without default clause
 */
function badNoDefault(color: string): string {
  switch (color) {
    case 'r':
      return 'red';
    case 'g':
      return 'green';
    case 'b':
      return 'blue';
  }

  return 'unknown';
}

/**
 * ❌ Incorrect: Nested ternary operators
 */
function badNestedTernary(score: number): string {
  return score > 90 ? 'A' : score > 80 ? 'B' : score > 70 ? 'C' : 'F';
}

/**
 * ❌ Incorrect: Another nested ternary
 */
function badComplexTernary(isActive: boolean, isPremium: boolean): string {
  return isActive ? (isPremium ? 'premium' : 'standard') : 'inactive';
}

/**
 * ❌ Incorrect: Traditional for loop instead of for...of
 */
function badForLoop(numbers: number[]): number {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

/**
 * ❌ Incorrect: Traditional for loop with array access
 */
function badForLoopArray(items: string[]): string[] {
  const results = [];

  for (let i = 0; i < items.length; i++) {
    results.push(items[i].toUpperCase());
  }

  return results;
}

/**
 * ❌ Incorrect: Multiple variable declarations in one statement
 */
function badMultipleVars(): void {
  const x = 1,
    y = 2,
    z = 3;

  console.log(x, y, z);
}

/**
 * ❌ Incorrect: Multiple let declarations
 */
function badMultipleLets(): void {
  const a = 'foo',
    b = 'bar',
    c = 'baz';

  console.log(a, b, c);
}

/**
 * ❌ Incorrect: JSX element not self-closing
 */
function badNotSelfClosing(): React.JSX.Element {
  return (
    <div>
      <img src='/logo.png' alt='Logo'></img>
      <br></br>
      <input type='text'></input>
    </div>
  );
}

/**
 * ❌ Incorrect: Useless else after return
 */
function badUselessElse(n: number): string {
  if (n > 10) {
    return 'high';
  }
    return 'low';
}

/**
 * ❌ Incorrect: Useless else after early return
 */
function badUselessElseEarly(user: { name: string } | null): boolean {
  if (!user) {
    return false;
  }
    return Boolean(user.name);
}

/**
 * ❌ Incorrect: Verbose React.Fragment instead of shorthand
 */
function badVerboseFragment({ items }: { items: string[] }): React.JSX.Element {
  return (
    <Fragment>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Fragment>
  );
}

/**
 * ❌ Incorrect: React.Fragment for multiple elements
 */
function badFragmentLong(): React.JSX.Element {
  return (
    <Fragment>
      <h1>Title</h1>
      <p>Description</p>
    </Fragment>
  );
}

/**
 * ❌ Incorrect: Implicit truthiness check for array length (useExplicitLengthCheck).
 */
function hasItemsImplicit(arr: unknown[]): boolean {
  if (arr.length) {
    return true;
  }

  return false;
}

/**
 * ❌ Incorrect: Negation for empty check.
 */
function isEmptyImplicit(arr: unknown[]): boolean {
  return !arr.length;
}

/**
 * ❌ Incorrect: Boolean conversion.
 */
function hasSomething(str: string): boolean {
  return Boolean(str.length);
}

/**
 * ❌ Incorrect: Using == 0 instead of === 0.
 */
function checkEmpty(arr: unknown[]): boolean {
  return arr.length == 0;
}

/**
 * ❌ Incorrect: Ternary with implicit check.
 */
function getMessage(arr: unknown[]): string {
  return arr.length ? 'Has items' : 'Empty';
}

/**
 * ❌ Incorrect: Double negation.
 */
function isNotEmpty(arr: unknown[]): boolean {
  return !!arr.length;
}

/**
 * ❌ Incorrect: Logical OR with implicit check.
 */
function getItems(arr: unknown[]): unknown[] | boolean {
  return arr.length && arr;
}

/**
 * ❌ Incorrect: Set size implicit check.
 */
function hasEntriesImplicit(set: Set<unknown>): boolean {
  if (set.size) {
    return true;
  }

  return false;
}

/**
 * ❌ Incorrect: Map size negation check.
 */
function isMapEmpty(map: Map<unknown, unknown>): boolean {
  return !map.size;
}

export {
  badComplexTernary,
  badForLoop,
  badForLoopArray,
  badFragmentLong,
  badMultipleLets,
  badMultipleVars,
  badNestedTernary,
  badNoBraces,
  badNoBracesElse,
  badNoDefault,
  badNotSelfClosing,
  badUselessElse,
  badUselessElseEarly,
  badVerboseFragment,
  checkEmpty,
  getItems,
  getMessage,
  hasEntriesImplicit,
  hasItemsImplicit,
  hasSomething,
  isEmptyImplicit,
  isMapEmpty,
  isNotEmpty
};
