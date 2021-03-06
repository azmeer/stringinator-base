const _ = require('./underbar');

const first = function(str, n=1) {
  const firstChars = _.first(str.split(''), n);
  return (n <= 1) ? firstChars : firstChars.join('');
};

const last = function(str, n=1) {
  const lastChars = _.last(str.split(''), n);
  return (n <= 1) ? lastChars : lastChars.join('');
};

const removeChar = function(str, target) {
  return _.reject(str.split(''), character => character === target).join('');
};

const hasChar = function(str, target) {
  return _.some(str.split(''), character => character === target);
};

const isOnlyDigits = function(str) {
  return _.every(str.split(''), character => !isNaN(parseInt(character)));
};

const filterToOnlyDigits = function(str) {
  return _.reject(str.split(''), character => isNaN(parseInt(character))).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  return _.map(obj, string => truncateString(string, maxLength));
};

const countChars = function(str) {
  return _.reduce(str.split(''), (countObj, character) => {
    (countObj[character]++) || (countObj[character] = 1);
    return countObj;
  }, {});
};

const dedup = function(str) {
  return _.uniq(str.split('')).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};
