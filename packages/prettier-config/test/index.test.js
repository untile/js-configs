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
 * Tests for `@untile/prettier-config`.
 */

describe('@untile/prettier-config', () => {
  it('should not generate any violation for correct code', async () => {
    const source = path.resolve(__dirname, 'fixtures', 'correct.js');
    const content = fs.readFileSync(source, 'utf8');
    const results = await prettier.check(content, {
      ...prettierConfig,
      parser: 'babel'
    });

    expect(results).toBe(true);
  });

  it('should generate violations for incorrect code', async () => {
    const source = path.resolve(__dirname, 'fixtures', 'incorrect.js');
    const content = fs.readFileSync(source, 'utf8');
    const results = await prettier.check(content, {
      ...prettierConfig,
      parser: 'babel'
    });
    
    expect(results).toBe(false);
  });
});
