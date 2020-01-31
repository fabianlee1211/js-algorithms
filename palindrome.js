/**
 * Checks if a string is a palindrome.
 * @param {string} str
 * @return {boolean} The boolean value of the checking.
 */
module.exports = function palindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '');
  str = str.toLowerCase();

  const originalString = str.split('');
  const reversedString = str.split('').reverse();

  for (let i = 0; i < originalString.length; i++) {
    if (originalString[i] !== reversedString[i]) return false;
  }

  return true;
};
