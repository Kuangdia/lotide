const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

/* Function returns a "slice of the array with elements taken from the beginning." 
  It should keep going until the callback/predicate returns a truthy value.
  The callback should only be provided one value: The item in the array.
*/

const takeUntil = function(array, callback) {
  let output = [];
  
  for (const item of array) {
    if (!callback(item)) {
      output.push(item)
    } else {
      break;
    }
  }
  return output;
}


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2])); // true
// console.log(assertArraysEqual(results2, ["I've", "been", "to"])); // false

/*
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

module.exports = takeUntil;