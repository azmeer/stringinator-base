const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('reduces an object containing people to a single string of their ages', () => {
    const people = {
      'Harriet' : {age: 12},
      'Lazarus' : {age: 999},
      'Bethany' : {age: 14}
    };
    const result = _.reduce(people, (ages, person) =>
                            ages + ((ages.length > 0) ? ', ': '') + person.age, '');
    expect(result).toEqual('12, 999, 14');
  });

  it('reduces an array-like object to a sum of its values', () => {
    const arrayLikeObj = {
      length: 3,
      0: 45,
      1: 25,
      2: 30
    };
    const result = _.reduce(arrayLikeObj, (sum, number) => sum + number, 0);
    expect(result).toBe(100);
  });
});
