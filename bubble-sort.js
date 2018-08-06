let arr = [15,2,7,4,1,10,9,8];

function bubbleSort(numbers) {
  for(let i = 0; i < numbers.length; i++) {
    // console.log('Outer count: ' + i );
    for(let j = 0; j < numbers.length - i - 1; j++) {
      // console.log('Inner count: ' + j );
      let temp = numbers[j];
      if(numbers[j] > numbers[j+1]) {
        numbers[j] = numbers[j+1];
        numbers[j+1] = temp;
        console.log(numbers);
      } else continue;
    }
  }
}
