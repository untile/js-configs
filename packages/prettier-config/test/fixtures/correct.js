import React from 'react';

// arrowParens: 'avoid'
export const arrowParens = x => x * x;

// bracketSpacing: true
export const bracketSpacing = { foo: 'bar', baz: 'qux' };

// jsxSingleQuote: true
export const jsxSingleQuote = <div className='example'>Hello, World!</div>;

// printWidth: 120
export const printWidth =
  'This is a very long line of text that will exceed the print width of 120 characters and will be wrapped by Prettier. This is a very long line of text that will exceed the print width of 120 characters and will be wrapped by Prettier.';

// quoteProps: 'as-needed'
export const quoteProps = {
  foo: 'bar',
  'baz-qux': 'corge',
  class: 'example'
};

// singleQuote: true
export const singleQuote = 'Hello, World!';

// tabWidth: 2
export const tabWidth = (
  <div>
    <h1>Hello, World!</h1>
  </div>
);

// trailingComma: 'none'
export const trailingComma = {
  foo: 'bar',
  baz: 'qux'
};
