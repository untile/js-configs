---
paths:
  - packages/**
  - .github/**
  - lefthook.yml
  - package.json
---

# Quality Gates

Run the gates **once, at the end of the task**: right before `git commit` or `git push`, or before handing changes back uncommitted. Not after every edit.

## What to run

For each package with changes, in order. Fix failures before moving on. Run each command without a pipe (or with `set -o pipefail`), so a failure is not hidden by `tail`/`head`.

1. **Lint**: `npm run lint --workspace=@untile/<package>`
2. **Tests**: `npm test --workspace=@untile/<package>`

When `package.json`, `package-lock.json`, `lefthook.yml` or `.github/` change, run the whole repository: `npm run lint` and `npm test`.

## Package specifics

- **biome-config**: the tests assert the exact rules reported per fixture. After changing `biome.json`, update the expectations in `test/index.test.ts` on purpose; never loosen them to make a test pass. After a Biome upgrade run `npm run upgrade-biome --workspace=@untile/biome-config` first.
- **commitlint-config**: linted with Biome, using `biome-config` (`packages/commitlint-config/biome.json`). Add a fixture to `test/fixtures/correct.txt` or `incorrect.txt` for every rule or ignore change.
- **Lockfile**: after `npm install`, check that `package-lock.json` only changes the packages you touched. If unrelated versions move, restore the lockfile from `master` and reinstall.

## When to skip

- Only answered questions, or only edited `.md` files outside `packages/`
- Only edited `.claude/`
