import React from 'react';

// arrowParens: 'avoid'
export const arrowParensViolation = (x) => x * x;

// bracketSpacing: true
export const bracketSpacingViolation = {foo: 'bar', baz: 'qux'};

// jsxSingleQuote: true
export const jsxSingleQuoteViolation = <div className="example">Hello, World!</div>;

// printWidth: 80
export const printWidthViolation = "This is a very long line of text that will exceed the print width of 80 characters and will be wrapped by Prettier.";

// quoteProps: 'as-needed'
export const quotePropsViolation = {
  'foo': 'bar',
  'baz-qux': 'corge',
  'class': 'example'
};

// singleQuote: true
export const singleQuoteViolation = "Hello, World!";

// tabWidth: 2
export const tabWidthViolation = (
  <div>
    <h1>Hello, World!</h1>
  </div>
);

// trailingComma: 'none'
export const trailingCommaViolation = {
  foo: 'bar',
  baz: 'qux',
};
