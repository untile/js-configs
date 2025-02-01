// Rule: sort-imports/sort-imports-es6 incorrect usage

// Example 1: Imports not sorted alphabetically by source
import { bar, foo } from 'eslint';
import { alpha, beta } from 'eslint-plugin-import';
import defaultExport from 'eslint-plugin-jest';
import '@youre/eslint-plugin-sort-imports-es6-autofix';
import * as namespace from 'eslint-plugin-promise';

noop(foo, bar, alpha, beta, defaultExport, namespace);
