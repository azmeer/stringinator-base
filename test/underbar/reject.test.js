const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(_.reject(numbers, (el => el % 2 === 1))).toEqual([2, 4]);
  });

  it('rejects null values from an object', () => {
    const fruitCount = {
      apple: 1,
      orange: 35,
      banana: null,
      mango: null,
      pineapple: 5000
    };
    expect(_.reject(fruitCount, (fruit => fruit === null))).toEqual([1, 35, 5000]);
  });
});
