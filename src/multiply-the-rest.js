/**
 * Given an array of integers,
 * return a new array such that each element at index i of the new array
 * is the product of all the numbers in the original array except the one at i.
 * @param {array} numbers
 * @return {array} The new array
 */

// O(n)
module.exports = function multiplyTheRest(numbers) {
  const largestProduct = numbers.reduce((a, v) => a * v);
  return numbers.map(number => largestProduct / number);
};
