<p align="center">
  <br><img width="250" src="https://untile.pt/logo.png" /><br>
</p>

<h1 align="center">
  @untile/biome-config
</h1>

<h4 align="center">
  Untile's shared <a href="https://biomejs.dev">Biome</a> configuration: strict, readable and error-preventing code for TypeScript, React, Next.js, React Native and Node.js projects.
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/@untile/biome-config">
    <img src="https://img.shields.io/npm/v/@untile/biome-config.svg?style=for-the-badge" alt="NPM version" />
  </a>
  <a href="https://github.com/untile/js-configs/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" alt="Untile js-config is released under the MIT license." />
  </a>
</p>

## Requirements

- Node.js >= 24.0.0
- Biome `>=2.6.6 <2.7.0` (the peer range follows one Biome minor at a time, see [Biome upgrades](#biome-upgrades))

## Installation

```sh
npm install @biomejs/biome@~2.6.6 @untile/biome-config --save-dev
```

## Setup

Create a `biome.json` in the project root:

```json
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "extends": ["@untile/biome-config"],
  "vcs": {
    "clientKind": "git",
    "defaultBranch": "master",
    "enabled": true,
    "useIgnoreFile": true
  }
}
```

Recommended scripts:

```json
{
  "scripts": {
    "check": "biome check .",
    "check:fix": "biome check --write ."
  }
}
```

In CI use `biome ci --error-on-warnings .` so warnings also fail the build.

In monorepos run Biome from the repository root (it picks up nested `biome.json` files with `"root": false` and `"extends": "//"`). Running it only per workspace leaves root folders such as `scripts/` or `tools/` unchecked.

## What the config includes

- **Formatter**: 2 spaces, 120 columns, single quotes (JS, JSX, CSS, YAML), semicolons, no trailing commas, arrow parentheses only when needed. Markdown is formatted with frontmatter support; `CHANGELOG.md` is left untouched.
- **Linter**: Biome's recommended rules plus ~130 explicit rules. Everything enforced is an `error`; only `noBarrelFile`, `noImportCycles` and `noSkippedTests` are warnings.
- **Domains**: `react`, `test` and `drizzle` are enabled explicitly. Biome only auto-detects domains when no rule is configured, so a shared config must declare them.
- **Assist actions**: organize imports and sort object keys, interface members, JSX attributes, CSS properties and `package.json` fields.
- **Overrides**: relaxed rules for tests and stories, `scripts/`, `migrations/` and `shadcn/` components.
- **Plugins**: `no-lodash-root-import` (GritQL) forbids `import … from 'lodash'`. It is a plugin, not a `noRestrictedImports` option, so it keeps working when a project defines its own restricted imports.

## What each project defines

Biome replaces (does not merge) rule options and `files.includes` across `extends`, and `vcs` paths depend on the project layout. Keep these in the project config:

| Setting | When |
|---|---|
| `vcs` | Always: `useIgnoreFile: true` and the project's `defaultBranch`. |
| `linter.domains.next: "recommended"` | Next.js projects. |
| `linter.domains.reactNative: "recommended"` | React Native packages. Add `skip` to `correctness/noReactNativeRawText` for custom text components. |
| `linter.domains.playwright: "recommended"` | Projects with Playwright e2e tests. |
| `tailwind.stylesheet` | Tailwind v4 projects, pointing to the CSS file with `@theme`. |
| `files.includes` | Generated files and folders not covered by `.gitignore` (e.g. `"!src/payload-types.ts"`, Helm `templates/`). Start the list with `"**"`. |
| `style.noRestrictedImports` | Project-specific import restrictions. |

Example for a nested package in a monorepo:

```json
{
  "$schema": "../../node_modules/@biomejs/biome/configuration_schema.json",
  "extends": "//",
  "root": false,
  "files": {
    "includes": ["**", "!dist", "!src/types/openapi.d.ts"]
  },
  "linter": {
    "domains": {
      "next": "recommended"
    }
  }
}
```

## Adopting the stricter rules in an existing project

1. `npx @biomejs/biome migrate --write`
2. Re-sort Tailwind classes in a dedicated commit (Biome 2.6 uses the Tailwind v4 order):
   `npx @biomejs/biome lint --write --unsafe --only=nursery/useTailwindSortedClasses .`
3. Apply the safe fixes: `npx @biomejs/biome check --write .`
4. For rules without an automatic fix (e.g. `noShadow`, `useMaxParams`), record the existing violations so only new code fails:
   `npx @biomejs/biome lint --only=suspicious/noShadow --suppress --reason="Pre-existing, fix when touching the code" .`

Avoid a blind `--unsafe` on the whole project: the `noConsole` fix removes `console` calls.

## Biome upgrades

The peer range covers a single Biome minor because Biome can rename rules between minors (nursery rules in particular), and an unknown rule makes Biome exit with a configuration error.

When Biome releases a new version:

1. Dependabot opens a pull request in this repository.
2. Check out its branch, run `npm run upgrade-biome --workspace=@untile/biome-config` (`biome migrate`, peer range and README update), then the lint and the tests (a failing test names the rule that changed), and push the result to the pull request.
3. Merge it and release a new minor of this package.

## License

MIT
