const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    const numbers = [1, 2, 3, 4];
    expect(_.last(numbers)).toBe(4);
  });

  it('returns the last 2 elements of an array', () => {
    const numbers = [1, 2, 3, 4];
    expect(_.last(numbers, 2)).toEqual([3, 4]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const numbers = [1, 2, 3, 4];
    expect(_.last(numbers, 6)).toEqual([1, 2, 3, 4]);

  });
});
