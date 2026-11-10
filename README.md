<p align="center">
  <br><img width="250" src="https://untile.pt/logo.png" /><br>
</p>

<h4 align="center">
  A common configs and conventions for Untile projects.
</h4>

<p align="center">
  <a href="https://github.com/untile/js-configs/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Untile js-config is released under the MIT license." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=untiledigital">
    <img src="https://img.shields.io/twitter/follow/untiledigital.svg?label=Follow%20@untiledigital" alt="Follow @untiledigital" />
  </a>
</p>

## Setup

This project uses [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces) to manage multiple packages.

- Node.js 22.12 or higher
- npm 10.x or higher

### Install dependencies

```sh
npm install
```

### Run lint

```sh
npm run lint
```

### Run full test suite

```sh
npm test
```

## Git Hooks

This project uses [Lefthook](https://github.com/evilmartians/lefthook) v2.0.0 to manage Git hooks.

### Hooks configured:
- **pre-commit**: 
  - Sorts all `package.json` files (priority 1)
  - Runs ESLint on staged `.js`, `.ts`, `.tsx` files in parallel (priority 2)
- **commit-msg**: 
  - Validates commit messages with commitlint

### Setup
Hooks are automatically installed when you run `npm install` (via the `prepare` script).

To manually reinstall hooks:
```sh
npx lefthook install
```

### Skip hooks temporarily
```sh
# Skip all hooks
LEFTHOOK=0 git commit -m "message"

# Skip specific command
LEFTHOOK_EXCLUDE=eslint git commit -m "message"
```

### Debug hooks
```sh
npx lefthook run pre-commit --verbose
```

## Adding new packages

To ensure that every part of the monorepo infrastructure works as intended, every package must be located within the `./packages/<new-package-name>` folder.

### Release setup

After creating a package, add a release script to the `./packages/<new-package-name>/package.json` file, and another one to the main `./package.json` file with:

```json
  "release:<new-package-name>": "npm run release --workspace=@untile/<new-package-name>",
```

### Changelog setup

When creating new packages, keep in mind that the **auto labeler** must have the new package added in `.github/labeler`, so that it can label its pull requests accordingly and they are included in the correct `CHANGELOG.md`. To add new packages to auto labeler run:

```sh
sh bin/github-labeler.sh
```

## Release & Publish

Requires the [GitHub CLI](https://cli.github.com) (`gh`), authenticated with access to this repository.

The release script bumps the package version, adds the merged pull requests labelled with the package to its `CHANGELOG.md`, commits `Release <Package> v<version>` and tags `<package-name>/v<version>`. Pushing the tag publishes the package to [npm](https://www.npmjs.com/~untile) (Trusted Publishing) and creates the GitHub release from the changelog.

```sh
npm run release:[<package-name>] [<new version> | major | minor | patch]
git push origin master && git push origin <package-name>/v<version>
```
