// This function finds the one missing letter in an alphabetical sequence.

function findMissingLetter(str) {
  var arr = str.toUpperCase();
  var first = str.charCodeAt(0);
  for(var i=1; i<arr.length; i++){
    if(str.charCodeAt(i) !== first+i) return String.fromCharCode(first+i);
    else continue;
  }
  return undefined;
}
