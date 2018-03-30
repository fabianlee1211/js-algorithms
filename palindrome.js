/**
 * Checks if a string is a palindrome.
 * @param {string} str
 * @return {boolean} The boolean value of the checking.
 */
function palindrome(str) {
  
  str = str.replace(/[^A-Za-z0-9]/g, '');
  str = str.toLowerCase();
  
  var originalString = str.split('');
  var reversedString = str.split('').reverse();
  
  if (originalString.length != reversedString.length){
    return false;
  }
  
  for(var i=0; i<originalString.length; i++){
    if(originalString[i] != reversedString[i]) return false;
  } 
  return true;
}
