/* eslint-disable no-console */
/* eslint-disable no-process-exit */

/**
 * Module dependencies.
 */

const { execSync } = require('child_process');

/**
 * Constants.
 */

const validPrefixes = [
  'bugfix',
  'bump',
  'ci',
  'dependabot',
  'docs',
  'enhancement',
  'epic',
  'feature',
  'hotfix',
  'release',
  'revert',
  'support',
  'test'
];

const excludedBranches = ['development', 'main', 'master', 'production', 'sandbox', 'staging'];
const maxBranchNameLength = 100;

/**
 * Validate branch name.
 */

function validateBranchName() {
  const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

  if (excludedBranches.includes(branchName)) {
    console.log(`Branch name '${branchName}' is valid (excluded branch).`);

    return;
  }

  const pattern = new RegExp(`^(${validPrefixes.join('|')})/([a-z][a-z0-9-]*[a-z0-9])$`);

  if (!pattern.test(branchName) || branchName.length > maxBranchNameLength) {
    console.error('Error: Invalid branch name.');
    console.error(`Branch names should follow the pattern: <prefix>/<description>`);
    console.error(`Valid prefixes are: ${validPrefixes.join(', ')}`);
    console.error('The description should:');
    console.error('- Start with a lowercase letter');
    console.error('- Contain only lowercase letters, numbers, and hyphens');
    console.error('- Not end with a hyphen');
    console.error('- Not consist of only numbers');
    console.error(`- Not exceed ${maxBranchNameLength} characters in total length`);
    console.error(`The following branch names are excluded: ${excludedBranches.join(', ')}`);
    process.exit(1);
  }

  console.log(`Branch name '${branchName}' is valid.`);
}

/**
 * Export function.
 */

module.exports = {
  excludedBranches,
  validPrefixes,
  validateBranchName
};
