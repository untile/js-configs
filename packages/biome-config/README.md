<p align="center">
  <br><img width="250" src="https://untile.pt/logo.png" /><br>
</p>

<h1 align="center">
  @untile/biome-config
</h1>

<h4 align="center">
  A shareable Biome configuration that enforces Untile's code style. Based on our TypeScript React ESLint configuration, this package provides a modern, fast, and unified formatter and linter using [Biome](https://biomejs.dev).
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@untile/biome-config">
    <img src="https://img.shields.io/npm/v/@untile/biome-config.svg?style=for-the-badge" alt="NPM version" />
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
- ESLint >= 9
- TypeScript >= 4.9.0
- Biome >= 1.9

## Installation

With `npm`:

```sh
npm install @biomejs/biome @untile/biome-config --save-dev
```

Or using `yarn`:

```sh
yarn add @biomejs/biome @untile/biome-config -D
```

## Setup

Create a `biome.json` file in your project root and extend this configuration:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": ["@untile/biome-config"]
}
```

## Usage

Add the following `script` to your `package.json`:

```json
{
  "scripts": {
    "biome:lint": "biome lint --error-on-warnings ."
  }
}
```

read more about the `biome:lint` script [here](https://biomejs.dev/linter/).

or using as a formatter:

```json
{
  "scripts": {
    "biome:format": "biome format ."
  }
}

read more about the `biome:format` script [here](https://biomejs.dev/formatter/).
