import React from 'react';

/**
 * Security violations fixture.
 *
 * Tests the following security rules:
 * - noBlankTarget: target="_blank" without rel="noopener noreferrer"
 * - noGlobalEval: usage of eval()
 * - noDangerouslySetInnerHtml: usage of dangerouslySetInnerHTML
 * - noSecrets: hardcoded sensitive data (API keys, tokens, passwords)
 */

// ========== noSecrets violations ==========

/**
 * ❌ Incorrect: Hardcoded API key
 */
// biome-ignore lint/security/noSecrets: Intentional violation for testing
const badApiKey = 'sk_test_51HqJ8aKZvKYlo2C8N3x7H9Ks5mP3zQ7Y2Vw8Aa9Bb7Cc6Dd5Ee4Ff3Gg2Hh1';

/**
 * ❌ Incorrect: Hardcoded AWS access key
 */
// biome-ignore lint/security/noSecrets: Intentional violation for testing
const badAwsCredentials = {
  accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
  secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
};

/**
 * ❌ Incorrect: Hardcoded JWT token
 */
// biome-ignore lint/security/noSecrets: Intentional violation for testing
const badJwtToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U';

/**
 * ❌ Incorrect: Hardcoded database password
 */
// biome-ignore lint/security/noSecrets: Intentional violation for testing
const badDbConfig = {
  database: 'myapp',
  host: 'localhost',
  password: 'SuperSecret123!@#',
  port: 5432,
  user: 'admin'
};

/**
 * ❌ Incorrect: Hardcoded private key
 */
// biome-ignore lint/security/noSecrets: Intentional violation for testing
const badPrivateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKL
-----END RSA PRIVATE KEY-----`;

function SecurityViolations() {
  // noBlankTarget - Missing rel="noopener noreferrer"
  const externalLink = (
    <a href='https://external.com' target='_blank'>
      External Link
    </a>
  );

  // noGlobalEval
  const evalResult = eval('2 + 2');
  const indirectEval = window.eval('1 + 1');

  // noDangerouslySetInnerHtml
  const userContent = '<script>alert("xss")</script>';
  const dangerousContent = (
    <div dangerouslySetInnerHTML={{ __html: userContent }} />
  );

  return (
    <div>
      {externalLink}
      {dangerousContent}
      <p>{evalResult}</p>
    </div>
  );
}

export default SecurityViolations;
