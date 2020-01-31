/**
 * This function finds the one missing letter in an alphabetical sequence.
 * @param {string} str
 * @return {string} The missing letter
 */
module.exports = function findMissingLetter(str) {
  const arr = str.toUpperCase();
  const first = str.charCodeAt(0);
  for (let i = 1; i < arr.length; i++) {
    if (str.charCodeAt(i) !== first + i) return String.fromCharCode(first + i);
  }
  return undefined;
};
