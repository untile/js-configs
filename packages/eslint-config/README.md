<p align="center">
  <br><img width="250" src="https://untile.pt/logo.png" /><br>
</p>

<h1 align="center">
  @untile/eslint-config
</h1>

<h4 align="center">
  Untile-flavored ESLint config.
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@untile/eslint-config">
    <img src="https://img.shields.io/npm/v/@untile/eslint-config.svg?style=for-the-badge" alt="NPM version" />
  </a>
  <a href="https://github.com/untile/js-configs/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" alt="Untile js-config is released under the MIT license." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=untiledigital">
    <img src="https://img.shields.io/twitter/follow/untiledigital.svg?label=Follow%20@untiledigital&style=for-the-badge" alt="Follow @untiledigital" />
  </a>
</p>

## Requirements

- Node.js >= 20
- ESLint >= 9

## Installation

With `npm`:

```sh
npm install eslint @untile/eslint-config --save-dev
```

Or using `yarn`:

```sh
yarn add eslint @untile/eslint-config -D
```

## Setup

Create an `eslint.config.js` file with the following:

```js
const eslintUntileConfig = require('@untile/eslint-config');

module.exports = eslintUntileConfig;
```

## Usage

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
yarn lint
```
