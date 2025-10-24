/**
 * Suspicious rules correct examples.
 *
 * Demonstrates patterns that pass suspicious rules:
 * - noEmptyBlockStatements: All blocks have content or comments
 */

/**
 * ✅ Correct: Block statements with meaningful code
 */
function processData(data: string[]): void {
  if (data.length > 0) {
    console.log('Processing data');
  }
}

/**
 * ✅ Correct: Try-catch with error handling
 */
function parseJson(json: string): unknown {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.error('Failed to parse JSON:', error);

    return null;
  }
}

/**
 * ✅ Correct: Empty block with explanatory comment
 */
function legacyMethod(): void {
  // Intentionally empty - method kept for backwards compatibility
}

/**
 * ✅ Correct: Switch cases with statements
 */
function handleEvent(event: string): void {
  switch (event) {
    case 'start': {
      console.log('Starting');
      break;
    }
    case 'stop': {
      console.log('Stopping');
      break;
    }
    default: {
      console.log('Unknown event');
    }
  }
}

/**
 * ✅ Correct: Using logical operators (noBitwiseOperators).
 */
function checkPermissions(user: { permissions: boolean }, requiredPermission: boolean): boolean {
  return user.permissions && requiredPermission;
}

/**
 * ✅ Correct: Using logical OR.
 */
function getDefaultValue(value: string | null, defaultVal: string): string {
  return value || defaultVal;
}

/**
 * ✅ Correct: Using comparison operators.
 */
function isActive(flags: { active: boolean }): boolean {
  return flags.active === true;
}

/**
 * ✅ Correct: Using arithmetic operators.
 */
function multiplyByTwo(num: number): number {
  return num * 2;
}

/**
 * ✅ Correct: Using Math operations instead of bitwise.
 */
function roundDown(num: number): number {
  return Math.floor(num);
}

export {
  checkPermissions,
  getDefaultValue,
  handleEvent,
  isActive,
  legacyMethod,
  multiplyByTwo,
  parseJson,
  processData,
  roundDown
};
