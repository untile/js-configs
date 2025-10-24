/**
 * Assist action fixture - useSortedKeys.
 *
 * Tests the useSortedKeys assist action which should suggest
 * sorting object keys alphabetically.
 */

// Object with unsorted keys
const config = {
  zebra: 1,
  apple: 2,
  mango: 3,
  banana: 4,
  cherry: 5
};

// Nested object with unsorted keys
const nestedConfig = {
  zulu: {
    yankee: 'y',
    alpha: 'a',
    bravo: 'b'
  },
  alpha: {
    zebra: 'z',
    alpha: 'a'
  }
};

// Type with unsorted keys
type UserProfile = {
  username: string;
  email: string;
  age: number;
  address: string;
};

// Interface with unsorted keys
interface Product {
  name: string;
  id: number;
  description: string;
  category: string;
}

export {
  config,
  nestedConfig
};

export type {
  Product,
  UserProfile
};
