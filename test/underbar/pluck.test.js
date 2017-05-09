const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      {name: 'Harry', age: 16},
      {name: 'Hermione', age: 15},
      {name: 'Ron', age: 12}
    ];
    expect(_.pluck(people, 'age')).toEqual([16, 15, 12]);
  });

});
