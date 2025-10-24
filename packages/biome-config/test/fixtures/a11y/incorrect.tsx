import React from 'react';

/**
 * Accessibility violations fixture.
 *
 * Tests the following a11y rules:
 * - noAccessKey: accessKey attribute usage
 * - useAltText: img without alt text
 * - useKeyWithClickEvents: onClick without keyboard events
 * - useValidAnchor: anchor without href
 * - useValidAriaRole: invalid ARIA role
 */

function AccessibilityViolations() {
  return (
    <div>
      <h1>{'Accessibility Violations'}</h1>

      {/* noAccessKey - accessKey is not recommended */}
      <button accessKey={'s'} type={'button'}>
        {'Save'}
      </button>

      {/* useAltText - missing alt attribute */}
      <img src={'photo.jpg'} />

      {/* useAltText - empty alt is acceptable for decorative images */}
      <img alt={''} src={'decorative.jpg'} />

      {/* useKeyWithClickEvents - onClick without onKeyDown/onKeyUp/onKeyPress */}
      <div onClick={() => alert('clicked')}>
        {'Click me'}
      </div>

      {/* useKeyWithClickEvents - button is fine because it's semantic */}
      <button onClick={() => alert('clicked')} type={'button'}>
        {'This is fine'}
      </button>

      {/* useValidAnchor - anchor without href */}
      <a>{'Invalid link'}</a>

      {/* useValidAnchor - anchor with href is fine */}
      <a href={'#section'}>{'Valid link'}</a>

      {/* useValidAriaRole - invalid ARIA role */}
      <div role={'invalid-role-name'}>
        {'Content'}
      </div>

      {/* useValidAriaRole - valid role */}
      <div role={'navigation'}>
        {'Valid navigation'}
      </div>
    </div>
  );
}

export default AccessibilityViolations;
