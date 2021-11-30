const assertEqual = require('./assertEqual');

// Takes in a string sentence => return count of each letter
const countLetters = function(sentence) {
  const letters = {};
  const strippedSentence = sentence.replace(/\s/g, "");

  for (const character of strippedSentence) {
    if (letters[character]) {
      letters[character]++;
    } else {
      letters[character] = 1
    }
  }

  return letters;

  // for (let i = 0; i < string.length; i ++) {
  //   total(string[i]);
  // }
  // return letters;

  // function total(count) {
  //   if (letters[count]) {
  //     letters[count]++;
  //   } else {
  //     letters[count] = 1;
  //   }
  // }

};


// console.log(countLetters("lighthouse in the house"));

/*
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/

module.exports = countLetters;