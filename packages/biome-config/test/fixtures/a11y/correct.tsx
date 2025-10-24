import type React from 'react';

/**
 * Accessibility correct examples.
 *
 * Demonstrates proper accessibility patterns that should pass all a11y rules.
 */

function AccessibleComponent() {
  const handleClick = () => {
    // Button clicked
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      // Element activated via keyboard
    }
  };

  return (
    <div>
      {/* ✅ Images with proper alt text - no img elements, would use Next.js Image */}
      {/* <Image src="/profile.jpg" alt="User profile" width={100} height={100} /> */}
      {/* <Image src="/logo.png" alt="Company logo" width={200} height={50} /> */}
      {/* <Image src="/decorative.svg" alt="" width={50} height={50} /> */}

      {/* ✅ Valid anchor links */}
      <a href={'https://example.com'}>External Link</a>
      <a href={'/about'}>Internal Link</a>
      <a href={'#section'}>Anchor Link</a>

      {/* ✅ Use semantic button instead of div with role */}
      <button onClick={handleClick} onKeyDown={handleKeyPress} type={'button'}>
        Clickable element with keyboard support
      </button>

      {/* ✅ Use semantic nav instead of div with role */}
      <nav>
        <ul>
          <li><a href={'/home'}>Home</a></li>
          <li><a href={'/about'}>About</a></li>
        </ul>
      </nav>

      <div role={'alert'}>
        This is an important message
      </div>

      {/* ✅ Use semantic main instead of div with role */}
      <main>
        <h1>Main Content</h1>
        <p>Content goes here</p>
      </main>

      {/* ✅ Proper button usage (no accessKey) */}
      <button onClick={handleClick} type={'button'}>
        Save
      </button>

      <button type={'submit'}>
        Submit Form
      </button>

      {/* ✅ Form inputs with labels */}
      <label htmlFor={'username'}>
        Username:
        <input id={'username'} type={'text'} />
      </label>

      {/* ✅ ARIA labels where appropriate */}
      <button aria-label={'Close dialog'} onClick={handleClick} type={'button'}>
        ×
      </button>
    </div>
  );
}

export default AccessibleComponent;
