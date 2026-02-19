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
  "$schema": "https://biomejs.dev/schemas/2.4.2/schema.json",
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

````json
{
  "scripts": {
    "biome:format": "biome format ."
  }
}

read more about the `biome:format` script [here](https://biomejs.dev/formatter/).

## Customizing for Your Project

This shared configuration is designed to be generic and reusable across projects. You can customize it for your specific needs by extending the base configuration and adding project-specific settings.

### Excluding Build Directories

Add project-specific ignore patterns to your `biome.json`:

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.2/schema.json",
  "extends": ["@untile/biome-config"],
  "files": {
    "ignore": [
      "dist/**",        // Build output
      ".next/**",       // Next.js
      "build/**",       // Create React App / Vite
      "coverage/**",    // Test coverage reports
      "out/**"          // Other build directories
    ]
  }
}
```

**Note:** `node_modules/` is automatically ignored by Biome regardless of any `includes` or `ignore` settings, so you don't need to exclude it explicitly.

### Adding Custom Overrides

Biome uses deep merge when extending configurations, so your overrides will be merged with the base configuration rather than replacing it:

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.2/schema.json",
  "extends": ["@untile/biome-config"],
  "overrides": [
    {
      "includes": ["scripts/**/*.js"],
      "linter": {
        "rules": {
          "suspicious": {
            "noConsole": "off" // Allow console in scripts
          }
        }
      }
    },
    {
      "includes": ["**/*.config.js"],
      "linter": {
        "rules": {
          "correctness": {
            "noUndeclaredDependencies": "off" // Config files may reference devDependencies
          }
        }
      }
    }
  ]
}
```

### Framework-Specific Configuration

The `domains` feature automatically enables rules based on your `package.json` dependencies. If you need to manually control domain rules:

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.2/schema.json",
  "extends": ["@untile/biome-config"],
  "linter": {
    "domains": {
      "react": "off", // Disable React rules if not using React
      "next": "recommended", // Explicitly enable Next.js rules
      "test": "recommended" // Keep test framework rules enabled
    }
  }
}
```

### Adjusting Rule Severity

You can override specific rule severities in your project:

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.2/schema.json",
  "extends": ["@untile/biome-config"],
  "linter": {
    "rules": {
      "suspicious": {
        "noConsole": "off" // Disable console warnings globally
      },
      "style": {
        "useFilenamingConvention": "off" // Disable filename convention checks
      }
    }
  }
}
```

### VCS Configuration

Biome automatically detects your Git root directory by traversing up from your project. In most cases, you don't need to configure VCS settings manually.

**When you might need to configure `vcs.root`:**

- Your project has a non-standard Git structure
- You're in a monorepo and need to reference a different VCS root
- You're using Git worktrees or submodules

**Example:**

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.2/schema.json",
  "extends": ["@untile/biome-config"],
  "vcs": {
    "root": "." // Current directory (default auto-detect)
    // or "../.." for monorepo packages pointing to repository root
  }
}
```
