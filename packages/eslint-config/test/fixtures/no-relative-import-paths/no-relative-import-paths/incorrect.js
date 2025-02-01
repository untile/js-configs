// Rule: no-relative-import-paths/no-relative-import-paths incorrect usage

// Example 1: Importing modules using relative paths
import { foo } from '../../import/named/export';

noop(foo);
