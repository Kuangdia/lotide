const assertEqual = require('./assertEqual');

const tail = function(words) {
  let arr = [];
  if (words.length <= 1) {
    return arr;
  } else {
    return words.slice(1, (words.length));
  }
};

module.exports = tail;
