# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **monorepo** containing shared configuration packages for JavaScript/TypeScript projects at Untile. It uses **npm workspaces** to manage 10 independent packages, all published to npm under the `@untile` scope.

## Environment Requirements

- Node.js >= 20
- npm >= 10.0.0

## Monorepo Structure

All packages are located in `packages/*`:

- `@untile/biome-config` - Biome configuration
- `@untile/commitlint-config` - Commitlint configuration
- `@untile/eslint-config` - Base ESLint config (JavaScript)
- `@untile/eslint-config-react` - ESLint config for React
- `@untile/eslint-config-typescript` - ESLint config for TypeScript (extends base)
- `@untile/eslint-config-typescript-react` - ESLint config for TypeScript + React
- `@untile/eslint-config-typescript-react-native` - ESLint config for React Native
- `@untile/prettier-config` - Prettier configuration
- `@untile/stylelint-config-react` - Stylelint config for React
- `@untile/stylelint-config-react-native` - Stylelint config for React Native

### Package Structure

Each package follows this convention:
- Main configuration in `src/index.js` (or `src/`)
- Tests in `test/*.test.js` using Jest
- Individual `CHANGELOG.md` maintained via `github-changelog-generator`
- Individual `package.json` with its own version and dependencies

## Common Development Commands

### Testing and Linting

```sh
# Run tests across all packages
npm test

# Run linting across all packages
npm run lint

# Run tests in a specific package (from package directory)
cd packages/eslint-config
npm test

# Watch mode for tests (from package directory)
npm run test:watch
```

### Working with Individual Packages

```sh
# Run any npm script in a specific workspace
npm run <script> --workspace=@untile/<package-name>

# Example: Test only the eslint-config package
npm run test --workspace=@untile/eslint-config
```

## Release & Publishing Process

Each package is released individually using the `bin/release.sh` script.

### Release Commands

```sh
# Release a specific package (from root)
npm run release:<package-name> [major|minor|patch|<version>]

# Examples:
npm run release:eslint-config patch
npm run release:prettier-config minor
npm run release:biome-config 2.0.0
```

### What the Release Script Does

The `bin/release.sh` script automates the following:
1. Installs dependencies
2. Bumps version in `package.json` (defaults to `patch`)
3. Generates/updates `CHANGELOG.md` using `github-changelog-generator`
4. Stages changes with git
5. Creates a commit: "Release <PackageName> v<version>"
6. Creates a git tag: `<package-name>/v<version>` (e.g., `eslint-config/v3.1.1`)

**Important**: The script does NOT push to remote. After releasing, you must:

```sh
git push origin master && git push --tags
```

This triggers GitHub Actions to publish to npm.

### Environment Setup for Releases

- **Required**: `GITHUB_TOKEN` environment variable configured
- Publishing happens automatically via GitHub Actions after pushing tags

## Adding New Packages

1. Create package directory: `packages/<new-package-name>/`
2. Add standard structure (src/, test/, package.json, etc.)
3. Add release script to root `package.json`:
   ```json
   "release:<new-package-name>": "npm run release --workspace=@untile/<new-package-name>"
   ```
4. Update auto-labeler for PR labeling:
   ```sh
   sh bin/github-labeler.sh
   ```

## Git Hooks (Lefthook v2.0.0)

Hooks are automatically installed via `npm install` (through the `prepare` script).

### Pre-commit Hook (runs in priority order)

1. **Priority 1**: Sorts all `package.json` files
2. **Priority 2**: Runs ESLint on staged `.js`, `.ts`, `.tsx` files (parallel)
3. **Priority 3**: Validates branch names

### Commit Message Hook

- Validates commit messages using commitlint

### Hook Management

```sh
# Manually reinstall hooks
npx lefthook install

# Skip all hooks temporarily
LEFTHOOK=0 git commit -m "message"

# Skip specific hook
LEFTHOOK_EXCLUDE=validate-branch git commit -m "message"

# Debug hooks
npx lefthook run pre-commit --verbose
```

## Branch Naming Convention

Valid branch name patterns (enforced by git hooks):
- `master` (protected main branch)
- `bugfix/<description>`
- `dependabot/<description>`
- `enhancement/<description>`
- `feature/<description>`
- `hotfix/<description>`
- `release/<description>`
- `support/<description>`

## Configuration Package Architecture

### ESLint Configs

The ESLint configurations use **ESLint flat config format** (ESLint 9+):

- **Base config** (`eslint-config`): Uses Babel parser, includes plugins for imports, Node.js, security, etc. Defines core rules.
- **TypeScript config** (`eslint-config-typescript`): Extends base config and adds `typescript-eslint`. Overrides specific rules for TypeScript.
- **React/React Native configs**: Layer on top of base/TypeScript configs with framework-specific rules.

Key pattern: TypeScript configs import and extend the base JavaScript config using `tseslint.config()`.

### Testing Strategy

- All packages use **Jest** for testing
- Test files are in `test/*.test.js`
- Tests typically validate that configs can be loaded and applied to fixture files
- Jest config pattern: `testRegex: '(test/.*\\.test.js)$'`

## Scripts Reference

```sh
# Code generation for W3C CSS properties (used by stylelint configs)
npm run codegen:w3c-css-props

# Prepare git hooks (runs automatically on npm install)
npm run prepare
```

## GitHub Actions & Workflows

- **Labeler**: Auto-labels PRs based on which packages are modified (uses `.github/labeler.yml`)
- **Test**: Runs test suite
- **Release**: Triggered by version tags
- **Publish**: Publishes packages to npm after release tags are pushed
