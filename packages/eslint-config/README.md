# eslint-config

Untile-flavored ESLint config.

[![npm version](https://img.shields.io/npm/v/@untile/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@untile/eslint-config)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/untile/js-configs/blob/main/LICENSE)

## Installation

```sh
$ yarn add eslint @untile/eslint-config --dev
```

## Usage

Create an `.eslintrc.js` file with the following:

```js
extends: ['@untile/eslint-config']
```

Add the following `script` to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

and run the linter with:

```sh
$ yarn lint
```
