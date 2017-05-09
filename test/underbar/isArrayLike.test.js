const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const letters = ['a', 'b', 'c', 'd'];
    expect(_.isArrayLike(letters)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeFruits = {
      length: 3,
      1: 'apples',
      2: 'pears',
      3: 'papaya'
    };
    expect(_.isArrayLike(arrayLikeFruits)).toBe(true);    
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayLikeFruits = {
      length: 'b',
      1: 'apples',
      2: 'pears',
      3: 'papaya'
    };
    expect(_.isArrayLike(nonArrayLikeFruits)).toBe(false);
  });
});
