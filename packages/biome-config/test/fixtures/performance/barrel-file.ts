/**
 * Barrel file fixture.
 *
 * Tests the following performance rule:
 * - noBarrelFile: warns against barrel files (re-exporting everything)
 *
 * Barrel files can increase bundle size and slow down tree-shaking.
 */

export * from './correct';
export * from './incorrect';
export * from './security-vulnerabilities';
