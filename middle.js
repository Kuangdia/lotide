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

// test
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));

// Arrays with 1-2 elements have NO middle => return empty array
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

// Array with odd number of elements => return middle element
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

// Array with even number of elements => return 2 middle elements
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]