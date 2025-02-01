// Rule: import/no-named-as-default-member incorrect usage

import foo from './export';
Object.freeze({ bar: foo.bar });
