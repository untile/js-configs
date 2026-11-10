/**
 * Align `@untile/biome-config` with the installed Biome version.
 *
 * 1. Runs `biome migrate --write` so renamed or deprecated options are updated.
 * 2. Keeps `$schema` pointing to the installed schema (no version in the URL).
 * 3. Moves the peer range to the installed minor when the minor changes.
 *
 * Usage: `npm run upgrade-biome --workspace=@untile/biome-config`
 */

/**
 * Module dependencies.
 */

const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

/**
 * Constants.
 */

const packageDir = path.resolve(__dirname, '..');
const configPath = path.join(packageDir, 'biome.json');
const packagePath = path.join(packageDir, 'package.json');
const schema = '../../node_modules/@biomejs/biome/configuration_schema.json';
const biomeBin = require.resolve('@biomejs/biome/bin/biome', { paths: [packageDir] });
const { version } = require(require.resolve('@biomejs/biome/package.json', { paths: [packageDir] }));

/**
 * Run Biome in the package directory.
 */

function biome(args) {
  const result = spawnSync(process.execPath, [biomeBin, ...args], { cwd: packageDir, stdio: 'inherit' });

  if (result.status !== 0) {
    throw new Error(`biome ${args.join(' ')} exited with ${result.status}`);
  }
}

/**
 * Update the configuration and the peer range.
 */

function upgrade() {
  biome(['migrate', '--write']);

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  config.$schema = schema;
  fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
  biome(['format', '--write', 'biome.json']);

  const manifest = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  const [major, minor] = version.split('.').map(Number);
  const range = manifest.peerDependencies['@biomejs/biome'];
  const upper = `${major}.${minor + 1}.0`;

  if (!range.endsWith(`<${upper}`)) {
    manifest.peerDependencies['@biomejs/biome'] = `>=${version} <${upper}`;
    fs.writeFileSync(packagePath, `${JSON.stringify(manifest, null, 2)}\n`);
  }

  process.stdout.write(`Biome ${version}: peer range is ${manifest.peerDependencies['@biomejs/biome']}\n`);
}

upgrade();
