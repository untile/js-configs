---
name: git-workflow
description: >-
  This skill should be used when the user asks about "branch naming", "commit message",
  "how to commit", "PR guidelines", "pull request", "merge strategy", "git workflow",
  "branch name", "commit format", "release", "publish a package", "tag a release",
  or needs guidance on git operations, branch creation, commit conventions, releases or GitHub CLI usage.
metadata:
  version: 1.0.0
---

# Git Workflow

Branches, commits, pull requests and releases in `js-configs`. This repository is the source of the commit rules (`@untile/commitlint-config`), so the format below is exactly what `packages/commitlint-config/src/index.js` enforces.

## Workflow Strategy

- **GitHub Flow**: branch from `master`, open a PR to `master`
- `master` must always be releasable

## Branch Naming

Format: `<type>/<name>`, lowercase with hyphens, describing the work. Never a ticket ID alone.

| Type | Purpose |
|------|---------|
| `feature/` | New packages or functionality |
| `enhancement/` | Improvements to existing configs |
| `bugfix/` | Bug fixes |
| `hotfix/` | Urgent fixes to a published version |
| `support/` | Docs, tooling, CI, dependencies |
| `release/` | Release preparation |
| `dependabot/` | Created by Dependabot only |

```text
# Good
feature/biome-config-v5
bugfix/commitlint-ignore-patterns

# Bad
my-branch
feature/PROJ-123
```

## Commit Messages

```text
[OPTIONAL-REFERENCE] Verb subject

Optional body in sentence case, after a blank line.
```

- **Verb** (PascalCase): `Add` | `Disable` | `Enable` | `Fix` | `Improve` | `Migrate` | `Move` | `Release` | `Remove` | `Replace` | `Revert` | `Update`
- **Reference** (optional): any text in square brackets, e.g. `[PROJ-123]`, `[#42]`
- Header ≤ 100 characters, no trailing full stop or whitespace, single spaces, **no quotes or backticks**
- Subject ≥ 3 characters
- Body and footer lines ≤ 100 characters

Ignored by the validation: `wip`, rebase commands (`drop`, `pick`, `reword`), Dependabot `Bump …` messages, merges, reverts and `fixup!` / `squash!` / `amend!`.

Validated locally by the Lefthook `commit-msg` hook and in CI by `npx commitlint --from <base> --to <head>`.

```text
Add stylelint config for CSS modules
[PROJ-12] Fix commitlint ignore patterns
Migrate biome config to Biome 2.6

Rename the Tailwind sorting rule and pin the peer range to the 2.6 minor.
```

## Atomic Commits

One logical change per commit: a config change, its tests and its docs together; unrelated changes (CI, another package) in separate commits. Keep the lockfile change in the commit whose `package.json` caused it.

## History Management

```bash
# Fixup an earlier commit on the branch (no editor opens)
git commit --fixup=<sha>
GIT_SEQUENCE_EDITOR=: git rebase -i --autosquash origin/master

# Keep the branch updated
git fetch origin && git rebase origin/master
```

## Pull Requests

Before opening: commits follow the format, `npm run lint` and `npm test` pass, the branch is rebased on `master`.

```markdown
## Summary
What changes and why

## Changes
- Change 1

## Test Plan
1. Step
2. Expected result
```

Labels are added automatically per package (`.github/labeler.yml`). PRs need an approval from someone other than the author and green CI.

Reviews follow [`REVIEW.md`](../../../REVIEW.md), with comment prefixes `bug:` (must fix), `violation:` (breaks a project convention) and `suggestion:` (optional).

## Releases

Each package is released on its own, from an up-to-date `master`:

```bash
npm run release:<package> [major|minor|patch]   # e.g. npm run release:biome-config minor
git push origin master && git push origin <package>/v<version>
```

`bin/release.sh` bumps the version, adds the merged PRs labelled with the package since its previous tag to the package `CHANGELOG.md` (needs an authenticated `gh`), commits `Release <Package> v<version>` and tags `<package>/v<version>`.

Pushing the tag runs `.github/workflows/publish.yml`: npm publish with Trusted Publishing (OIDC), GitHub Packages for `biome-config` and `commitlint-config`, and the GitHub release from the new changelog section.

A PR only appears in a package changelog if it has the package label, added by the labeler from the changed paths.

Push only the new tag (not `git push --tags`): GitHub creates no events when more than three tags are pushed at once.

## Additional Resources

- **`references/gh-cli-reference.md`**: gh CLI commands for PRs, issues, releases and workflows
