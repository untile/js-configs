<p align="center">
  <br><img width="250" src="https://untile.pt/logo.png" /><br>
</p>

<h1 align="center">
  @untile/oxlint-config
</h1>

<h4 align="center">
  A shareable oxlint configuration that enforces Untile's code style. Based on our TypeScript React ESLint configuration, this package provides a fast, Rust-powered alternative using [oxlint](https://oxc.rs).
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@untile/oxlint-config">
    <img src="https://img.shields.io/npm/v/@untile/oxlint-config.svg?style=for-the-badge" alt="NPM version" />
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
- TypeScript >= 4.9.0
- Oxlint >= 0.15.11

## Usage

Create an `.oxlintrc.json` file in your project root and copy the oxlint config from this package.

```json
// package.json
{
  "scripts": {
    "lint": "npx oxlint"
  }
}