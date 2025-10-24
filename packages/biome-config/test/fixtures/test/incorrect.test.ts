/**
 * Test file fixture.
 *
 * Tests the following rules (from test domain):
 * - noSkippedTests: detects .skip and .only in tests
 */

import { describe, expect, it } from '@jest/globals';

describe('Example Test Suite', () => {
  // noSkippedTests - .skip should warn
  it.skip('should be skipped', () => {
    expect(true).toBe(true);
  });

  // noSkippedTests - .only should warn
  it.only('only this test runs', () => {
    expect(1 + 1).toBe(2);
  });

  // noSkippedTests - describe.skip should warn
  describe.skip('skipped describe block', () => {
    it('nested test', () => {
      expect(false).toBe(false);
    });
  });

  // noSkippedTests - describe.only should warn
  describe.only('only this describe runs', () => {
    it('nested test', () => {
      expect(true).toBe(true);
    });
  });

  // Correct usage - no .skip or .only
  it('should pass', () => {
    expect(2 + 2).toBe(4);
  });

  describe('nested describe', () => {
    it('nested test should also pass', () => {
      expect('test').toBe('test');
    });
  });
});
