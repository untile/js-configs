/**
 * Suspicious rules violation examples.
 *
 * Demonstrates violations of suspicious rules:
 * - noEmptyBlockStatements: Empty blocks without comments
 */

/**
 * ❌ Incorrect: Empty if block
 */
function badEmptyIf(value: number): void {
  if (value > 0) {
  }
}

/**
 * ❌ Incorrect: Empty else block
 */
function badEmptyElse(value: number): void {
  if (value > 0) {
    console.log('positive');
  } else {
  }
}

/**
 * ❌ Incorrect: Empty try-catch blocks
 */
function badEmptyCatch(): void {
  try {
  } catch (error) {
    console.error(error);
  }
}

/**
 * ❌ Incorrect: Empty catch block (swallowing errors)
 */
function badSwallowError(json: string): unknown {
  try {
    return JSON.parse(json);
  } catch (error) {}

  return null;
}

/**
 * ❌ Incorrect: Empty finally block
 */
function badEmptyFinally(): void {
  try {
    console.log('trying');
  } finally {
  }
}

/**
 * ❌ Incorrect: Empty function body
 */
function badEmptyFunction(): void {}

/**
 * ❌ Incorrect: Empty method
 */
class BadClass {
  emptyMethod(): void {}

  anotherEmpty(): void {}
}

/**
 * ❌ Incorrect: Empty switch cases
 */
function badEmptySwitch(value: string): void {
  switch (value) {
    case 'a': {
    }
    case 'b': {
      break;
    }
    default: {
    }
  }
}

/**
 * ❌ Incorrect: Empty while loop
 */
function badEmptyWhile(): void {
  const i = 0;

  while (i < 10) {}
}

/**
 * ❌ Incorrect: Empty for loop
 */
function badEmptyFor(): void {
  for (let i = 0; i < 10; i++) {}
}

/**
 * ❌ Incorrect: Using bitwise AND instead of logical AND (noBitwiseOperators).
 */
function checkPermissionsBitwise(user: { permissions: number }, requiredPermission: number): number {
  return user.permissions & requiredPermission;
}

/**
 * ❌ Incorrect: Using bitwise OR instead of logical OR.
 */
function combineFlags(flag1: number, flag2: number): number {
  return flag1 | flag2;
}

/**
 * ❌ Incorrect: Using bitwise XOR.
 */
function toggleBit(value: number, mask: number): number {
  return value ^ mask;
}

/**
 * ❌ Incorrect: Using bitwise NOT.
 */
function invertBits(value: number): number {
  return ~value;
}

/**
 * ❌ Incorrect: Using left shift.
 */
function powerOfTwo(exponent: number): number {
  return 1 << exponent;
}

/**
 * ❌ Incorrect: Using right shift.
 */
function divideByTwo(num: number): number {
  return num >> 1;
}

/**
 * ❌ Incorrect: Using unsigned right shift.
 */
function toUnsigned(num: number): number {
  return num >>> 0;
}

/**
 * ❌ Incorrect: Using bitwise AND for rounding (common mistake).
 */
function roundDownBitwise(num: number): number {
  return num | 0;
}

export {
  BadClass,
  badEmptyCatch,
  badEmptyElse,
  badEmptyFinally,
  badEmptyFor,
  badEmptyFunction,
  badEmptyIf,
  badEmptySwitch,
  badEmptyWhile,
  badSwallowError,
  checkPermissionsBitwise,
  combineFlags,
  divideByTwo,
  invertBits,
  powerOfTwo,
  roundDownBitwise,
  toggleBit,
  toUnsigned
};
