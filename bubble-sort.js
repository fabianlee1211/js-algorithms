/**
 * Bubble sort algorithm
 * @param {array} numbers
 * @return {array} The sorted array
 */
function bubbleSort(numbers) {
  for(let i = 0; i < numbers.length; i++) {
    for(let j = 0; j < numbers.length - i - 1; j++) {
      let temp = numbers[j];
      if(numbers[j] > numbers[j+1]) {
        numbers[j] = numbers[j+1];
        numbers[j+1] = temp;
      } else continue;
    }
  }
  return numbers;
}
