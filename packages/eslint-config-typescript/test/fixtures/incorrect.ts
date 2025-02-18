// Avoid extra `no-unused-vars` violations.
function noop() {
  // Do nothing
}

// `@typescript-eslint/no-unused-vars`.
const foo = '';

// `@typescript-eslint/no-use-before-define`.
noop(foobiz);

const foobiz = '';

// `@typescript-eslint/no-explicit-any`.
const bar: any = '';

noop(bar);

// `perfectionist/sort-interfaces`.
export interface FOO {
  a: unknown;
  c: unknown;
  b: unknown;
}

// Force this TS source to be a module.
export {};
