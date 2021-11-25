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

// Return all indices (zero-based positions) in the string

const letterPositions = function(sentence) {
  const results = {};
  const string = sentence.replace(/\s/g, "")

  for (let i = 0 ; i < string.length; i++) {
    if (!results[string[i]]) {
      results[string[i]] = [];
    }
    results[string[i]].push(i);
  }
  return results;
};

assertArraysEqual(letterPositions("hello").h, [0]);
console.log(letterPositions("lighthouse in the house"));

/*
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/