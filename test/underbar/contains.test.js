const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    numbers = [0, 1, 2, 3, 4];
    expect(_.contains(numbers, 0)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    numbers = [0, 1, 2, 3, 4];
    expect(_.contains(numbers, 5)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    numbers = {
      a: 0,
      b: 1,
      c: 2,
      d: 3
    };
    expect(_.contains(numbers, 2)).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    numbers = {
      a: 0,
      b: 1,
      c: 2,
      d: 3
    };
    expect(_.contains(numbers, 4)).toBe(false);
  });

});
