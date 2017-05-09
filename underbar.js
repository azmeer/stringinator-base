// Returns the given value. Seems pointless perhaps but see its use below for providing a default, no-op callback.
const identity = function(val) {
  return val;
};

// Returns the first n elements of the given array.
const first = function(array, n = 1) {
  return (n === 1) ? array[0] : array.slice(0, n);
};

// Returns the last n elements of the given array.
const last = function(array, n = 1) {
  return (n === 1) ? array[array.length - 1] :
    array.slice(Math.max(0, array.length - n), array.length);
};

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function(array, target, fromIndex=0) {
  let result = -1;
  each(array, 
       ((el, index) =>
        (index >= fromIndex) && (result === -1) && (el === target) &&
        (result = index)));
  return result;
};

const isArrayLike = function(obj) {
  const length =  obj['length'];
  return typeof(length) === 'number' && length >= 0;
};

// The cornerstone of a functional library -- iterate all elements, pass each to a callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function(obj, callback=identity) {
  if (isArrayLike(obj)) {
    for (let  index = 0; index < obj.length; index++ ) {
      callback(obj[index], index, obj);
    }
  } else {
    for (let key in obj) {
      callback(obj[key], key, obj);
    }
  }
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function(obj, callback=identity) {
  const results = [];
  each(obj, (currentValue, currentIndexOrKey, obj) => {
    results.push(callback(currentValue, currentIndexOrKey, obj));
  });
  return results;
};

// Return an array of the values of a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function(obj, key) {
  return map(obj, item => item[key]);
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).
const reduce = function(obj, callback=identity, initialValue) {
  let accumulator = initialValue;
  let initializing = (accumulator === undefined);
  each(obj, (currentValue, currentIndexOrKey, iteratedObject) => {
    if (initializing) {
      accumulator = currentValue;
      initializing = false;
    } else {
      accumulator = callback(accumulator, currentValue, currentIndexOrKey, iteratedObject);
    }
  });
  return accumulator;
};

// Return true if the object contains the target.
const contains = function(obj, target) {
  return reduce(obj, (found, el) => { return found || (el === target); }, false);
};

// Return true if all the elements / object values are accepted by the callback.
const every = function(obj, callback=identity) {
  return reduce(obj, (allPassed, el) => {
    return allPassed && !!callback(el);
  }, true);
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function(obj, callback=identity) {
  return reduce(obj, (anyPassed, el) => {
    return anyPassed || !!callback(el);
  }, false);
};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function(obj, callback=identity) {
  let passedList = [];
  each(obj, el => {if (callback(el)) passedList.push(el);});
  return passedList;
};

// Return object without the elements / object valuesthat were rejected by the callback.
const reject = function(arr, callback=identity) {
  // Your code goes here
};

// De-duplicates (de-dups) the elements / object values.
const uniq = function(obj) {
  // Your code goes here
};


module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq
};
