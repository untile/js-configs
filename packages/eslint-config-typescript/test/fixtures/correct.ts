// Avoid extra `no-unused-vars` violations.
function noop() {
  // Do nothing
}

// `@typescript-eslint/no-unused-vars`.
const foo = '';

// @ts-expect-error just a test
noop(foo);

// `typescript-sort-keys/interface`.
export type FOOBAR = {
  a: unknown;
  b: unknown;
  c: unknown;
}

// `@typescript-eslint/no-use-before-define`.
type FooBiz = string;
const foobiz: FooBiz = '';

// @ts-expect-error just a test
noop(foobiz);

// @typescript-eslint/explicit-module-boundary-types
export const explicitString = () => 'test';
export const typedExplicitString = (): string => 'test';

// Force this TS source to be a module.
export {};
