// This function finds the longest word in a sentence.

function findLongestWord(str) {
  var splitArray = str.split(' ');
  var max = 0;
  
  for(var i=0; i<splitArray.length; i++){
    if(max < splitArray[i].length) max = splitArray[i].length;
  }
  return max;
}
