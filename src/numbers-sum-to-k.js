/**
 * Given a list of numbers and a number k,
 * return whether any 2 numbers from the list add up to k
 * @param {array} numbers
 * @param {number} k - The targeted sum
 * @return {boolean} - whether the 2 numbers exist
 */

// O(n)
module.exports = function includesNumbersSumtoK(numbers, k) {
  let checked = new Set();
  for (let i = 0; i < numbers.length; i++) {
    if (checked.has(k - numbers[i])) return true;
    checked.add(numbers[i]);
  }
  return false;
};

// O(n^2)
// function includesNumbersSumtoK(numbers, k) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers.includes(k - numbers[i])) return true;
//   }
//   return false;
// }
