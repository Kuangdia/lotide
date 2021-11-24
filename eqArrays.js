const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🦖 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🦑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let compare = arr1.every(function(value, index) {
    return arr1[index] === arr2[index];
  });
  return compare;
}

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

// Takes 2 array and returns true / false
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false