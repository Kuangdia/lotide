const assert = require('chai').assert;
const tail   = require('../tail');

describe("tail", () => {
  it("should return [] if words.length <= 1", () => {
    const word = ["bunny"];
    assert.deepEqual(tail(word), []);
  });

  it("should return word if word.length === 2", () => {
    const word = ["bunny", "lala"];
    assert.deepEqual(tail(word), ["lala"]);
  });

  it("should return words if word.length === 3", () => {
    const word = ["bunny", "lala", "flora"];
    assert.deepEqual(tail(word), ["lala", "flora"]);
  })

})

// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


// const word = ["bunny"];
// let name1 = tail(word);
// assertEqual(name1, 0);