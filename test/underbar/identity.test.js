const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect (_.identity(null)).toBe(null);    
  });

  it('returns the number if given a number', () => {
    expect (_.identity(3)).toBe(3);
  });

  it('returns the same array if given an array', () => {
    const numbers = [1, 2, 3, 4];
    expect (_.identity(numbers)).toBe(numbers);
  });

  it('returns the same object if given an object', () => {
    const fruit = {
      1: 'apple',
      2: 'cherry',
      3: 'orange'
    };
    expect (_.identity(fruit)).toBe(fruit);
  });
});

