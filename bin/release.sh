#!/usr/bin/env bash

# Release a workspace package: bump its version, add the merged pull requests labelled with the
# package (`.github/labeler.yml`) to its `CHANGELOG.md`, commit and tag `<package>/v<version>`.
#
# Usage (from the package directory, through `npm run release:<package> [major|minor|patch|<version>]`).
# Requires the GitHub CLI (`gh`), authenticated with access to the repository.

set -euo pipefail

package=$1
bump=${2:-patch}
name=${package#@*/}

# Fail early (before any change) when `gh` is missing or not authenticated.
repository=$(gh repo view --json nameWithOwner --jq .nameWithOwner)

# Install dependencies.
npm install

# Pull requests merged since the previous release of this package (all of them on the first release).
previous_tag=$(git tag --list "${name}/v*" --sort=-v:refname | awk 'NR == 1')
search=''

if [ -n "${previous_tag}" ]; then
  search="merged:>$(git log -1 --format=%cI "${previous_tag}")"
fi

entries=$(gh pr list \
  --repo "${repository}" \
  --state merged \
  --base master \
  --label "${name}" \
  --search "${search}" \
  --limit 1000 \
  --json number,title,url,author,mergedAt \
  --jq 'sort_by(.mergedAt) | reverse | .[] |
    (.author.login | sub("^app/"; "")) as $login |
    (if .author.is_bot then "https://github.com/apps/\($login)" else "https://github.com/\($login)" end) as $profile |
    "- \(.title) [\\#\(.number)](\(.url)) ([\($login)](\($profile)))"')

# Bump version.
npm version "${bump}" --no-git-tag-version

version=$(node -p "require('./package.json').version")
tag="${name}/v${version}"

# Add the release to the top of the changelog.
section="## [${tag}](https://github.com/${repository}/releases/tag/${tag}) ($(date +%Y-%m-%d))"

if [ -n "${entries}" ]; then
  section="${section}"$'\n'"${entries}"
fi

{
  printf '# Changelog\n\n%s\n' "${section}"

  if [ -f CHANGELOG.md ]; then
    printf '\n'
    tail -n +3 CHANGELOG.md
  fi
} > CHANGELOG.md.tmp

mv CHANGELOG.md.tmp CHANGELOG.md

# Commit release with new version and create the tag.
git add package.json CHANGELOG.md "$(git rev-parse --show-toplevel)/package-lock.json"
git commit -m "Release $(tr '[:lower:]' '[:upper:]' <<< "${name:0:1}")${name:1} v${version}"
git tag "${tag}"
