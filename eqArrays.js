const assertEqual = require('./assertEqual');


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let compare = arr1.every(function(value, index) {
    return arr1[index] === arr2[index];
  });
  return compare;
}

module.exports = eqArrays;