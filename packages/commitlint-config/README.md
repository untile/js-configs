# commitlint-config-untile

Untile-flavored commitlint config.

[![npm version](https://img.shields.io/npm/v/@untile/commitlint-config.svg?style=flat-square)](https://www.npmjs.com/package/@untile/commitlint-config)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/untile/js-configs/blob/main/LICENSE)

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
