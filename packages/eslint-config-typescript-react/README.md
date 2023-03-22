# eslint-config-untile-react

Untile-flavored ESLint config react. Extends `@untile/eslint-config`.

[![npm version](https://img.shields.io/npm/v/@untile/eslint-config-typescript-react.svg?style=flat-square)](https://www.npmjs.com/package/@untile/eslint-config-typescript-react)
[![licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/untile/js-configs/blob/main/LICENSE)

## Installation

```sh
$ npm install eslint @untile/eslint-config-typescript-react --save-dev
```

## Usage

Create an `.eslintrc.js` file with the following:

```js
extends: ['@untile/eslint-config-typescript-react']
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
