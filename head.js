const assertEqual = require('./assertEqual');

const head = function(first) {
  return first.shift();
}

module.exports = head;