/* eslint-disable no-sync */
'use strict';

/**
 * Module dependencies.
 */

const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const prettierConfig = require('../src/index');

/**
 * Check.
 */

const check = (content) => prettier.check(content, {
  ...prettierConfig,
  parser: 'babel'
});

/**
 * Tests for `@untile/prettier-config`.
 */

describe('@untile/prettier-config', () => {
  it('should not generate any violation for correct code', () => {
    const source = path.resolve(__dirname, 'fixtures', 'correct.js');
    const content = fs.readFileSync(source, 'utf8');
    const results = check(content);

    expect(results).toBe(true);
  });

  it('should generate violations for incorrect code', () => {
    const source = path.resolve(__dirname, 'fixtures', 'incorrect.js');
    const content = fs.readFileSync(source, 'utf8');
    const results = check(content);
    
    expect(results).toBe(false);
  });
});
