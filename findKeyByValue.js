const assertEqual = require('./assertEqual');

// Function - Uses object + object value => to find first key
// else => return undefined

// Using for in loop
const findKeyByValue = function(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
}

// Using for of loop 
// const findKeyByValue = function(obj, value) {
//   const arr = Object.keys(obj);

//   for (const key of arr) {
//     if (obj[key] === value) {
//       return key;
//     }
//   }
// }


// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;