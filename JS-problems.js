/**************problem - 01*************
 *
 */
// const result1

/**************problem - 01*************
 * count string how much repeat ignore special charecter and white space
 */
const countCharacter = (str) => {
  const countChar = {};
  const char = str
    .match(/[a-zA-Z]+/g)
    .join("")
    .toLowerCase();
  for (let i = 0; i < char.length; i++) {
    if (countChar[char[i]] > 0) {
      countChar[char[i]] += 1;
    } else {
      countChar[char[i]] = 1;
    }
  }
  return countChar;
};
const result1 = countCharacter("hello Everyone!!!");

/**************problem - 02*************
 * find pair of square from two array
 */

// const findPair = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     const pair = arr2.indexOf(arr1[i] ** 2);
//     if (pair === -1) return false;
//   }
//   return true;
// };
// const result2 = findPair([2, 3, 4], [4, 9, 16]);
// console.log(result2);

// n * n = n^2

const findPair = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const sequenceCounter1 = {};
  const sequenceCounter2 = {};
  for (let val of arr1) {
    sequenceCounter1[val] = sequenceCounter1[val] + 1 || 1;
  }
  for (let val of arr2) {
    sequenceCounter2[val] = sequenceCounter2[val] + 1 || 1;
  }
  for (let key in sequenceCounter1) {
    if (!(key ** 2 in sequenceCounter2)) {
      return false;
    }
    if (sequenceCounter2[key ** 2] !== sequenceCounter1[key]) {
      return false;
    }
  }
  return true;
};
const result2 = findPair([2, 3, 4], [4, 9, 16]);
console.log(result2);
