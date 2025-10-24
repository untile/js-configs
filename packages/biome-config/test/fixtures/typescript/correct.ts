/**
 * TypeScript correct examples.
 *
 * Demonstrates proper TypeScript patterns that should pass all TypeScript rules.
 */

/**
 * ✅ Correct: Use proper type annotations instead of any.
 */

interface User {
  email: string;
  id: number;
  name: string;
}

function processData(data: User): string {
  return `User: ${data.name} (${data.email})`;
}

function processArray(items: string[]): number {
  return items.length;
}

function processCallback(callback: (value: number) => void): void {
  callback(42);
}

/**
 * ✅ Correct: Use proper primitive types, not wrapper types.
 */

function processString(value: string): string {
  return value.toUpperCase();
}

function processNumber(value: number): number {
  return value * 2;
}

function processBoolean(value: boolean): string {
  return value ? 'yes' : 'no';
}

/**
 * ✅ Correct: Proper type inference with explicit initialization.
 */

function calculateTotal(items: Array<{ price: number; quantity: number }>): number {
  let total = 0; // ✅ Type inferred as number

  for (const item of items) {
    total += item.price * item.quantity;
  }

  return total;
}

/**
 * ✅ Correct: Use union types properly.
 */

type Status = 'error' | 'loading' | 'success';

function handleStatus(status: Status): string {
  switch (status) {
    case 'loading':
      return 'Please wait...';
    case 'success':
      return 'Operation completed!';
    case 'error':
      return 'An error occurred';
    default: {
      // Exhaustive check
      const _exhaustive: never = status;

      return _exhaustive;
    }
  }
}

/**
 * ✅ Correct: Proper generic constraints.
 */

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

function mapArray<T, U>(items: T[], mapper: (item: T) => U): U[] {
  return items.map(mapper);
}

/**
 * ✅ Correct: Proper object types.
 */

interface Config {
  apiUrl: string;
  debug: boolean;
  timeout: number;
}

function initializeConfig(config: Config): Config {
  // Initialize and return config
  return {
    apiUrl: config.apiUrl,
    debug: config.debug,
    timeout: config.timeout
  };
}

/**
 * ✅ Correct: Proper return types.
 */

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  const data = await response.json() as User;

  return data;
}

function divide(a: number, b: number): number | null {
  if (b === 0) {
    return null;
  }

  return a / b;
}

/**
 * ✅ Correct: Proper type guards.
 */

function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value &&
    'email' in value
  );
}

function processUnknownValue(value: unknown): string {
  if (isUser(value)) {
    return value.name;
  }

  return 'Not a user';
}

export {
  calculateTotal,
  divide,
  fetchUser,
  getProperty,
  handleStatus,
  initializeConfig,
  isUser,
  mapArray,
  processArray,
  processBoolean,
  processCallback,
  processData,
  processNumber,
  processString,
  processUnknownValue
};

export type {
  Config,
  Status,
  User
};
