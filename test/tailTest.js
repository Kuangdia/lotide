const assert = require('chai').assert;
const tail   = require('../tail');

describe("tail", () => {
  it("should return 0 if words.length <= 1", () => {
    const word = ["bunny"];
    assert.strictEqual(tail(word), 0);
  });

  it("should return 1 if word.length === 2", () => {
    const word = ["bunny", "lala"];
    assert.strictEqual(tail(word), 1);
  });

  it("should return 2 if word.length === 3", () => {
    const word = ["bunny", "lala", "flora"];
    assert.strictEqual(tail(word), 2);
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