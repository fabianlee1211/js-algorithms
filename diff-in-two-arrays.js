// This function finds the difference of the elements in two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
  var sortArr = [];
 
  newArr = arr1.concat(arr2);
  sortArr = newArr.slice().sort();
  newArr = sortArr.filter(function(el){
    return !(arr1.indexOf(el) > -1 && arr2.indexOf(el) > -1);
  });
  
  return newArr;
}
