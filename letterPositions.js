const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Return all indices (zero-based positions) in the string

const letterPositions = function(sentence) {
  const results = {};
  const string = sentence.replace(/\s/g, "")

  for (const index in sentence) {
    if (sentence[index] !== " ") {
      if (!results[sentence[index]]) {
        results[sentence[index]] = [];
      }
      results[sentence[index]].push(index);
    }
  }

  // for (let i = 0 ; i < string.length; i++) {
  //   if (!results[string[i]]) {
  //     console.log(!results[string[i]]);
  //     results[string[i]] = [];
  //   }
  //   results[string[i]].push(i);
  // }
  return results;
};

// assertArraysEqual(letterPositions("hello").h, [0]);
// console.log(letterPositions("lighthouse in the house"));

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

module.exports = letterPositions;