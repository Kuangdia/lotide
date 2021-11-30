const assertEqual = require('./assertEqual');

const tail = function(words) {
  let arr = [];
  if (words.length <= 1) {
    return arr;
  }

  if (words.length === 2) {
    let length2 = words.slice(1, 2)
    return length2;
  } else {
    let wordLength = words.slice(1, (words.length));
    return wordLength;
  }
};

module.exports = tail;
