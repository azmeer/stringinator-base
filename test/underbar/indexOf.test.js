const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const numbers = ['a', 'b', 'c', 'd'];
    expect(_.indexOf(numbers, 'a')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const numbers = ['a', 'b', 'c', 'd'];
    expect(_.indexOf(numbers, 'd')).toBe(3);
  });

  it('returns -1 for a missing value', () => {
    const numbers = [1, 2, 3, 4];
    expect(_.indexOf(numbers, 5)).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const numbers = ['a', 'b', 'c', 'd', 'b'];
    expect(_.indexOf(numbers, 'b')).toBe(1);
  });

  it('starts searching at the given offset', () => {
    const numbers = ['a', 'b', 'c', 'd', 'b'];
    expect(_.indexOf(numbers, 'b', 2)).toBe(4);
  });

});
