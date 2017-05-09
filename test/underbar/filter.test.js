const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(_.filter(numbers, (el => el % 2 === 1))).toEqual([1, 3, 5]);
  });

  it('filters an object to only numeric values', () => {
    const lettersAndNumbers = {
      greg: 1,
      proops: 34,
      ryan: 'styles',
      colin: 'mochrie',
      wayne: 45,
      brady: 2
    };
    expect(_.filter(lettersAndNumbers, (el => typeof(el) === 'number'))).toEqual([1, 34, 45, 2]);
  });
});
