/**
 * Truncate some number of letters and replace the extra letters with '...'
 * @param {string} str Original string
 * @param {number} num Max length of string before truncating
 * @return {string} Truncated string
 */
module.exports = function truncateString(str, num) {
  let truncatedString = '';
  if (num < 1) return '';
  if (num >= str.length) return str;
  if (num < 4) {
    truncatedString = `${str.substring(0, num)}...`;
  } else truncatedString = `${str.substring(0, num - 3)}...`;

  return truncatedString;
};
