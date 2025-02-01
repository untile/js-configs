/* eslint-disable import/no-duplicates */
// Rule: no-duplicate-imports incorrect usage

// Example 1: Incorrect usage of duplicate imports

import { Linter } from 'eslint';
import ESLint from 'eslint';

noop(ESLint);
noop(Linter);
