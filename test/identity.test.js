const _ = require ('../underbar');

describe ('identity()', () => {
  it('returns a null when passed a null', () => {
    expect (_.identity(null)).toBe(null);
  });

  it('returns a number when passed a number', () => {
    expect (_.identity(3)).toBe(3);
  });

  it('returns an array when passed an array', () => {
    const numbers = [1, 2, 3, 4];
    expect (_.identity(numbers)).toBe(numbers);
  });

  it('returns an object when passed an object', () => {
    const fruit = {
      1: 'apple',
      2: 'cherry',
      3: 'orange'
    };
    expect (_.identity(fruit)).toBe(fruit);
  });
  
});
     
