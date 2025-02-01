// Rule: import/namespace incorrect usage

import * as foo from './export';
Object.freeze({ num3: foo.num3 });
