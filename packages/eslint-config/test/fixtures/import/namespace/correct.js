// Rule: import/namespace correct usage

import * as foo from './export';
Object.freeze({ num1: foo.num1, num4: foo.num4 });
