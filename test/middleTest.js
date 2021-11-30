const assert = require('chai').assert;
const middle   = require('../middle');

describe("middle", () => {
  it("returns empty arrays with 1-2 elements", () => {
    assert.deepEqual(middle([1]), [])
  });

  it("returns middle of an array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });

  it("return middle element with odd number array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

});