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

This project uses [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) to manage multiple packages.

- Node.js 20 or higher
- Yarn 4.5.x
- Corepack enabled (run `corepack enable` if you haven't already)

### Install dependencies

```sh
yarn
```

### Run lint

```sh
yarn lint
```

### Run full test suite

```sh
yarn test
```

## Adding new packages

To ensure that every part of the monorepo infrastructure works as intended, every package must be located within the `./packages/<new-package-name>` folder.

### Release setup

After creating a package, add a release script to the `./packages/<new-package-name>/package.json` file, and another one to the main `./package.json` file with:

```json
  "release:<new-package-name>": "yarn workspace @untile/<new-package-name> release",
```

### Changelog setup

When creating new packages, keep in mind that the **auto labeler** must have the new package added in `.github/labeler`, so that it can label its pull requests accordingly and they are included in the correct `CHANGELOG.md`. To add new packages to auto labeler run:

```sh
sh bin/auto-labeler.sh
```

## Release & Publish

Make sure that you have configured `GITHUB_TOKEN` in your globals.
This will also publish your packages that have changes to [NPM](https://www.npmjs.com/~untile).

```sh
yarn release:[<package-name>] [<new version> | major | minor | patch]
git push origin master && git push --tags
```
