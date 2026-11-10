---
name: coding-standards
description: >-
  This skill should be used when the user asks about "coding standards", "naming conventions",
  "code style", "docblocks", "comments", "how to name files", "how to write a config",
  or needs guidance on code conventions for the js-configs repository.
metadata:
  version: 1.0.0
---

# Coding Standards

The linters enforce formatting and most rules: run them rather than reasoning about them (`npm run lint --workspace=@untile/<package>`). `biome-config` is linted with its own config (Biome). The other packages are linted with `@untile/eslint-config`. This skill covers what the linters do not check.

Remember that the configs in this repository *are* the Untile standard: a rule change here reaches every project that extends them. Changing a config always comes with a test that proves the new behaviour and a note in the package README.

## Docblock separators

Minimalist JSDoc, no `@param` / `@returns` tags. Every `Module dependencies.` header, exported symbol, function and constant group carries a one-line separator docblock:

```js
/**
 * Module dependencies.
 */

const path = require('node:path');

/**
 * Run Biome and return the parsed JSON report.
 */

function runBiome(args) {}

/**
 * Export `@untile/<package>` configuration preset.
 */

module.exports = {};
```

## Comments

- **Keep** the non-obvious *why*: a Biome or commitlint behaviour being worked around, why a rule is off or relaxed in an override, links to issues.
- **Drop** comments that restate the code.
- One or two short lines; no history of what the code used to do.
- In config files, every disabled or relaxed rule has a reason, either next to it or in the package README.

## Names

- Files and folders: kebab-case (Biome enforces it in `biome-config`)
- Constants: UPPERCASE_WITH_UNDERSCORES
- Booleans: `is` / `has` / `can` prefix
- Avoid single-letter names except loop indices

## Code organization

- `node:` protocol for Node.js built-ins
- `const` by default; `let` only when reassigned
- Empty lines between logical blocks and before `return`
- Prefer small pure helpers in tests over setup shared through mutable state
