// Rule: import/no-named-as-default-member correct usage

import foo, { bar } from './export';
Object.freeze({ bar, foo });
