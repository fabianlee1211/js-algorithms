/**
 * Checks if the string ends with the target string.
 * @param {string} str
 * @param {string} target
 * @return {boolean} The index of the target element within the array.
 */
module.exports = function confirmEnding(str, target) {
  const truncatedString = str.replace(/[^A-Za-z0-9]/g, '');
  const endChar = truncatedString.substring(
    truncatedString.length - target.length
  );
  if (endChar === target) return true;
  return false;
};
