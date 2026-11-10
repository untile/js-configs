---
name: quality-gates
description: >-
  This skill should be used when the user asks to "run quality gates", "check code quality",
  "run checks", "run linting", "run tests", "verify code", "check before PR",
  or wants to run the lint and test checks for one or more packages.
metadata:
  version: 1.0.0
---

# Quality Gates

Run the lint and tests for packages in the monorepo. The steps and when to skip them live in [`.claude/rules/quality-gates.md`](.claude/rules/quality-gates.md): read it and follow it. This skill only decides which packages to check and how to report.

## Which packages

- **No arguments**: every package with changes on this branch, committed or not (`git diff --name-only $(git merge-base origin/master HEAD)` plus `git ls-files --others --exclude-standard`, mapped to `packages/<package>`). Changes to root files (`package.json`, `package-lock.json`, `lefthook.yml`, `.github/`) mean all packages.
- **Specific package** (e.g. `/quality-gates biome-config`): only that package.
- **All packages** (`/quality-gates all`): `npm run lint` and `npm test` at the root.

## Output

Per package: which checks passed, which failed (with the relevant output), and the overall status.
