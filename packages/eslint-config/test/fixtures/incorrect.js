// Avoid extra `no-unused-vars` violations.
function noop() {
  // Do nothing
}

// `array-bracket-spacing`.
noop(['bar', 'foo']);

// `arrow-parens`
noop(foo => noop(foo));

// `brace-style`.
try {
  noop();
} catch (e) {
  noop();
}

// `capitalized-comments`.

noop();

// First line must be capitalized.
// following lines don't.

// `comma-dangle`.
noop({ bar: 'foo', foo: 'bar' });

// `comma-spacing`.
noop(['bar', 'foo']);

// `comma-style`.
noop({
  bar: 'foo',
  foo: 'bar'
});

// `consistent-this`.
const consistentThis = this;

noop(consistentThis);

// `curly`.
let curly = true;

if (curly) {curly = false;}

// `dot-notation`.
const dotNotation = {};

dotNotation.foo = 'bar';

// `generator-star-spacing`
noop(function *() {});
noop(function *foo() {});
noop({ *foo() {} });

// `id-match`.
let id_match;

noop(id_match);

// `indent`.
noop({
  bar: 'foo'
});

// `jest/no-disabled-tests` `vitest/no-disabled-tests`.
describe.skip('should not allow disable tests with `describe.skip`', () => {});
it.skip('should not allow disable tests with `it.skip`', () => {});
test.skip('should not allow disable tests with `test.skip`', () => {});

xdescribe('should not allow disable tests with `xdescribe`', () => {});
xit('should not allow disable tests with `xit`', () => {});
xtest('should not allow disable tests with `xtest`', () => {});

it('should not allow disable tests with `it`');
test('should not allow disable tests with `test`');

it('should not allow disable tests with `pending`', () => {
  pending();
});

// `jest/no-focused-tests` `vitest/no-focused-tests`.
describe.only('should not allow `describe.only`', () => {});
it.only('should not allow `it.only`', () => {});
test.only('should not allow `test.only`', () => {});
fdescribe('should no allow `fdescribe`', () => {});
fit('should not allow `fit`', () => {});

// `jest/no-identical-title` `vitest/no-identical-title`.
it('should not allow identical title', () => {});

it('should not allow identical title', () => {});

// `key-spacing`.
noop({ foo: 'bar' });

// `keyword-spacing`.
let keywordSpacing = true;

if (keywordSpacing) {
  keywordSpacing = false;
}

// `lines-around-comment`.

/**
 * Foo.
 */

const linesAroundCommentFoo = 1;

/**
 * Bar.
 */

const linesAroundCommentBar = number => number + 2;
noop(linesAroundCommentBar(linesAroundCommentFoo));

// `new-cap`.
const cap = require('cap');

new cap();

// `new-with-error`.
try {
  noop();
} catch (e) {
  throw new Error();
}

// `newline-before-return`.
function funcThatReturns(bar) {
  if (!bar) {
    return;
  }

  return bar;
}

funcThatReturns('foo');

// `no-class-assign`.
class NoClassAssign { }

NoClassAssign = 'foobar';

noop(NoClassAssign);

// `no-console`.
console.log('foo');

// `no-const-assign`.
const noConstAssign = true;

noConstAssign = false;

noop(noConstAssign);

// `no-constant-condition`.
if (true) {
  noop(true);
}

// `no-dupe-class-members`.
class NoDupeClassMembers {

  foo() {
    return 'bar';
  }

  foo() {
    return 'foo';
  }

}

noop(NoDupeClassMembers);

// `no-empty`.
try {
  noop();
} catch (e) {}

// `no-labels`.
noLabels: {
  break noLabels;
}

// `no-multi-spaces`.
noop(['foo', 'bar']);

// `no-multi-str`.
const noMultiStr = 'Line 1 \
  Line 2';

noop(noMultiStr);

// `no-multiple-empty-lines`.
const noMultipleEmptyLines = true;

noop(noMultipleEmptyLines);

// `no-spaced-func`.
noop();

// `no-this-before-super`.
const NoThisBeforeSuper = require('no-this-before-super');

class Child extends NoThisBeforeSuper {

  constructor() {
    this.foo = 'bar';
    super();
  }

}

noop(Child);

// `no-undef`.
bar();

// `no-underscore-dangle`.
class NoUnderscoreDangle {

  constructor() {
    this._foo();
  }

}

noop(new NoUnderscoreDangle());

// `no-unused-vars`.
const foobar = '';

noop();

// `object-curly-spacing`.
const objectCurlySpacing = { foo: 'bar' };

noop(objectCurlySpacing);

// `one-var`.
const oneVar1 = 'foo'; const
  oneVar2 = 'bar';

noop(oneVar1);
noop(oneVar2);

// `one-var-declaration-per-line`.
const oneVarDeclarationPerLine1 = 'foo'; const oneVarDeclarationPerLine2 = 'bar';

noop(oneVarDeclarationPerLine1);
noop(oneVarDeclarationPerLine2);

// `operator-linebreak`.
const operatorLineBreak = 1 + 2;

noop(operatorLineBreak);

// `padded-blocks`.
class PaddedBlocks {

  constructor() {
    switch (true) {
      default: noop();
    }
  }

}

noop(new PaddedBlocks());

// `padding-line-between-statements`.
const paddingLineBetweenStatements = 'foo';

const paddingLineBetweenStatementsSingle = 'bar';

const paddingLineBetweenStatementsMulti = {
  foo: 'bar'
};

const paddingLineBetweenStatementsSingleAgain = 'bar';

if (paddingLineBetweenStatementsSingle.includes(paddingLineBetweenStatementsMulti)) {
  noop(paddingLineBetweenStatements, paddingLineBetweenStatementsSingleAgain);
}

// `quote-props`.
const quoteProps = {
  0: 0,
  foo: 0,
  'foo-bar': 0,
  null: 0,
  true: 0
};

noop(quoteProps);

// `quotes`.
const quotes = 'foo';

noop(quotes);

// `require-await`.
(async () => {})();

// `semi`.
noop();

// `semi-spacing`.
for (let semiSpacing = 0; semiSpacing < 10; ++semiSpacing) {
  noop();
}

// `sort-imports` and `no-rescrited-imports`.
import import1 from 'import-1'; // eslint-disable-line sort-imports-es6-autofix/sort-imports-es6
import { get } from 'lodash'; // eslint-disable-line sort-imports-es6-autofix/sort-imports-es6

noop(import1);
noop(get);

// `sort-keys`.
const sortObjectProps = {
  var1: 'foo',
  var10: 'bar',
  var9: 'biz'
};

noop(sortObjectProps);

// `space-before-blocks`.
let spaceBeforeBlocks = true;

if (spaceBeforeBlocks) {
  spaceBeforeBlocks = false;
} else {
  spaceBeforeBlocks = true;
}

// `space-before-function-paren`.
(function() {
  noop();
})();

// `space-in-parens`.
noop('foo');

// `space-infix-ops`.
const spaceInfixOps = 1 + 2;

noop(spaceInfixOps);

// `space-unary-ops`.
let spaceUnaryOps1 = 1;
const spaceUnaryOps2 = ++spaceUnaryOps1;

noop(spaceUnaryOps2);

// `spaced-comment`.
// Comment missing space.

// `sql-template/no-unsafe-query`.
const db = {
  query: noop()
};

const foo = 'foo';

db.query(`SELECT ${foo} FROM bar`);

// `switch-case/newline-between-switch-case` and `no-fallthrough`.
switch (true) {
  case 'foobar':
  case 'foobiz':
    break;

  default:
    return;
}

// `template-curly-spacing`.
const templateCurlySpacing = 'foo';

noop(`${templateCurlySpacing}`);

// `wrap-iife`.
(function() {
  noop();
})();

// `sort-destructure-keys/sort-destructure-keys`.
const props = { KeyA: 1, keyA: 2, keyB: 3, keyZ: 4 };
const { KeyA, keyA, keyB, keyZ, ...rest } = props;

noop(KeyA);
noop(keyA);
noop(keyB);
noop(keyZ);
noop(rest);

// `yoda`.
let yoda = true;

if (yoda === true) {
  yoda = false;
}
