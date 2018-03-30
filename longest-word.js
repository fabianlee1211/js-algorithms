/**
 * Searches for the longest word in a string
 * @param {string} str
 * @return {string} max The longest word in the string.
 */
function findLongestWord(str) {
  var splitArray = str.split(' ');
  var max = '';
  
  for(var i=0; i<splitArray.length; i++){
    if(max.length < splitArray[i].length) max = splitArray[i];
  }
  max = max.replace(/[^a-zA-Z0-9]/g, '')
  return max;
}
