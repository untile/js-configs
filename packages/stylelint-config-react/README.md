<p align="center">
  <br><img width="250" src="https://untile.pt/logo.png" /><br>
</p>

<h1 align="center">
  @untile/stylelint-config-react
</h1>

<h4 align="center">
  Untile-flavored stylelint config react and styled-components.
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@untile/stylelint-config-react">
    <img src="https://img.shields.io/npm/v/@untile/stylelint-config-react.svg?style=for-the-badge" alt="NPM version" />
  </a>
  <a href="https://github.com/untile/js-configs/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" alt="Untile js-config is released under the MIT license." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=untiledigital">
    <img src="https://img.shields.io/twitter/follow/untiledigital.svg?label=Follow%20@untiledigital&style=for-the-badge" alt="Follow @untiledigital" />
  </a>
</p>

## Requirements

- Node.js >= 20.19.4

## Installation

With `npm`:

```sh
npm install @untile/stylelint-config-react --save-dev
```

Or using `yarn`:

```sh
yarn add stylelint @untile/stylelint-config-react -D
```

You can install the peer dependencies manually or use this command to add them to you `package.json`:

```sh
npx install-peerdeps --dev @untile/stylelint-config-react
```

## Setup

Create an `.stylelintrc` file with the following:

```json
{
  "extends": ["@untile/stylelint-config-react"]
}
```

## Usage

Add the following `script` to your `package.json`:

```json
{
  "scripts": {
    "lint:styles": "stylelint './src/**/*.js'"
  }
}
```

and run the linter with:

```sh
yarn lint:styles
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
