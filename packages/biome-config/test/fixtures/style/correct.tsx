/**
 * Style correct examples.
 *
 * Demonstrates proper JSX/style patterns that should pass all style rules.
 */

/**
 * ✅ Correct: Explicit boolean props.
 */

function FormWithExplicitBooleans() {
  const isSubmitting = false;

  return (
    <form>
      {/* ✅ Explicit boolean value */}
      <input disabled={true} placeholder={'Username'} type={'text'} />

      <input disabled={false} placeholder={'Password'} type={'password'} />

      <input placeholder={'Email'} required={true} type={'email'} />

      <button disabled={isSubmitting} type={'submit'}>
        Submit
      </button>

      <input checked={true} readOnly={true} type={'checkbox'} />

      <textarea disabled={false} readOnly={false} required={true} />
    </form>
  );
}

/**
 * ✅ Correct: Proper prop patterns.
 */

interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

function CustomButton({ disabled = false, loading = false, onClick }: ButtonProps) {
  return (
    <button disabled={disabled || loading} onClick={onClick} type={'button'}>
      {loading ? 'Loading...' : 'Click me'}
    </button>
  );
}

/**
 * ✅ Correct: Conditional rendering with explicit checks.
 */

function ConditionalComponent({ showContent = false }: { showContent?: boolean }) {
  return (
    <div>
      {showContent === true && <p>Content is visible</p>}
      {showContent === false && <p>Content is hidden</p>}
    </div>
  );
}

/**
 * ✅ Correct: Complex boolean expressions.
 */

function ComplexForm() {
  const hasError = false;
  const isValid = true;
  const isDirty = false;

  const canSubmit = isValid === true && hasError === false && isDirty === true;

  return (
    <form>
      <input className={hasError ? 'error' : ''} type={'text'} />

      <button disabled={canSubmit === false} type={'submit'}>
        Submit
      </button>

      <div>
        <span>Valid: {isValid === true ? 'Yes' : 'No'}</span>
        <span>Has Error: {hasError === true ? 'Yes' : 'No'}</span>
        <span>Is Dirty: {isDirty === true ? 'Yes' : 'No'}</span>
      </div>
    </form>
  );
}

export { ComplexForm, ConditionalComponent, CustomButton, FormWithExplicitBooleans };
