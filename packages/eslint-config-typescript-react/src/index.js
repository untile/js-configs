/**
 * Module dependencies.
 */

const eslintConfigReact = require('@untile/eslint-config-react');
const eslintConfigTypescript = require('@untile/eslint-config-typescript');
const tseslint = require('typescript-eslint');

/**
 * Export `@untile/eslint-config-typescript-react` configuration preset.
 */

module.exports = tseslint.config(eslintConfigReact, eslintConfigTypescript);
