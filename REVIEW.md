# Review Guidelines

How to review a pull request in this repository. The conventions being checked are not repeated here: they live in `CLAUDE.md`, in `.claude/rules/` and in the `coding-standards` skill.

## Scope and evidence

- Review only the files the pull request changes. A problem in a file outside it is not a finding of this review
- Read every file you comment on with the Read tool during this review. Each finding cites `file:line` from that read; a finding you cannot cite is not reported

## Review Process

1. **Read the diff**: understand what changed before judging
2. **Check issue alignment**: if the PR description references an issue (`#123`), read the issue and verify the implementation addresses its requirements. Flag gaps or scope drift
3. **Scope to affected packages**: identify which packages changed (the PR labels match them). `biome-config` and `commitlint-config` are maintained; the other eight packages are deprecated and only take fixes
4. **Find similar existing code**: before flagging a pattern violation, look at how the same pattern is implemented elsewhere in the repo
5. **Submit review**: bundle ALL findings into a single GitHub PR review. Inline comments on specific lines for actionable issues. Summary body for overall assessment. Never post individual comments

## What matters in this repository

Every package is a config other projects install, so a change is judged by its effect on those projects:

- **Release impact**: a new error-level rule, a removed option, a narrower peer range or a higher `engines` minimum breaks consumers and needs a major release. Say which bump the change needs when the PR does not
- **Dependencies**: a module the config loads at runtime belongs in `dependencies` (or `peerDependencies` for the tool itself), never only in `devDependencies`
- **biome-config**: a renamed or removed rule makes Biome exit with a configuration error, and the peer range covers a single Biome minor. The tests assert the exact rules per fixture: a loosened expectation is a `violation:`, not a fix
- **commitlint-config**: every rule or ignore change has a fixture in `test/fixtures/correct.txt` or `incorrect.txt`. Ignore patterns are anchored, so they cannot skip ordinary messages
- **Workflows**: least `permissions` per job, no secrets in `pull_request_target` jobs that run PR code, actions pinned to a major. `publish.yml` publishes with npm Trusted Publishing (OIDC), with no npm token
- **Lockfile**: only the packages the PR touches move

## Review Principles

- **Signal over noise**: Only comment on issues that automated tools (Biome, ESLint, commitlint, the tests) cannot catch. Focus on logic, release impact and convention violations
- **Be specific**: Every inline comment must reference the exact rule or convention being violated and explain why it matters
- **Severity tiers**: Use `bug:`, `violation:`, or `suggestion:` prefixes in inline comments so the developer can prioritize
- **Acknowledge good patterns**: When the PR follows project conventions well, say so briefly in the summary

## Do NOT Comment On

- **Formatting and style**: Biome, ESLint and Prettier handle this in the pre-commit hook and CI
- **Import ordering**: the linters handle this
- **Generated files** (listed in `CLAUDE.md`: package changelogs, `w3c-css-properties.json`, `.github/labeler.yml`, `package-lock.json`), unless hand-edited
- **Nits**: minor preferences that don't affect correctness, security, or maintainability
- **Praise on individual lines**: save positive feedback for the summary comment only

## PR Summary Format

Structure the summary comment as:
1. **What this PR does** (1-2 sentences from the diff)
2. **Issue alignment** (if issue linked: does the implementation match? any gaps?)
3. **Packages affected** (list which packages have changes, and the release each one needs)
4. **Issues found** (bulleted list with severity: bug/violation/suggestion)
5. **Merge assessment**: one of "Safe to merge: no issues found" / "Merge after addressing: {summary}" / "Blocking issues: {critical items}"
