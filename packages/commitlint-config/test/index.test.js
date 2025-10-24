/**
 * Module dependencies.
 */

const fs = require('node:fs');
const path = require('node:path');

const userConfig = require('../src/index.js');

/**
 * Helper functions.
 */

/**
 * Parse correct fixtures from file.
 *
 * @returns {Array} Array of commit messages
 */

function parseCorrectFixtures() {
  const content = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'correct.txt'),
    'utf8'
  );

  const messages = [];
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip comment lines and empty lines
    if (line.startsWith('#') || line.trim() === '') {
      continue;
    }

    // Check if this is a multi-line commit (has a blank line after the header)
    // Multi-line commits are specifically marked in our fixtures
    if (line === 'Add foobar' && i + 2 < lines.length && lines[i + 1] === '' && lines[i + 2].includes('This commit')) {
      // This is our multi-line commit example
      messages.push(`${line}\n\n${lines[i + 2]}`);
      // Skip the next two lines we've already processed
      i += 2;
    } else {
      // Single line commit
      messages.push(line);
    }
  }

  return messages;
}

/**
 * Parse incorrect fixtures from file with expected errors.
 *
 * @returns {Array} Array of {message, expectedError, expectedMessage}
 */

function parseIncorrectFixtures() {
  const content = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'incorrect.txt'),
    'utf8'
  );

  const fixtures = [];
  const lines = content.split('\n');
  let currentMessage = null;
  let expectedError = null;
  let expectedErrorMessage = null;

  for (const line of lines) {
    if (line.startsWith('#')) {
      // Comment line, skip
      continue;
    }

    if (line.startsWith(':::expected:')) {
      expectedError = line.replace(':::expected:', '').trim();
    } else if (line.startsWith(':::message:')) {
      expectedErrorMessage = line.replace(':::message:', '').trim();
    } else if (line.trim()) {
      // If we have a previous message with expected error, save it
      if (currentMessage !== null && expectedError) {
        fixtures.push({
          expectedError,
          expectedMessage: expectedErrorMessage,
          message: currentMessage
        });
      }

      // Start new message
      currentMessage = line;
      expectedError = null;
      expectedErrorMessage = null;
    }
  }

  // Don't forget the last one
  if (currentMessage !== null && expectedError) {
    fixtures.push({
      expectedError,
      expectedMessage: expectedErrorMessage,
      message: currentMessage
    });
  }

  return fixtures;
}

/**
 * Test suite.
 */

describe('@untile/commitlint-config-untile', () => {
  let linter;

  beforeAll(async () => {
    const { default: lint } = await import('@commitlint/lint');
    const { default: load } = await import('@commitlint/load');
    const conventionalConfig = await import('@commitlint/config-conventional');

    // Get the package directory (parent of test directory)
    const packageDir = path.resolve(__dirname, '..');

    // Manually extend the conventional config to avoid ESM resolution issues
    // in npm workspaces with commitlint v20
    // Clear extends to avoid resolution
    const config = {
      ...userConfig,
      extends: []
    };

    linter = async message => {
      const preparedConfig = await load(config, { cwd: packageDir });

      // Merge with conventional config rules
      const mergedRules = {
        ...conventionalConfig.default.rules,
        ...preparedConfig.rules
      };

      return lint(message, mergedRules, {
        parserOpts: preparedConfig.parserPreset?.parserOpts,
        ...preparedConfig
      });
    };
  });

  describe('correct', () => {
    const correctMessages = parseCorrectFixtures();
    const testCases = correctMessages.map(message => {
      // Create a short description for the test name
      const firstLine = message.split('\n')[0];
      const description = firstLine.length > 50
        ? `${firstLine.substring(0, 50)}...`
        : firstLine;

      return { description, message };
    });

    it.each(testCases)(
      'should validate correctly: $description',
      async ({ message }) => {
        const result = await linter(message);

        expect(result.valid).toBe(true);
      }
    );
  });

  describe('incorrect', () => {
    const incorrectFixtures = parseIncorrectFixtures();

    it.each(incorrectFixtures)(
      'should fail validation: $message',
      async ({ expectedError, expectedMessage, message }) => {
        const result = await linter(message);

        expect(result.valid).toBe(false);

        // Check for expected error
        if (expectedError) {
          const hasExpectedError = result.errors.some(
            error => error.name === expectedError
          );

          expect(hasExpectedError).toBe(true);
        }

        // Check for expected error message if provided
        if (expectedMessage) {
          const hasExpectedMessage = result.errors.some(
            error => error.message === expectedMessage
          );

          expect(hasExpectedMessage).toBe(true);
        }
      }
    );
  });
});
