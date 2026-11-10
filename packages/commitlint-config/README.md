<p align="center">
  <br><img width="250" src="https://untile.pt/logo.png" /><br>
</p>

<h1 align="center">
  @untile/commitlint-config
</h1>

<h4 align="center">
  Untile-flavored commitlint config.
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@untile/commitlint-config">
    <img src="https://img.shields.io/npm/v/@untile/commitlint-config.svg?style=for-the-badge" alt="NPM version" />
  </a>
  <a href="https://github.com/untile/js-configs/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" alt="Untile js-config is released under the MIT license." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=untiledigital">
    <img src="https://img.shields.io/twitter/follow/untiledigital.svg?label=Follow%20@untiledigital&style=for-the-badge" alt="Follow @untiledigital" />
  </a>
</p>

## Requirements

- Node.js >= 22.12.0
- commitlint 21

## Installation

With `npm`:

```sh
npm install @commitlint/cli @untile/commitlint-config --save-dev
```

Or using `yarn`:

```sh
yarn add @commitlint/cli @untile/commitlint-config -D
```

## Setup

Create an `.commitlintrc.cjs` file with the following:

```js
module.exports = {
  extends: ['@untile/commitlint-config']
};
```

## Rules

Format: `[OPTIONAL-REFERENCE] Verb subject`, with an optional body separated by a blank line.

- The header starts with one of: **Add**, **Disable**, **Enable**, **Fix**, **Improve**, **Migrate**, **Move**, **Release**, **Remove**, **Replace**, **Revert**, **Update**.
- An optional reference in square brackets may come first: `[PROJ-123] Fix login`.
- The header has at most **100** characters, no trailing full stop or whitespace, no quotes or backticks, and single spaces between words.
- The subject has at least 3 characters.
- The body starts after a blank line, is in sentence case, and its lines have at most **100** characters (the same applies to the footer).

Ignored commits: work in progress (`wip`, `WIP: ...`), interactive rebase commands (`drop`, `pick`, `reword`), Dependabot (`Bump <dep> from <a> to <b>`, `Bump the <group> group ...`), and commitlint's defaults (merges, reverts, `fixup!`, `squash!`, `amend!`).

**NOTE**
Follow the [commitlint.js.org](https://commitlint.js.org/#/guides-local-setup?id=install-husky)
guide to see how to finish the configuration, using for example husky.
