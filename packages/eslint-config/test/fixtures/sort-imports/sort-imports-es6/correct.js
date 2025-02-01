// Rule: sort-imports/sort-imports-es6 correct usage

// Example 1: Imports sorted alphabetically by source with proper grouping
import '@youre/eslint-plugin-sort-imports-es6-autofix';
import * as namespace from 'eslint-plugin-promise';
import { alpha, beta } from 'eslint-plugin-import';
import { bar, foo } from 'eslint';
import defaultExport from 'eslint-plugin-jest';

noop(foo, bar, alpha, beta, defaultExport, namespace);

