import React from 'react';

/**
 * Assist action fixture - useSortedAttributes.
 *
 * Tests the useSortedAttributes assist action which should suggest
 * sorting JSX/HTML attributes alphabetically.
 */

function UnsortedAttributes() {
  return (
    <div>
      {/* Attributes are not in alphabetical order */}
      <button
        type={'button'}
        onClick={() => console.log('clicked')}
        disabled={false}
        className={'btn primary'}
        aria-label={'Save button'}
        id={'save-btn'}
        data-testid={'save-button'}
      >
        {'Save'}
      </button>

      {/* Input with unsorted attributes */}
      <input
        value={'test'}
        type={'text'}
        placeholder={'Enter text'}
        onChange={() => {}}
        name={'username'}
        id={'username-input'}
        disabled={false}
        className={'input-field'}
        aria-describedby={'username-help'}
      />

      {/* Img with unsorted attributes */}
      <img
        src={'image.jpg'}
        alt={'Description'}
        width={200}
        loading={'lazy'}
        height={150}
        className={'responsive-image'}
      />

      {/* Correctly sorted for reference */}
      <button
        aria-label={'Delete button'}
        className={'btn danger'}
        data-testid={'delete-button'}
        disabled={false}
        id={'delete-btn'}
        onClick={() => console.log('deleted')}
        type={'button'}
      >
        {'Delete'}
      </button>
    </div>
  );
}

export default UnsortedAttributes;
