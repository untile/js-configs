#!/usr/bin/env sh

release() {
  # Install dependencies.
  yarn

  # Bump version.
  yarn version --no-git-tag-version --new-version ${2:-patch}

  # Get the new version number.
  local version=`grep -m1 version package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g'`

  # Generate changelog.
  github-changelog-generator -f ${version} -o untile -p ${1} -r js-configs > CHANGELOG.md

  # Add modified files.
  git add .

  # Get package name.
  local packageName=$(tr '[:lower:]' '[:upper:]' <<< ${1:0:1})${1:1}

  # Commit release with new version.
  git commit -m "Release ${packageName} ${version}"

  # Create tag.
  git tag ${1}/${version}
}

release $1 $2
