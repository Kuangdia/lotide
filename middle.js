const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  array.sort();

  let arr = [];
  if (array.length < 3) {
    return arr;
  }

  const middleIndex = Math.floor(array.length / 2)
  if (array.length % 2 === 0) {
    const otherIndex = middleIndex - 1;
    const middleOne = array[middleIndex];
    const middleTwo = array[otherIndex];

    return [middleTwo, middleOne];
  }
    // if odd-length return middle number
    // this returns the index of middle number
    const targetValue = array[middleIndex];
    return [targetValue];
}

module.exports = middle;