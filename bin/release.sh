#!/usr/bin/env sh

release() {
  local tag_prefix=$(echo "${1}" | sed 's/^@[^/]*\///')

  # Install dependencies.
  npm install

  # Bump version.
  npm version ${2:-patch} --no-git-tag-version

  # Get the new version number.
  local version=`grep -m1 "\"version\"" package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g'`

  # Generate changelog.
  github-changelog-generator --future-release ${version} --package-name ${1} --rebuild

  # Add modified files.
  git add .

  # Get package name.
  local packageName=$(tr '[:lower:]' '[:upper:]' <<< ${tag_prefix:0:1})${tag_prefix:1}

  # Commit release with new version.
  git commit -m "Release ${packageName} v${version}"

  # Create tag.
  git tag ${tag_prefix}/v${version}
}

release $1 $2
