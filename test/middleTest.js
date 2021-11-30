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

})

// // test
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));

// // Arrays with 1-2 elements have NO middle => return empty array
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []

// // Array with odd number of elements => return middle element
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]

// // Array with even number of elements => return 2 middle elements
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]