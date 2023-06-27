// Avoid extra `no-unused-vars` violations.
function noop() {
  // Do nothing
}

// `@typescript-eslint/no-unused-vars`.
const foo = '';

noop(foo);

// `@typescript-eslint/comma-dangle`.
noop({ bar: 'bar', foo: 'foo' });

// `typescript-sort-keys/interface`.
export interface FOOBAR {
  a: unknown;
  b: unknown;
  c: unknown;
}

// `@typescript-eslint/no-use-before-define`.
type FooBiz = string;
const foobiz: FooBiz = '';

noop(foobiz);

// @typescript-eslint/explicit-module-boundary-types
export const explicitString = () => 'test';
export const typedExplicitString = (): string => 'test';

// Force this TS source to be a module.
export {};
