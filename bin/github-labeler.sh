#!/bin/bash

# Define the monorepo packages directory.
packages_dir="packages"

# Create the .github directory if it does not exist.
mkdir -p .github

# Create or clear the labeler.yml file.
echo "# Auto-generated labeler.yml" > .github/labeler.yml

# Iterate through subdirectories in 'packages' and generate entries for labeler.yml file.
for package in $(find "$packages_dir" -mindepth 1 -maxdepth 1 -type d); do
  package_name=$(basename "$package")
  echo "Generating entry for package: $package_name"

  # Add entry for the package to the labeler.yml file.
  cat <<EOT >> .github/labeler.yml

# Label for package $package_name.
$package_name:
  - $package/**/*
EOT
done

echo "Generated .github/labeler.yml based on monorepo packages."
