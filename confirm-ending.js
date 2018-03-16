// This function checks if a string ends with a targeted string

function confirmEnding(str, target) {
  str = str.replace(/[^A-Za-z0-9]/g, '');
  var endChar = str.substring(str.length - target.length);
  if (endChar === target) return true;
  else return false;
}
