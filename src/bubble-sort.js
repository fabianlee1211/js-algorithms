/**
 * Bubble sort algorithm
 * @param {array} numbers
 * @return {array} The sorted array
 */
module.exports = function bubbleSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      const temp = numbers[j];
      if (numbers[j] > numbers[j + 1]) {
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
};
