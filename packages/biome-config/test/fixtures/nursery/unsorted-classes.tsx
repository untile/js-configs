/**
 * UseSortedClasses rule examples - incorrectly sorted CSS utility classes.
 * These should trigger lint warnings.
 */

/**
 * ❌ Incorrect: Button with unsorted classes
 */
export function Button() {
  return (
    <button className='px-4 text-white rounded py-2 bg-blue-500 hover:bg-blue-600 flex items-center justify-center' type='button'>
      Click
    </button>
  );
}

/**
 * ❌ Incorrect: Card with unsorted classes
 */
export function Card() {
  return (
    <div className='p-6 gap-4 shadow-sm flex-col bg-white rounded-lg flex border-gray-200 border'>
      <h2 className='text-gray-900 text-lg font-semibold'>Title</h2>
      <p className='text-gray-600 text-sm'>Description</p>
    </div>
  );
}
