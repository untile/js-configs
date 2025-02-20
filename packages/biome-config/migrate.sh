#!/bin/bash

# Create Prettier config file.
echo "📝 Creating Prettier config file..."
echo "module.exports = require('../prettier-config/src/index.js');" > prettier.config.js

# Run Biome migration commands.
echo -e " 🚀 Running ESLint migration..."
biome migrate eslint --write --include-inspired

echo "🚀 Running Prettier migration..."
biome migrate prettier --write

# Clean up configuration files.
echo "🧹 Cleaning up temporary files..."
rm prettier.config.js

echo "✅ Migration completed!"