const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(words, itemsToRemove) {
  let finalArr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== itemsToRemove[i]) {
      finalArr.push(words[i]);
    }
  }
  return finalArr;
}

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));


//console.log(without([1, 2, 3], [1])) // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

module.exports = without;