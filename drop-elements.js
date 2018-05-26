function dropElements(arr, func) {

  if(arr.length <= 0) return arr;
 
  if(func(arr[0]) === false) {
    arr.shift();
    dropElements(arr, func);
  } 
  
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5; });
