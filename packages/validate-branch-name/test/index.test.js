/* eslint-disable no-sync */

/**
 * Module dependencies.
 */

const { excludedBranches, validPrefixes, validateBranchName } = require('../src/index');
const childProcess = require('child_process');

/**
 * Mock dependencies.
 */

jest.mock('child_process');

/**
 * Test suite.
 */

describe('validateBranchName', () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
  const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it.each(validPrefixes)('should allow valid branch name with prefix %s', prefix => {
    childProcess.execSync.mockReturnValue(`${prefix}/some-branch-name`);
    validateBranchName();
    expect(mockConsoleLog).toHaveBeenCalledWith(`Branch name '${prefix}/some-branch-name' is valid.`);
    expect(mockExit).not.toHaveBeenCalled();
  });

  it.each(excludedBranches)('should allow excluded branch name %s', branch => {
    childProcess.execSync.mockReturnValue(branch);
    validateBranchName();
    expect(mockConsoleLog).toHaveBeenCalledWith(`Branch name '${branch}' is valid (excluded branch).`);
    expect(mockExit).not.toHaveBeenCalled();
  });

  it('should reject branch name without valid prefix', () => {
    childProcess.execSync.mockReturnValue('invalid-branch');
    validateBranchName();
    expect(mockConsoleError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });

  it('should reject branch name with valid prefix but no description', () => {
    childProcess.execSync.mockReturnValue('feature/');
    validateBranchName();
    expect(mockConsoleError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });

  it('should reject branch name with valid prefix but invalid characters', () => {
    childProcess.execSync.mockReturnValue('feature/invalid_branch@name');
    validateBranchName();
    expect(mockConsoleError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });

  it('should allow branch name with valid prefix and valid characters', () => {
    childProcess.execSync.mockReturnValue('feature/valid-branch-name-123');
    validateBranchName();
    expect(mockConsoleLog).toHaveBeenCalledWith('Branch name \'feature/valid-branch-name-123\' is valid.');
    expect(mockExit).not.toHaveBeenCalled();
  });

  it('should reject branch name with uppercase letters', () => {
    childProcess.execSync.mockReturnValue('feature/UPPERCASE-BRANCH');
    validateBranchName();
    expect(mockConsoleError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });

  it('should reject branch name with spaces', () => {
    childProcess.execSync.mockReturnValue('feature/branch with spaces');
    validateBranchName();
    expect(mockConsoleError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });

  it('should reject branch name with special characters', () => {
    childProcess.execSync.mockReturnValue('feature/branch-name!@#$%^&*()');
    validateBranchName();
    expect(mockConsoleError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });

  it('should reject branch name with multiple slashes', () => {
    childProcess.execSync.mockReturnValue('feature/multiple/slashes');
    validateBranchName();
    expect(mockConsoleError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });

  it('should reject branch name with only numbers after prefix', () => {
    childProcess.execSync.mockReturnValue('feature/12345');
    validateBranchName();
    expect(mockConsoleError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });

  it('should allow branch name with numbers and letters', () => {
    childProcess.execSync.mockReturnValue('feature/branch-123-name');
    validateBranchName();
    expect(mockConsoleLog).toHaveBeenCalledWith('Branch name \'feature/branch-123-name\' is valid.');
    expect(mockExit).not.toHaveBeenCalled();
  });

  it('should reject branch name with valid prefix but exceeding maximum length', () => {
    const longBranchName = 'feature/' + 'a'.repeat(100); // eslint-disable-line prefer-template

    childProcess.execSync.mockReturnValue(longBranchName);
    validateBranchName();
    expect(mockConsoleError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });

  it('should reject branch name with valid prefix but starting with a number', () => {
    childProcess.execSync.mockReturnValue('feature/123-invalid-start');
    validateBranchName();
    expect(mockConsoleError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });

  it('should reject branch name with valid prefix but ending with a hyphen', () => {
    childProcess.execSync.mockReturnValue('feature/invalid-end-');
    validateBranchName();
    expect(mockConsoleError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});
