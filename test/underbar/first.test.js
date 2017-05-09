const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    const numbers = [1, 2, 3, 4,];
    expect(_.first(numbers)).toBe(1);
  });

  it('returns the first 2 elements of an array', () => {
    const numbers = [1, 2, 3, 4,];
    expect(_.first(numbers, 2)).toBe([1, 2]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const numbers = [1, 2, 3, 4,];
    expect(_.first(numbers, 6)).toBe(numbers);
  });
});
