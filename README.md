<p align="center">
  <br><img width="250" src="https://untile.pt/logo.png" /><br>
</p>

<h4 align="center">
  A common configs and conventions for Untile projects.
</h4>

<p align="center">
  <a href="https://github.com/untile/js-configs/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Untile js-config is released under the MIT license." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=untiledigital">
    <img src="https://img.shields.io/twitter/follow/untiledigital.svg?label=Follow%20@untiledigital" alt="Follow @untiledigital" />
  </a>
</p>

## Setup

This project uses [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) to manage multiple packages.

### Install dependencies

```sh
yarn
```

### Run lint

```sh
yarn lint
```

### Run full test suite

```sh
yarn test
```

### Release

Be sure to have configured `GITHUB_TOKEN` in your globals.

```sh
yarn release:[<package-name>] [<new version> | major | minor | patch]
git push origin master && git push --tags
```
