const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    numbers = [1, 2, 3, 4];
    expect(_.map(numbers, (number => number * number))).toEqual([1, 4, 9, 16]);
  });
});
