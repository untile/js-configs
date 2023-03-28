# stylelint-config-react

Untile-flavored stylelint config react-native.

[![npm version](https://img.shields.io/npm/v/@untile/stylelint-config-react-native.svg?style=flat-square)](https://www.npmjs.com/package/@untile/stylelint-config-react-native)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/untile/js-configs/blob/main/LICENSE)

## Installation

```sh
$ npm install stylelint @untile/stylelint-config-react-native --save-dev
```

## Usage

Create an `.stylelintrc` file with the following:

```json
{
  "extends": ["@untile/stylelint-config-react-native"]
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
  "extends": "@untile/stylelint-config-react-native",
  "rules": {
    "your-rules-here"
  }
}
```
