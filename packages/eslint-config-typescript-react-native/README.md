# eslint-config-untile-react

Untile-flavored ESLint react-native config. Extends `@untile/eslint-config-typescript-react`.

[![npm version](https://img.shields.io/npm/v/@untile/eslint-config-typescript-react-native.svg?style=flat-square)](https://www.npmjs.com/package/@untile/eslint-config-typescript-react-native)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/untile/js-configs/blob/main/LICENSE)

## Installation

```sh
$ npm install eslint @untile/eslint-config-typescript-react-native --save-dev
```

## Usage

Create an `.eslintrc.js` file with the following:

```js
extends: ['@untile/eslint-config-typescript-react-native']
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
