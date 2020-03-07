/**
 * Given an array of integers,
 * find the first missing positive integer in linear time and constant space.
 * In other words, find the lowest positive integer that does not exist in the array.
 * The array can contain duplicates and negative numbers as well.
 * @param {array} numbers
 * @return {number} The missing number
 */

// O(n)
module.exports = function findMissingLowestPositiveInteger(numbers) {
  if (!numbers || numbers.length === 0) return 1;
  let missingIntegers = [];
  // Assume in place sorting
  const sortedNumbers = numbers.sort((a, b) => a - b);
  sortedNumbers.forEach((number, index) => {
    let difference = 0;
    const isLastIndex = sortedNumbers.length - 1 === index;
    if (!isLastIndex) {
      difference = sortedNumbers[index + 1] - number;
      if (difference > 1 && number >= 0) {
        missingIntegers.push(number + 1);
      }
    }
    if (isLastIndex) {
      number >= 0 ? missingIntegers.push(number + 1) : missingIntegers.push(1);
    }
  });
  return missingIntegers[0];
};
