/**
 * Checks if the string ends with the target string.
 * @param {string} str
 * @param {string} target
 * @return {boolean} The index of the target element within the array.
 */
function confirmEnding(str, target) {
  str = str.replace(/[^A-Za-z0-9]/g, '')
  var endChar = str.substring(str.length - target.length)
  if (endChar === target) return true
  else return false
}
