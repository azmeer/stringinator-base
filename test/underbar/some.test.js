const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const numbers = [2, 4, 5, 6, 8];
    expect(_.some(numbers, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const numbers = [2, 4, 6, 8];
    expect(_.some(numbers, num => num % 2 === 1)).toBe(false);
  });

});
