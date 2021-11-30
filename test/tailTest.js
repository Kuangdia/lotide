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

});