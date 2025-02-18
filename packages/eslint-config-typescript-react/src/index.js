/**
 * Module dependencies.
 */

const eslintConfigPrettier = require('eslint-config-prettier');
const eslintConfigReact = require('@untile/eslint-config-react');
const eslintConfigTypescript = require('@untile/eslint-config-typescript');

/**
 * Export `@untile/eslint-config-typescript-react` configuration preset.
 */

module.exports = [
  ...eslintConfigReact,
  ...eslintConfigTypescript,
  eslintConfigPrettier
];
