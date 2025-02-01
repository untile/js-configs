// Rule: no-relative-import-paths/no-relative-import-paths correct usage

// Example 1: Importing modules without relative paths
import { foo as bar } from '@untile/eslint-config/test/fixtures/import/named/export';
import { foo } from './export';

noop(foo, bar);
