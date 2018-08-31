function uniqueArrayValues (arr) {
  let newArr = [];
  while (arr.length > 0) {
  	if(newArr.includes(arr[0])) {
    	arr.shift();
      continue;
    }
  	newArr.push(arr[0]);
    arr.shift();
  }
  return newArr;
}
