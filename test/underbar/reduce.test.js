const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const numbers = [0, 1, 2, 3];
    expect(_.reduce(numbers, (acc, number) => acc + number, 0)).toBe(6);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const numbers = [1, 2, 3, 4];
    expect(_.reduce(numbers, (acc, number) => acc + number)).toBe(10);
  });

});
