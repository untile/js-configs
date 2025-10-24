/**
 * Security correct examples.
 *
 * Demonstrates secure coding practices that should pass all security rules.
 */

function SecureComponent() {
  /**
   * ✅ Correct: External links with proper security attributes.
   */

  const externalLinks = (
    <div>
      <a href={'https://external.com'} rel={'noopener noreferrer'} target={'_blank'}>
        External Link
      </a>
      <a href={'https://docs.example.com'} rel={'noopener noreferrer'} target={'_blank'}>
        Documentation
      </a>
    </div>
  );

  /**
   * ✅ Correct: No direct eval usage.
   * Use safer alternatives like Function constructor with controlled input,
   * or better yet, avoid dynamic code execution.
   */

  function calculateSafely(operation: 'add' | 'subtract', a: number, b: number): number {
    switch (operation) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      default:
        throw new Error('Invalid operation');
    }
  }

  /**
   * ✅ Correct: Sanitize HTML content or use safe rendering methods.
   */

  function renderSafeContent(content: string) {
    // Option 1: Just render as text
    return <div>{content}</div>;

    // Option 2: If HTML is needed, use a sanitization library like DOMPurify
    // const clean = DOMPurify.sanitize(content);
    // return <div dangerouslySetInnerHTML={{ __html: clean }} />;
  }

  /**
   * ✅ Correct: Use secure markdown rendering libraries.
   */

  const sampleMarkdown = 'Hello World - Safe markdown content.';

  /**
   * ✅ Correct: Handle user input safely.
   */

  function handleUserInput(input: string) {
    // Validate and sanitize input
    const sanitized = input.trim().replace(/[<>]/g, '');

    return sanitized;
  }

  /**
   * ✅ Correct: Validate URLs before using them.
   */

  function isValidUrl(url: string): boolean {
    try {
      const parsed = new URL(url);

      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
      return false;
    }
  }

  function renderSafeLink(url: string, label: string) {
    if (!isValidUrl(url)) {
      return <span>{label} (invalid URL)</span>;
    }

    return (
      <a href={url} rel={'noopener noreferrer'} target={'_blank'}>
        {label}
      </a>
    );
  }

  return (
    <div>
      <h1>Secure Component Examples</h1>

      {externalLinks}

      <div>
        <p>Safe calculation: {calculateSafely('add', 5, 3)}</p>
      </div>

      {/* biome-ignore lint/security/noSecrets: Test string for XSS demonstration */}
      {renderSafeContent('<script>alert("xss")</script>')}

      {renderSafeLink('https://example.com', 'Safe External Link')}

      <div>{sampleMarkdown}</div>

      <form>
        <input onChange={e => handleUserInput(e.target.value)} placeholder={'Enter safe text'} type={'text'} />
      </form>
    </div>
  );
}

export default SecureComponent;
