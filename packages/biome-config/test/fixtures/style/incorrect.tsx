/**
 * Style violations fixture.
 *
 * Tests the following style rules:
 * - noImplicitBoolean: implicit boolean props in JSX
 */

function StyleViolations() {
  return (
    <div>
      <h1>{'Style Violations'}</h1>

      {/* noImplicitBoolean - implicit disabled (shorthand syntax) */}
      <input disabled type={'text'} />

      {/* noImplicitBoolean - implicit hidden */}
      <button hidden type={'button'}>
        {'Hidden Button'}
      </button>

      {/* noImplicitBoolean - implicit readOnly */}
      <textarea readOnly />

      {/* noImplicitBoolean - implicit checked */}
      <input checked type={'checkbox'} />

      {/* noImplicitBoolean - implicit required */}
      <input required type={'text'} />

      {/* Correct usage - explicit boolean */}
      <input disabled={true} type={'text'} />

      <button hidden={false} type={'button'}>
        {'Visible Button'}
      </button>

      <textarea readOnly={true} />

      <input checked={false} type={'checkbox'} />
    </div>
  );
}

export default StyleViolations;
