// Avoid extra `no-unused-vars` violations.
function noop() {
  // Do nothing
}

// `@typescript-eslint/no-unused-vars`.
const foo = '';

// `@typescript-eslint/comma-dangle`.
noop({ bar: 'bar', foo: '', });

// `@typescript-eslint/no-use-before-define`.
noop(foobiz);

const foobiz = '';

// `@typescript-eslint/no-explicit-any`.
const bar: any = '';

noop(bar);

// `typescript-sort-keys/interface`.
export interface FOO {
  a: unknown;
  c: unknown;
  b: unknown;
}

// Force this TS source to be a module.
export {};
