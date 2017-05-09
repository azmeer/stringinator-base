const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const numbers = [1, 2, 3, 4];
    let count = 0;
    _.each(numbers, ((number, index, array) => {
      expect(number).toBe(array[index]);
      count++;
    }));
    expect(count).toBe(4);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrayLikeNumbers = {
      length: 4,
      0: 1,
      1: 2,
      2: 3,
      3: 4
    };
    let count = 0;
    _.each(arrayLikeNumbers, ((number, index, obj) => {
      expect(number).toBe(obj[index]);
      count++;
    }));
    expect(count).toBe(4);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const numbers = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    let count = 0;
    _.each(numbers, ((number, index, obj) => {
      expect(number).toBe(obj[index]);
      count++;
    }));
    expect(count).toBe(4);
  });
});

