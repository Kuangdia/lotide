/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  let compare = arr1.every(function(value, index) {
    return arr1[index] === arr2[index];
  });
  return compare;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🦖 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🦑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[2]);

console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])); // true
console.log(assertArraysEqual(results2, [ 'r', 'o', undefined, 'a', 'o' ])); // false
console.log(assertArraysEqual(results3, [ 'o', 'n', undefined, 'j', 'm' ])); // true