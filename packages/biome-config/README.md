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
- Biome >= 2.3

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
  "$schema": "https://biomejs.dev/schemas/2.3.0/schema.json",
  "extends": ["@untile/biome-config"]
}
```

## Features

This configuration includes comprehensive linting and formatting rules optimized for modern JavaScript/TypeScript projects.

### Biome v2 Features

- **Domains**: Automatically enables framework-specific rules based on your `package.json` dependencies
  - `react`: React-specific rules (hooks, JSX, etc.)
  - `next`: Next.js optimizations (Image component, etc.)
  - `test`: Testing framework rules (Jest, Vitest, etc.)
- **CSS Linting & Formatting**: Full support for CSS files (useful for Tailwind projects)
- **JSON Linting**: Validation for JSON configuration files
- **Assist Actions**: Code improvements like `organizeImports`, `useSortedKeys`, and `useSortedAttributes`

### Linter Rules

Comprehensive rule coverage across all categories:

- **Accessibility (a11y)**: `useAltText`, `useValidAnchor`, `useKeyWithClickEvents`, `useValidAriaRole`, `noAccessKey`
- **Performance**: `noAwaitInLoops`, `noAccumulatingSpread`, `noBarrelFile`, `useTopLevelRegex`
- **Security**: `noBlankTarget`, `noGlobalEval`, `noDangerouslySetInnerHtml`
- **Correctness**: `noUnusedImports`, `noUnusedVariables`, `useExhaustiveDependencies`, `useHookAtTopLevel`
- **Style**: `noImplicitBoolean`, and more
- **Suspicious**: `noConsole`, `noExplicitAny`, `noSkippedTests`, and more
- **Complexity**: `noBannedTypes`, and more

### Formatter Options

- **Indent**: 2 spaces
- **Line width**: 120 characters
- **Quote style**: Single quotes
- **Semicolons**: Always
- **Trailing commas**: None
- **Arrow parentheses**: As needed
- **EditorConfig**: Supported

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
