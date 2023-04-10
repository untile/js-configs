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

## Installation

```sh
$ yarn add @commitlint/cli @untile/commitlint-config-untile --dev
```

## Usage

Create an `.commitlintrc.js` file with the following:

```js
module.exports = {
  extends: ['@untile/commitlint-config-untile']
};
```

## Rules

- Commit header should start to: **Add|Bump|Fix|Improve|Release|Remove|Update**.
- Commit header must not be longer than **52** characters.
- Commit header must have **more than 1 word**.
- Commit body should be in sentence-case.

**NOTE**
Follow the [commitlint.js.org](https://commitlint.js.org/#/guides-local-setup?id=install-husky)
guide to see how to finish the configuration, using for example husky.
