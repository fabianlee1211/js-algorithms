/**
 * Truncate some number of letters and replace the extra letters with '...'
 * @param {string} str Original string
 * @param {number} num Max length of string before truncating
 * @return {string} Truncated string
 */
module.exports = function truncateString(str, num) {
  if (num < 1 || str === '') return '';
  if (num >= str.length) return str;
  if (num < 4) {
    return `${str.substring(0, num)}...`;
  } else return `${str.substring(0, num - 3)}...`;
};
