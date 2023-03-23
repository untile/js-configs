# stylelint-config-react

Untile-flavored stylelint config react.

[![npm version](https://img.shields.io/npm/v/@untile/stylelint-config-react.svg?style=flat-square)](https://www.npmjs.com/package/@untile/stylelint-config-react)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/untile/js-configs/blob/main/LICENSE)

## Installation

```sh
$ npm install stylelint @untile/stylelint-config-react --save-dev
```

## Usage

Create an `.stylelintrc` file with the following:

```json
{
  "extends": ["@untile/stylelint-config-react"]
}
```

Add the following `script` to your `package.json`:

```json
{
  "scripts": {
    "lint:styles": "stylelint './src/**/*.js'",
  }
}
```

and run the linter with:

```sh
$ yarn lint:styles
```

## Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

```json
{
  "extends": "@untile/stylelint-config-react",
  "rules": {
    "your-rules-here"
  }
}
```
