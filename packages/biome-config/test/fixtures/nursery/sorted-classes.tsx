/**
 * UseSortedClasses rule examples - correctly sorted CSS utility classes.
 */

/**
 * ✅ Correct: Button with sorted classes
 */
export function Button() {
  return (
    <button className='flex items-center justify-center rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600' type='button'>
      Click
    </button>
  );
}

/**
 * ✅ Correct: Card with sorted classes
 */
export function Card() {
  return (
    <div className='flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
      <h2 className='font-semibold text-gray-900 text-lg'>Title</h2>
      <p className='text-gray-600 text-sm'>Description</p>
    </div>
  );
}
