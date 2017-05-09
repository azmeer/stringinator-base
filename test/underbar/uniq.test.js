const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const numbers = [1, 2, 2, 3, 4, 5, 6, 7, 7, 7, 8, 8, 9];
    expect(_.uniq(numbers)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
