/**
 * Module dependencies.
 */

const fs = require('node:fs');
const path = require('node:path');
const { check } = require('prettier');
const config = require('../src/index.js');

/**
 * Test suite.
 */

describe('@untile/prettier-config', () => {
  it('should not generate any violation for correct code', async () => {
    const source = path.resolve(__dirname, 'fixtures', 'correct.js');
    const content = fs.readFileSync(source, 'utf8');
    const results = await check(content, {
      ...config,
      filepath: source,
      parser: 'babel'
    });

    expect(results).toBe(true);
  });

  it('should generate violations for incorrect code', async () => {
    const source = path.resolve(__dirname, 'fixtures', 'incorrect.js');
    const content = fs.readFileSync(source, 'utf8');
    const results = await check(content, {
      ...config,
      filepath: source,
      parser: 'babel'
    });

    expect(results).toBe(false);
  });
});
