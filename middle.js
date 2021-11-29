const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let arr = [];
  if (array.length < 3) {
    return arr;
  }

  let evenMid1 = array[Math.floor((array.length - 1) / 2)]
  let evenMid2 = array[Math.round(array.length) / 2]
  if (array.length % 2 !== 0) {
    return [array[Math.round(array.length - 1) / 2]];
  } else {
    return [evenMid1, evenMid2];
  }
}

module.exports = middle;